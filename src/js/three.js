import * as THREE from 'three';
const scene = new THREE.Scene();


//La propiedad scene.background define qué se verá detrás de los objetos 3D. Al asignarle un color, estás
//scene.background = new THREE.Color(0x665666); //conmentar esta linear para transparencia
const camera = new THREE.PerspectiveCamera(
    60,              
    window.innerWidth / window.innerHeight, 
    0.1,                            
    1000                         
);
//crea una cuadrícula visual de referencia (como un plano de suelo) en tu escena 3D.
//new THREE.GridHelper(tamaño, divisiones);
const grid = new THREE.GridHelper(50, 50);
scene.add(grid); //añadimos a la escena




//luz direccional, que es un tipo de luz que simula la luz del 
//sol: ilumina todos los objetos en una dirección específica, como si viniera de muy lejos, y con la misma intensidad en todas partes.
const luz = new THREE.DirectionalLight(0xffffff, 1, 100); // color blanco, intensidad 1
luz.position.set(-5, 2, 10); // Dirección desde donde viene la luz
luz.castShadow = true; // <- Esto activa la proyección de sombras
scene.add(luz);//añadimos a la escena

const renderer = new THREE.WebGLRenderer({alpha: true});// con transparencia
//const renderer = new THREE.WebGLRenderer(); sin transparencia
renderer.shadowMap.enabled = true; //Activar el renderizado de sombras en el renderer

renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement);    

renderer.render(scene, camera);
const geometry = new THREE.BoxGeometry();
//const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const material = new THREE.MeshStandardMaterial({ color: 0x00ffff }); //kmaterial con sombra
const cubo = new THREE.Mesh(geometry, material);
cubo.castShadow = true; // <- Tambien a esta para activar la proyección de sombras de la luz
cubo.position.set(2,-1,3); //posición del cubo
scene.add(cubo);

//Plano
//Una geometría plana, bidimensional, como un rectángulo o una "superficie plana" en 3D.
const geometriaPlano = new THREE.PlaneGeometry(20,20,32,32);
const planoMaterial = new THREE.MeshStandardMaterial({color: 0xff0000});
const plano = new THREE.Mesh(geometriaPlano, planoMaterial);
plano.receiveShadow = true; //Esta recibe las sombras
plano.position.set(0,0,0);
scene.add(plano);





camera.position.z = 8; // Aleja la cámara 18 unidades hacia atrás (eje Z), permitiendo ver más de la escena.
camera.position.y = -15;  // Eleva la cámara 5 unidades hacia arriba (eje Y), dando una vista desde arriba.
//camera.position.x = 0;  // Mantiene la cámara centrada horizontalmente (eje X).

//Rotación de la camara
camera.rotation.x = 1


window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame( animate );

    cubo.rotation.x += 0.005;
    //cubo.rotation.y += 0.005;

    renderer.render( scene, camera );
}

animate(); 