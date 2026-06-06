import { useEffect, useMemo, useState, type FC } from "react";
import Sun from "./Sun";
import type { MTPlanet, MTTask } from "../../../utils/types";
import Planet from "./planet";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

export const SolarSystem: FC<{
  tasks: MTTask[];
}> = ({ tasks }) => {
  const planets: MTPlanet[] = useMemo(
    () =>
      tasks.map((task) => ({
        id: task.id,
        name: task.title,
        texture: `/textures/planets/planet-${task.id}.webp`,
        radius: Math.random() + 1 * 2,
        distance: 10 + task.id * 10,
        speedDelay: Math.random() * 0.1,
      })),
    [tasks],
  );

  const {camera} = useThree();

  // TODO! correction animate and create effect
  const [activePlanet, setActivePlanet] = useState<null | {
    planetInfo: MTPlanet
    planetCoords: THREE.Vector3
  }>(null);

  useEffect(() => {
    if (activePlanet) {
      const planetPosition = activePlanet.planetCoords

      gsap.to(camera.position, {
        x: planetPosition.x,
        y: planetPosition.y,
        z: planetPosition.z + 10,
        duration: 2,
        onUpdate: () => {
          camera.lookAt(planetPosition);
        }
      })
    }
  }, [activePlanet]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} distance={100} intensity={1000} />

      <Sun radius={10} />
      {planets.map((planet) => (
        <Planet
          key={planet.id}
          planet={planet}
          setActivePlanet={setActivePlanet}
        />
      ))}
    </>
  );
};
