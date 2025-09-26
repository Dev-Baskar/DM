import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function PhoneModel(props) {
  const gltf = useLoader(GLTFLoader, "/models/phone.glb"); 
  // Put your phone.glb file in public/models/phone.glb

  return <primitive object={gltf.scene} {...props} />;
}
