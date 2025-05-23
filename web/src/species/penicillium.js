// mod/bacteria/web/src/species/penicillium.js

import * as THREE from 'three';

const SEGMENT_LEN     = 0.5;
const BRANCH_THRESHOLD= SEGMENT_LEN;
const BRANCH_ANGLE    = 22 * Math.PI / 180;
const MAX_SEGMENTS    = 200000;
const MAX_SPORES      = 200000;
const AGAR_Y          = 1.5;

export class Penicillium {
  constructor(scene, color) {
    this.scene    = scene;
    this.color    = color;
    this.iter     = 0;
    this.tips     = [];
    this.segments = [];
    this.spores   = [];

    this._setupMeshes();
    this._initTips();
    this._updateMeshes();
  }

  _setupMeshes() {
    const segGeo = new THREE.CylinderGeometry(0.05, 0.05, SEGMENT_LEN, 6);
    const segMat = new THREE.MeshBasicMaterial({ color: this.color });
    this.hyphaMesh = new THREE.InstancedMesh(segGeo, segMat, MAX_SEGMENTS);
    this.hyphaMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.hyphaMesh);

    const spGeo = new THREE.SphereGeometry(0.1, 12, 8);
    const spMat = new THREE.MeshBasicMaterial({ color: this.color });
    this.sporeMesh = new THREE.InstancedMesh(spGeo, spMat, MAX_SPORES);
    this.sporeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.sporeMesh);
  }

  _initTips() {
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const pos   = new THREE.Vector3(
        Math.cos(angle) * SEGMENT_LEN,
        AGAR_Y,
        Math.sin(angle) * SEGMENT_LEN
      );
      const dir   = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle)).normalize();
      this.spores.push(pos.clone());
      this.tips.push({ pos: pos.clone(), dir, phase: 0 });
    }
  }

  update() {
    this.iter++;
    const newTips   = [];
    const newSpores = [];

    for (const tip of this.tips) {
      if (tip.phase === 0) {
        this.segments.push({
          start: tip.pos.clone(),
          dir:   tip.dir.clone(),
          len:   SEGMENT_LEN
        });
        const nextPos = tip.pos.clone().add(tip.dir.clone().multiplyScalar(SEGMENT_LEN));
        newTips.push({
          pos:           nextPos,
          dir:           tip.dir.clone(),
          phase:         1,
          currentLength: SEGMENT_LEN
        });

      } else if (tip.phase === 1) {
        const grown = tip.currentLength + SEGMENT_LEN;
        this.segments.push({
          start: tip.pos.clone(),
          dir:   tip.dir.clone(),
          len:   SEGMENT_LEN
        });
        const nextPos = tip.pos.clone().add(tip.dir.clone().multiplyScalar(SEGMENT_LEN));

        if (grown < BRANCH_THRESHOLD) {
          newTips.push({
            pos:           nextPos,
            dir:           tip.dir.clone(),
            phase:         1,
            currentLength: grown
          });
        } else {
          newTips.push({
            pos:   nextPos,
            dir:   tip.dir.clone(),
            phase: 2
          });
        }

      } else {
        const base  = tip.dir.clone();
        const left  = base.clone()
          .applyAxisAngle(new THREE.Vector3(0,1,0),  BRANCH_ANGLE)
          .normalize();
        const right = base.clone()
          .applyAxisAngle(new THREE.Vector3(0,1,0), -BRANCH_ANGLE)
          .normalize();

        this.segments.push({ start: tip.pos.clone(), dir: left,  len: SEGMENT_LEN });
        this.segments.push({ start: tip.pos.clone(), dir: right, len: SEGMENT_LEN });

        const posL = tip.pos.clone().add(left.clone().multiplyScalar(SEGMENT_LEN));
        const posR = tip.pos.clone().add(right.clone().multiplyScalar(SEGMENT_LEN));

        if (this.iter <= 30 && window.growthMultiplier > 0.5) {
          newSpores.push(posL.clone(), posR.clone());
          newTips.push(
            { pos: posL, dir: left,  phase: 0 },
            { pos: posR, dir: right, phase: 0 }
          );
        } else {
          const pickLeft = Math.random() < 0.5;
          const P = pickLeft ? posL : posR;
          const D = pickLeft ? left : right;
          newSpores.push(P.clone());
          newTips.push({ pos: P, dir: D, phase: 0 });
        }
      }
    }

    this.tips   = newTips;
    this.spores = newSpores;
    this._updateMeshes();
  }

  _updateMeshes() {
    const dummy = new THREE.Object3D();
    const up    = new THREE.Vector3(0,1,0);

    let i = 0;
    for (const seg of this.segments) {
      if (i >= MAX_SEGMENTS) break;
      const mid = seg.start.clone().add(seg.dir.clone().multiplyScalar(seg.len/2));
      dummy.position.copy(mid);
      dummy.quaternion.setFromUnitVectors(up, seg.dir.clone().normalize());
      dummy.scale.set(1, seg.len / SEGMENT_LEN, 1);
      dummy.updateMatrix();
      this.hyphaMesh.setMatrixAt(i++, dummy.matrix);
    }
    this.hyphaMesh.count = i;
    this.hyphaMesh.instanceMatrix.needsUpdate = true;

    let j = 0;
    for (const p of this.spores) {
      if (j >= MAX_SPORES) break;
      dummy.position.set(p.x, p.y - 0.02, p.z);
      dummy.quaternion.identity();
      dummy.scale.set(1,1,1);
      dummy.updateMatrix();
      this.sporeMesh.setMatrixAt(j++, dummy.matrix);
    }
    this.sporeMesh.count = j;
    this.sporeMesh.instanceMatrix.needsUpdate = true;
  }

  killAll() {
    this.scene.remove(this.hyphaMesh, this.sporeMesh);
    this.hyphaMesh.geometry.dispose();
    this.hyphaMesh.material.dispose();
    this.sporeMesh.geometry.dispose();
    this.sporeMesh.material.dispose();
    this.segments = [];
    this.spores   = [];
    this.tips     = [];
  }

  killFraction(fraction) {
    if (fraction <= 0) return;
    if (fraction >= 1) return this.killAll();
  
    const segKill = Math.floor(this.segments.length * fraction);
    const spKill  = Math.floor(this.spores.length   * fraction);
    const tipKill = Math.floor(this.tips.length     * fraction);
  
    if (segKill) this.segments.splice(-segKill, segKill);
    if (spKill ) this.spores.splice(-spKill,    spKill);
    if (tipKill) this.tips.splice(-tipKill,    tipKill);
  
    this._updateMeshes();
  }
}
