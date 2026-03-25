'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Edges } from '@react-three/drei';
import * as THREE from 'three';

export const WireframeObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate the object slowly over time
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      <Icosahedron ref={meshRef} args={[2, 0]}>
        <meshBasicMaterial color="#0e0e0e" />
        <Edges
          linewidth={2}
          threshold={15}
          color="#dfff00" /* Neon green matching the kinetic brutalism */
        />
      </Icosahedron>
    </group>
  );
};
