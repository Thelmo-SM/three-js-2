# Proyecto 3D con Three.js

Este repositorio representa mi progreso en el aprendizaje de gráficos 3D usando [Three.js](https://threejs.org/), una librería poderosa de JavaScript que permite crear experiencias visuales interactivas en el navegador mediante WebGL.

## 🎯 Objetivo del proyecto

Explorar los fundamentos del desarrollo 3D con Three.js, incluyendo:

- Creación y renderizado de escenas.
- Iluminación y proyección de sombras.
- Manipulación de geometrías y materiales.
- Configuración de cámara y animaciones básicas.

## 🚀 Tecnologías utilizadas

- **Three.js** (renderizado 3D en WebGL)
- **JavaScript** (programación base)
- **HTML/CSS** (estructura y estilos mínimos)
- **Vite** o entorno local con servidor para pruebas (opcional)

## ✅ Progreso actual

- [x] Escena con fondo transparente (`alpha: true`).
- [x] Añadida luz direccional que proyecta sombras.
- [x] Habilitada la proyección y recepción de sombras en geometrías.
- [x] Cámara con rotación y posición personalizada.
- [x] Animación básica del cubo (`rotate.x`).
- [x] Ajuste del plano como superficie receptora de sombras.
- [x] Adaptación responsive con `window.resize`.

## 🎮 Descripción técnica

```js
// Cubo animado que proyecta sombra
const cubo = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0x00ffff })
);
cubo.castShadow = true;
