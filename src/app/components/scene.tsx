import { Canvas } from "@react-three/fiber";
import { type FC } from "react";
import { Sun } from "./three_components/solarSystem";
import { OrbitControls } from "@react-three/drei";

export const Scene: FC =() => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 100],
        fov: 75,
      }}
      style={{
        width: '100vw',
        height: '100vh',
        background: '#000',
      }}
    >
      <Sun />
      <OrbitControls 
        maxDistance={100}
        minDistance={20}
      />
    </Canvas>
  );
}