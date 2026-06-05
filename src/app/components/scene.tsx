import { Canvas } from "@react-three/fiber";
import { type FC } from "react";
import { OrbitControls } from "@react-three/drei";
import StorageApi from "../../utils/storage";
import { SolarSystem } from "./three_components/solarSystem";

export const Scene: FC =() => {
  const tasks = StorageApi.getTasks();

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
      <SolarSystem tasks={tasks}/>
      <OrbitControls 
        maxDistance={100}
        minDistance={20}
      />
    </Canvas>
  );
}