import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { AnimationMixer, MeshBasicMaterial } from "three";
import * as THREE from "three";

const createCircleTexture = (color, size) => {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();

  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true; // Important - ensures the texture is updated

  return texture;
};

const Plankton = ({ count = 10000 }) => {
  const circleTexture = useMemo(() => createCircleTexture("#FFD700", 128), []);
  const meshRef = useRef();
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // Spread X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Spread Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // Spread Z
    }

    return positions;
  }, [count]);

  // Create the geometry outside of the useFrame to avoid re-creating it on each frame
  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geom;
  }, [positions]);

  // Slow down the animation of the plankton
  useFrame(() => {
    const delta = 0.01; // Reduced movement speed
    const positions = meshRef.current.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += (Math.random() - 0.5) * delta; // Adjusted for slower X movement
      positions[i + 1] += (Math.random() - 0.5) * delta; // Adjusted for slower Y movement
      positions[i + 2] += (Math.random() - 0.5) * delta; // Adjusted for slower Z movement
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true; // Important for updating the position
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        attach="material"
        map={circleTexture}
        size={0.05}
        sizeAttenuation={true}
        color="#FFD700"
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
};
const WhaleModel = ({ path, scale, position }) => {
  const { scene, animations } = useGLTF(path);
  const mixerRef = useRef();

  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new AnimationMixer(scene);
      const action = mixerRef.current.clipAction(animations[0]);
      action.play();
    }

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshBasicMaterial({
          wireframe: true,
          color: "#FFD700",
          transparent: true,
          opacity: 0.25,
        });
      }
    });

    // Adjust the position of the model
    scene.position.set(position[0], position[1], position[2]);
  }, [animations, scene, position]);

  useFrame((state, delta) => {
    mixerRef.current?.update(delta);
  });

  // Adjust the scale of the model
  scene.scale.set(scale * -1, scale, scale);

  return <primitive object={scene} dispose={null} />;
};

const ZenAnimation = ({ viewport }) => {
  // Receive viewport as props
  const { width, height } = viewport;
  const scaleFactor = useMemo(() => {
    // Adjust the base scale for smaller devices
    const baseScale = width < 768 ? 0.5 : 1;
    // Calculate scale factor based on viewport dimensions
    const aspectRatio = width / height;
    const scaleFactor = aspectRatio > 1 ? 1 : aspectRatio; // Limit scaling for landscape orientations
    return baseScale * scaleFactor;
  }, [width, height]);

  // Example: Moving the whale model down by -2 units along the Y axis
  const whalePosition = [0, 0, 0]; // Adjust this vector to change the whale's position

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Plankton />
      <WhaleModel
        path="/scene.gltf"
        scale={3.7 * scaleFactor}
        position={whalePosition}
      />{" "}
      {/* Apply scale factor */}
    </Canvas>
  );
};

export default ZenAnimation;
