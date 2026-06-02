import { useTexture } from "@react-three/drei";

const Sun = () => {
  const sunTexture = useTexture("/textures/sun-texture.webp");
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color="yellow"
        emissive="yellow"
        emissiveIntensity={0.2}
        map={sunTexture}
      />
    </mesh>
  );
};

export default Sun;
