let scene, camera, renderer, cube, secondModel, character;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Create a cube (first model)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Create a second cube (second model)
    const geometry2 = new THREE.BoxGeometry();
    const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    secondModel = new THREE.Mesh(geometry2, material2);
    secondModel.position.set(2, 0, 0);
    scene.add(secondModel);

    // Load the 3D character model (GLB format)
    const loader = new THREE.GLTFLoader();
    loader.load('../3D Model Test/anime-boy.glbZ', (gltf) => {
        character = gltf.scene;
        character.scale.set(0.1, 0.1, 0.1); // Scale the character as needed
        character.position.set(-2, 0, 0); // Position the character
        scene.add(character);
    });

    // Position the camera
    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate the first model
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Rotate the second model
    if (secondModel) {
        secondModel.rotation.x += 0.01;
        secondModel.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

init();
animate();
