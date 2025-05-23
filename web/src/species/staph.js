// mod/bacteria/web/src/species/staph.js

import * as THREE from 'three';

const BASE_RADIUS     = 0.4;    
const BASE_LENGTH     = BASE_RADIUS * 2; 
let SPACING         = 0.9;    
const MAX_INSTANCES   = 20000;
const EXPONENTIAL_IT  = 28;  

let cells = [];
let mesh  = null;

export class StaphBacteria {
  constructor(scene, color) {
    this.scene = scene;
    this.color = color;
    this.iter  = 0;
    this._initMesh();
    this._spawnOne();
  }

  _initMesh() {
    // Sphere pivoted at center
    const geo = new THREE.SphereGeometry(BASE_RADIUS, 16, 16);
    const mat = new THREE.MeshStandardMaterial({
      color: this.color,
      side: THREE.DoubleSide
    });
    mesh = new THREE.InstancedMesh(geo, mat, MAX_INSTANCES);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(mesh);
  }

  _spawnOne() {
    const pos   = new THREE.Vector3(0, 1.5, 0);
    const angle = Math.random() * Math.PI * 2;
    cells.push({ position: pos, angle, length: BASE_LENGTH });
    this._updateMesh();
  }

  _elongate() {
    // stretch by 0.2 * growthMultiplier each
    const inc = 0.2 * (window.growthMultiplier ?? 1);
    for (const c of cells) {
      c.length += inc;
    }
  }

  _smoothDivide(count) {
    if (count <= 0 || cells.length === 0) return;
    // pick random `count` parents
    const idxs = Array.from(cells.keys())
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(count, cells.length));
    const sel = new Set(idxs);
    const out = [];

    for (let i = 0; i < cells.length; i++) {
      const p = cells[i];
      if (sel.has(i)) {
        // divide p into two daughters
        const dir = new THREE.Vector3(p.length, 0, 0)
          .applyAxisAngle(new THREE.Vector3(0,1,0), p.angle);
        const tip = p.position.clone().add(dir);

        const δ = (Math.random() * (Math.PI/3)) - (Math.PI/6);
        [ p.angle + δ, p.angle + δ + Math.PI ].forEach(a => {
          const off = new THREE.Vector3(SPACING,0,0)
            .applyAxisAngle(new THREE.Vector3(0,1,0), a);
          out.push({
            position: tip.clone().add(off),
            angle:    a,
            length:   BASE_LENGTH
          });
        });
      } else {
        // keep unchanged
        out.push(p);
      }
    }

    cells = out;
  }

  _spawnMore(count) {
    // exactly same as smoothDivide
    this._smoothDivide(count);
  }

  _updateMesh() {
    const tmp = new THREE.Object3D();
    let i = 0;
    for (const c of cells) {
      tmp.position.copy(c.position);
      tmp.rotation.set(0, c.angle, 0);
      // scale X so sphere → oval of length c.length
      const s = c.length / BASE_LENGTH;
      tmp.scale.set(s, 1, 1);
      tmp.updateMatrix();
      mesh.setMatrixAt(i++, tmp.matrix);
    }
    mesh.count = i;
    mesh.instanceMatrix.needsUpdate = true;
  }

  update() {
    this.iter++;

    if (this.iter <= EXPONENTIAL_IT) {
      if (this.iter % 2 === 1) {
        // odd → elongate
        this._elongate();
      } else {
        // even → smooth divide a fraction
        const toSplit = Math.round(cells.length * (window.growthMultiplier ?? 1));
        this._smoothDivide(toSplit);
      }
    } else if (this.iter % 2 === 0) {
      SPACING = 7;
      const N = Math.round(150 * (window.growthMultiplier ?? 1));
      this._spawnMore(N);
    }

    this._updateMesh();
  }

  killAll() {
    cells = [];
    if (mesh) {
      mesh.count = 0;
      mesh.instanceMatrix.needsUpdate = true;
    }
  }

  killFraction(f) {
    if (f <= 0) return;
    if (f >= 1) return this.killAll();
    cells = cells.filter(() => Math.random() > f);
    this._updateMesh();
  }
}
