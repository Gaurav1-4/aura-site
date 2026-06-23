"use client";

import React, { useRef, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PresentationControls, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export const Ring3D = forwardRef<THREE.Group, { spinning?: boolean }>(({ spinning = true }, ref) => {
  const middleGroupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/aura-ring.glb?v=2');
  
  useFrame((state, delta) => {
    if (!middleGroupRef.current) return;
    const t = state.clock.getElapsedTime();
    middleGroupRef.current.position.y = Math.sin(t * 1.2) * 0.072;
    if (spinning) {
      middleGroupRef.current.rotation.y += delta * 0.5;
      middleGroupRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <group ref={middleGroupRef}>
        <PresentationControls
          global
          snap
          zoom={1}
          rotation={[Math.PI / 6, 0.25, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          {/* Main Ring Body loaded from GLB */}
          <primitive object={scene} scale={1} rotation={[Math.PI / 2, 0, 0]} />
        </PresentationControls>
      </group>
      
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
    </group>
  );
});

Ring3D.displayName = 'Ring3D';

useGLTF.preload('/models/aura-ring.glb?v=2');
