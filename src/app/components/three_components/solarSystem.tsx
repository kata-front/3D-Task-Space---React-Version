

export const Sun = () => {
  return (
    <>
      <mesh>
        <sphereGeometry args={[10, 32, 32]} />
        <meshPhongMaterial 
          color="yellow" 
          wireframe 
          emissive="yellow"
          emissiveIntensity={1}
        />
      </mesh>
    </>
  );
};
