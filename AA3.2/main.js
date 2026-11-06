//IMPORTACIÓN DE THREE
import * as THREE from 'three';

// Crear la escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x101827);

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Crear el renderizador
const canvasElement = document.querySelector('#escena');
const renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
renderer.setSize(window.innerWidth, window.innerHeight);

// crear geometria de anillo
const geometry = new THREE.TorusGeometry(1, 0.35, 16, 80);

// crear material
const material = new THREE.MeshBasicMaterial({ color: 0x00ccff });

// crear malla
const anillo = new THREE.Mesh(geometry, material);

// agregar anillo a la escena
scene.add(anillo);

// Función de animación es crear bucle
function animate() {
    requestAnimationFrame(animate);
    anillo.rotation.x += 0.01;
    anillo.rotation.y += 0.01;
    renderer.render(scene, camera);
}
//iniciar animación
animate();

// Ajustar el tamaño del renderizador cuando la ventana cambie de tamaño
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});