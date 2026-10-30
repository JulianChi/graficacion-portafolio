import * as THREE from 'three';

// ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x141826); //0xf0f0f0

// CÁMARA 
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 7;

// WEBGL
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// SEMÁFORO
const geometriaCaja = new THREE.BoxGeometry(1.6, 4.2, 0.8);
const materialCaja = new THREE.MeshStandardMaterial({
  color: 0x252525
});
const caja = new THREE.Mesh(geometriaCaja, materialCaja);
caja.position.x = -1.8;
scene.add(caja);

const geometriaEsfera = new THREE.SphereGeometry(0.48, 32, 32);

const materialRojo = new THREE.MeshStandardMaterial({
  color: 0xff0000
});
const esferaRoja = new THREE.Mesh(geometriaEsfera, materialRojo);
esferaRoja.position.x = -1.8;
esferaRoja.position.y = 1.2;
esferaRoja.position.z = 0.6;
scene.add(esferaRoja);

const materialAmarillo = new THREE.MeshStandardMaterial({
  color: 0xffff00
});
const esferaAmarilla = new THREE.Mesh(geometriaEsfera, materialAmarillo);
esferaAmarilla.position.x = -1.8;
esferaAmarilla.position.y = 0;
esferaAmarilla.position.z = 0.6;
scene.add(esferaAmarilla);

const materialVerde = new THREE.MeshStandardMaterial({
  color: 0x00ff00
});
const esferaVerde = new THREE.Mesh(geometriaEsfera, materialVerde);
esferaVerde.position.x = -1.8;
esferaVerde.position.y = -1.2;
esferaVerde.position.z = 0.6;
scene.add(esferaVerde);

// OBJETOS MESH
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshStandardMaterial({
  color: 0x0066cc,
  roughness: 0.3,
  metalness: 0.8,
  wireframe: true
});
const cubo = new THREE.Mesh(geometry, material);
cubo.position.x = 1.8;
scene.add(cubo);

// ILUMINACIÓN

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// ANIMACIÓN
function animate() {
  requestAnimationFrame(animate);

  // Animación de rotación 3D continua
  cubo.rotation.x += 0.01;
  cubo.rotation.y += 0.01;

  let escala = 1 + Math.sin(Date.now() * 0.003) * 0.3;
  cubo.scale.set(escala, escala, escala);

  renderer.render(scene, camera);
}

animate();

// RESPONSIVIDAD
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});