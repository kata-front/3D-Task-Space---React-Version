import type { FC } from "react";
import Sun from "./Sun";
import type { MTTask } from "../../../utils/types";


export const SolarSystem: FC<{
  tasks: MTTask[]
}> = ({ tasks }) => {
  return (
    <>
      <mesh>
        <Sun radius={10} />
        {tasks.map(task => (
          <mesh key={task.id}>
            
          </mesh>
        ))}
      </mesh>
    </>
  );
};
