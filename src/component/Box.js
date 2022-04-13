import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Box({ color, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={ref}
      scale={isHovered ? 1.5 : 1}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      {...props}
    >
      <pointLight />
      <boxBufferGeometry />
      <meshPhysicalMaterial color={color} />
    </mesh>
  );
}

export default Box;
