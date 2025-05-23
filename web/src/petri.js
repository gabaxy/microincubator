// mod/bacteria/web/src/petri.js

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const outerRadius = 60;
const baseHeight  = 1;
const rimHeight   = 10;
const agarHeight  = 2;
const center      = new THREE.Vector3(0, 0, 0);

export function initPetriScene(color) {
  const container = document.getElementById('threejs-container');
  container.style.width = '100vw';
  container.style.height = '100vh';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, outerRadius * 2, outerRadius * 2);
  camera.lookAt(center);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.target.copy(center);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(outerRadius, outerRadius * 2, outerRadius);
  scene.add(dirLight);

  const ambient = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambient);

  // Petri dugnas
  const baseGeo = new THREE.CylinderGeometry(outerRadius, outerRadius, baseHeight, 64);
  const baseMat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide
  });
  const petriBase = new THREE.Mesh(baseGeo, baseMat);
  petriBase.position.set(center.x, center.y - baseHeight / 2, center.z);
  scene.add(petriBase);

  // Petri kraštas
  const rimGeo = new THREE.CylinderGeometry(
    outerRadius * 0.97,
    outerRadius * 0.97,
    rimHeight,
    64, 1, true
  );
  const rimMat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide
  });
  const petriRim = new THREE.Mesh(rimGeo, rimMat);
  petriRim.position.set(
    center.x,
    center.y + rimHeight / 2 - baseHeight / 2,
    center.z
  );
  scene.add(petriRim);

  // Petri agaras
  const agarGeo = new THREE.CylinderGeometry(
    outerRadius * 0.97,
    outerRadius * 0.97,
    agarHeight,
    64
  );
  const agarMat = new THREE.MeshPhongMaterial({
    color: color,
    transparent: true,
    opacity: 0.8
  });
  const agar = new THREE.Mesh(agarGeo, agarMat);
  agar.position.set(
    center.x,
    center.y - baseHeight / 2 + agarHeight / 2,
    center.z
  );
  scene.add(agar);

  window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  (function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  })();

  return { scene, camera, renderer, controls };
}
