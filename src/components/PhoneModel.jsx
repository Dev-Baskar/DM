import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// This component loads the 3D iPhone model
function Model() {
  // ✅ IMPORTANT: Using a highly reliable GLTF model URL
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-14-pro/model.gltf');
  
  // Adjust position, scale, and rotation to make it large and tilted like the reference image
  return (
    <primitive 
      object={scene} 
      scale={3.5} // Increased scale to make it bigger
      position={[0.5, -2.0, 0]} // Adjusted position [X, Y, Z]
      rotation={[0.2, -0.6, 0.1]} // Adjusted rotation [Pitch, Yaw, Roll] for the tilted look
    />
  );
}

// This is the main component that sets up the 3D scene
export default function PhoneModel() {
  return (
    <Canvas camera={{ fov: 40, position: [0, 0, 10] }}> {/* Adjusted FOV for better perspective */}
      {/* Lights are crucial for seeing the 3D model */}
      <ambientLight intensity={1.5} /> {/* General ambient light */}
      <directionalLight position={[10, 10, 5]} intensity={2} /> {/* Main light source */}
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#c0c0c0" /> {/* Secondary light */}
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={0.5} castShadow /> {/* Spot light for highlights */}
      
      {/* Suspense is vital to prevent the page from crashing while the model loads */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}