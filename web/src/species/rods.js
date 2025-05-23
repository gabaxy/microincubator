// mod/bacteria/web/src/species/rods.js

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const BASE_LENGTH      = 2.0;
const CELL_WIDTH       = 0.4;
const CELL_HEIGHT      = 0.4;
let SPACING          = 0.9;
const MAX_INSTANCES    = 20000;
// number of “elongate/divide” cycles before we switch to random spawns
const EXPONENTIAL_IT   = 22;

let bacteria = [];
let mesh      = null;

export class RodBacteria {
  constructor(scene, color) {
    this.scene = scene;
    this.color = color;
    this.iter  = 0;
    this._initMesh();
    this._spawnOne();
  }

  _initMesh() {
    const geo = new RoundedBoxGeometry(
      BASE_LENGTH, CELL_HEIGHT, CELL_WIDTH,
      8, 0.3
    );
    // pivot so length extends along +X
    geo.translate(BASE_LENGTH/2, CELL_HEIGHT/2, 0);

    const mat = new THREE.MeshStandardMaterial({
      color: this.color,
      side: THREE.DoubleSide
    });

    mesh = new THREE.InstancedMesh(geo, mat, MAX_INSTANCES);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(mesh);
  }

  _spawnOne() {
    // initial single cell in center
    const pos   = new THREE.Vector3(0, 1.5, 0);
    const angle = Math.random() * Math.PI * 2;
    bacteria.push({ position: pos, angle, length: BASE_LENGTH });
    this._updateMesh();
  }

  _elongate() {
    const inc = 0.2 * (window.growthMultiplier ?? 1);
    for (const b of bacteria) {
      b.length += inc;
    }
  }

  _smoothDivide(count) {
    if (count <= 0 || bacteria.length === 0) return;
    const pick = Array.from(bacteria.keys())
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(count, bacteria.length));
    const sel = new Set(pick);
    const out = [];

    for (let i = 0; i < bacteria.length; i++) {
      const p = bacteria[i];
      if (sel.has(i)) {
        // divide this one into two daughters
        const dir = new THREE.Vector3(p.length, 0, 0)
          .applyAxisAngle(new THREE.Vector3(0,1,0), p.angle);
        const tip = p.position.clone().add(dir);

        const δ = Math.random()*(Math.PI/3) - Math.PI/6;
        [ p.angle + δ, p.angle + δ + Math.PI ].forEach(a => {
          const off = new THREE.Vector3(SPACING, 0, 0)
            .applyAxisAngle(new THREE.Vector3(0,1,0), a);
          out.push({
            position: tip.clone().add(off),
            angle:    a,
            length:   BASE_LENGTH
          });
        });
      } else {
        // keep un-split
        out.push(p);
      }
    }

    bacteria = out;
  }

  _spawnMore(count) {
    // exactly same as smoothDivide
    this._smoothDivide(count);
  }

  _updateMesh() {
    const tmp = new THREE.Object3D();
    let i = 0;
    for (const b of bacteria) {
      tmp.position.copy(b.position);
      tmp.rotation.set(0, b.angle, 0);
      tmp.scale.set(b.length/BASE_LENGTH, 1, 1);
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
        // odd ticks: grow
        this._elongate();
      } else {
        // even ticks: split only a fraction = growthMultiplier
        const frac      = window.growthMultiplier ?? 1;
        const toSplit   = Math.round(bacteria.length * frac);
        this._smoothDivide(toSplit);
      }
    } else if (this.iter % 2 === 0) {
      SPACING = 7;
      const N = Math.round(50 * (window.growthMultiplier ?? 1));
      this._spawnMore(N);
    }

    this._updateMesh();
  }

  killAll() {
    bacteria = [];
    if (mesh) {
      mesh.count = 0;
      mesh.instanceMatrix.needsUpdate = true;
    }
  }

  killFraction(f) {
    if (f <= 0) return;
    if (f >= 1) return this.killAll();
    bacteria = bacteria.filter(() => Math.random() > f);
    this._updateMesh();
  }
}
