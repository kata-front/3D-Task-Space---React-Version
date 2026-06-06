import { useMemo, useRef, type Dispatch, type FC, type SetStateAction } from "react";
import type { MTPlanet } from "../../../utils/types";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Planet: FC<{ 
  planet: MTPlanet
  setActivePlanet: Dispatch<SetStateAction<{
    planetInfo: MTPlanet
    planetCoords: THREE.Vector3
  } | null>>
}> = ({ planet, setActivePlanet }) => {
  const orbitRef = useRef<THREE.Group>(null);

  const texture = useTexture(planet.texture);

  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += planet.speedDelay * 0.5;
    }
  });

  const orbitGeometry = useMemo(() => {
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
  }, [planet.distance]);

  return (
    <group ref={orbitRef} rotation={[0, Math.random() * Math.PI * 2, 0]}>
      <lineLoop geometry={orbitGeometry}>
        <lineBasicMaterial color="white" />
      </lineLoop>

      <mesh position={[planet.distance, 0, 0]} onClick={(e) => {
        e.stopPropagation();
        setActivePlanet({
          planetInfo: planet,
          planetCoords: e.object.getWorldPosition(new THREE.Vector3()),
        });
      }}>
        <sphereGeometry args={[planet.radius, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  );
};

export default Planet;
