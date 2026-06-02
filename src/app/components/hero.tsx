import type { FC } from "react";
import styles from "../styles/hero.module.scss";
import Header from "./UI/header/header";
import { Canvas } from "@react-three/fiber";
import SolarSystemMaket from "./UI/maketSolarSystem/solarSystemMaket";

export const Hero: FC = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <Canvas
        camera={{ 
            position: [0, 5, 5],
            //fov: 75  
        }}
        style={{
          width: "100%",
          height: "45vh",
        }}
      >
        <SolarSystemMaket />
      </Canvas>
      <section>
        <span>3D Planet System</span>
        <span>Start to use planet for your tasks.</span>
        <span>Get started</span>
      </section>
      <div style={{ height: "1000vh" }}></div>
    </div>
  );
};
