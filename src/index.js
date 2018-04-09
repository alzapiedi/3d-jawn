import * as three from 'three';

const camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new three.WebGLRenderer();
const scene = new three.Scene();
const geometry = new three.BoxGeometry( 1, 1, 1 );
const texture = new three.TextureLoader().load( './build/cool.png' );
const material = new three.MeshBasicMaterial({ map: texture });
const cube = new three.Mesh( geometry, material );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.z = 5;

function initialize() {
  window.document.body.appendChild( renderer.domElement );
  scene.add( cube );

  animate();
}

function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;
	renderer.render( scene, camera );
}

document.addEventListener('DOMContentLoaded', initialize);
