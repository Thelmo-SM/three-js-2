import * as THREE from 'three';


// Escena (Scene) es el contenedor principal de todo lo que va a existir en tu mundo 3D. 
// Es como el "escenario" o "teatro" donde colocas los objetos que quieres mostrar.
const scene = new THREE.Scene();

// La PerspectiveCamera es el tipo de cámara más común y se usa para simular cómo el ojo humano ve el mundo. 
// Muestra los objetos más lejanos más pequeños y los objetos más cercanos más grandes, creando una sensación realista de profundidad
const camera = new THREE.PerspectiveCamera(
    60,                               // Campo de visión (FOV): qué tan amplio ves la escena
    window.innerWidth / window.innerHeight, // Relación de aspecto (ancho entre alto de la pantalla)
    0.1,                              // Plano cercano: la distancia mínima a la que los objetos son visibles
    1000                              // Plano lejano: la distancia máxima a la que los objetos son visibles
);
camera.position.z = 5; // Aleja la cámara para que puedas ver mejor la escena

// WebGLRenderer es el motor de renderizado que se encarga de dibujar la escena en pantalla usando WebGL.
//Es el componente que toma la escena (Scene) y la cámara (Camera) y genera la imagen final que ves en el navegador.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Ajustar al tamaño de la ventana
document.body.appendChild(renderer.domElement);     // Agregar el canvas al documento

// Aquí me aseguro que el canvas sea responsive
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

renderer.render(scene, camera); // Muestra la escena desde el punto de vista de la cámara

// Una geometría define la forma o estructura de un objeto 3D a través de vértices,caras y aristas. 
// Luego, esa geometría se combina con un material para formar un mesh (malla), que es lo que realmente ves en la escena.
const geometry = new THREE.BoxGeometry();

//MeshBasicMaterial es un tipo de material que se aplica a una geometría para darle color o textura, y no reacciona a la luz.
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });

//Un Mesh (malla) es el objeto 3D que combina una geometría con un material para que pueda ser mostrado en la escena.
const cubo = new THREE.Mesh(geometry, material);

scene.add(cubo); // Añadir a la escena para que se vea

//Renderizar fotogramas
function animate() {
    //Le dice al navegador que ejecute la función animate de nuevo en el próximo frame (aproximadamente 60 veces por segundo).
    requestAnimationFrame( animate );

    // Cambiar algo en la escena, por ejemplo:
    cubo.rotation.x += 0.005;
    cubo.rotation.y += 0.005;

    //Pide a Three.js que dibuje (renderice) la escena desde el punto de vista de la cámara en cada frame.
    renderer.render( scene, camera );
}

animate(); //Llamamos a la función por primera vez para iniciar el ciclo.