import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//renderizar canvas
const canvas = document.querySelector('#canvas');

//crear escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xBDB76B);
 const camera = new THREE.PerspectiveCamera(60, //FOV es el angulo de vision de la camara
     window.innerWidth / window.innerHeight,//ancho y alto de la ventana
      0.1, //distancia minima de vision
       1000 //distancia maxima de vision
    );
    camera.position.set(0, 5, 12); //posicion de la camara en x, y, z

//crear renderizador
const renderizador = new THREE.WebGLRenderer({ canvas, antialias: true });//suavizar bordes
renderizador.setSize(window.innerWidth, window.innerHeight);//tamaño del renderizador
renderizador.setPixelRatio(Math.min(window.devicePixelRatio, 2));//ajustar la resolucion del renderizador a la del dispositivo
renderizador.shadowMap.enabled = true; //habilitar sombras
renderizador.shadowMap.type = THREE.PCFSoftShadowMap; //tipo de sombra
const luzAmb = new THREE.AmbientLight(0xffffff,0.4);
scene.add(luzAmb);

const luzSol = new THREE.DirectionalLight(0xffffff, 0.8);
luzSol.position.set(5, 10, 2);
luzSol.castShadow = true;
luzSol.shadow.mapSize.width = 1024;
luzSol.shadow.mapSize.height = 1024;
luzSol.shadow.camera.bias = -0.005;
scene.add(luzSol);
const controls = new OrbitControls(camera, renderizador.domElement);
controls.enableDamping = true; //suavizar movimiento de la camara
controls.dampingFactor = 0.05; //factor de suavizado

const  textureLoader = new THREE.TextureLoader();

const geometriacubo = new THREE.BoxGeometry(1, 1, 1);
const materialcubo = new THREE.MeshStandardMaterial({ color: 0xffffff,
map: textureLoader.load('https://threejs.org/examples/textures/crate.gif'),
 roughness: 0.7,
  metalness: 0.1
 });
 const cubo = new THREE.Mesh(geometriacubo, materialcubo);
 scene.add(cubo);
cubo.castShadow = true;

const pedestalArriba = 0.8;
const pedestalFondo = 1.0;
const pedestalAltura = 0.2;
const separacionPedestal = 0.8;
const pedestalSegmentos = 6; //numero de segmentos del pedestal
const geometriaPedestal = new THREE.CylinderGeometry(pedestalArriba, pedestalFondo, pedestalAltura, pedestalSegmentos);
const materialPedestal = new THREE.MeshStandardMaterial({ color: 0x8B4513});
const pedestal = new THREE.Mesh(geometriaPedestal, materialPedestal);
pedestal.position.y = 0;
pedestal.castShadow = true;
scene.add(pedestal);







const esferaRadio = 0.3;
const segmentosEsfera = 32;
const geometriaEsfera = new THREE.SphereGeometry(esferaRadio, segmentosEsfera, segmentosEsfera);
const materialEsfera = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const esfera = new THREE.Mesh(geometriaEsfera, materialEsfera);
esfera.position.y = 2.5;
esfera.castShadow = true;
esfera.receiveShadow = true;
scene.add(esfera);


cubo.position.y = 0.2 + separacionPedestal;

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
    renderizador.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

function animate() {
   //cubo.rotation.x += 0.01;
   cubo.rotation.y += 0.01;
    esfera.rotation.x += 0.01;
    controls.update();
    renderizador.render(scene, camera);
}
renderizador.setAnimationLoop(animate);

