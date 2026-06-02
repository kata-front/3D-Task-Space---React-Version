import Sun from "../../three_components/Sun";
import { OrbitControls } from "@react-three/drei";
import * as index from "../../../../index";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const SolarSystemMaket = () => {
  const textures = useTexture(
    index.planets_maket.map((planet) => planet.texture),
  );

  const orbitsRef = useRef<THREE.Group[]>([]);

  useFrame((_, delta) => {
    orbitsRef.current.forEach((orbit, i) => {
      orbit.rotation.y += index.planets_maket[i].speedDelay * 0.5 * delta;
    });
  });

  const orbitGeometries = useMemo(
    () =>
      index.planets_maket.map((planet) => {
        const points: THREE.Vector3[] = [];
        const segments = 128;
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          points.push(
            new THREE.Vector3(
              Math.cos(angle) * planet.distance,
              0,
              Math.sin(angle) * planet.distance,
            ),
          );
        }
        return new THREE.BufferGeometry().setFromPoints(points);
      }),
    [],
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight intensity={10} distance={10} position={[0, 0, 0]} />
      <Sun />

      {index.planets_maket.map((planet, i) => {
        return (
          <group
            rotation={[0, Math.random() * Math.PI * 2, 0]}
            key={planet.id}
            ref={(el) => (orbitsRef.current[planet.id - 1] = el!)}
          >
            <lineLoop geometry={orbitGeometries[i]}>
              <lineBasicMaterial color="white" />
            </lineLoop>

            <mesh key={planet.id} position={[0, 0, planet.distance]}>
              <sphereGeometry args={[planet.radius, 32, 32]} />
              <meshPhongMaterial map={textures[planet.id - 1]} />
            </mesh>
          </group>
        );
      })}

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

export default SolarSystemMaket;
