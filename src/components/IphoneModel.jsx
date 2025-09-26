// src/components/IphoneModel.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Iphone() {
  const { scene } = useGLTF("/models/iphone.glb"); // path from public folder
  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
}

export default function IphoneModel() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls enableZoom={false} />
        <Iphone />
      </Canvas>
    </div>
  );
}
