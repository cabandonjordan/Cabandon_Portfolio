import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useGLTF, ContactShadows } from '@react-three/drei';

const DeadpoolHead = () => {
  const { scene } = useGLTF('/deadpool.glb'); 
  const headRef = useRef();

  useFrame((state) => {
    if (headRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      headRef.current.rotation.y += (targetX - headRef.current.rotation.y) * 0.05;
      headRef.current.rotation.x += (-targetY - headRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <primitive 
        ref={headRef} 
        object={scene} 
        scale={4.5} 
        position={[0, -0.2, 0]} 
      />
    </Float>
  );
};

useGLTF.preload('/deadpool.glb');

export default function Deadpool3D() {
  return (
    // Forces the canvas to stay strictly inside the lines of the HUD
    <Canvas 
      camera={{ position: [0, 0, 6] }} 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={2.5} color="#ffffff" />
      <pointLight position={[0, -2, 3]} intensity={4} color="#ff003c" distance={10} />
      <pointLight position={[-5, 5, -5]} intensity={2} color="#ff003c" />
      
      <ContactShadows position={[0, -2.2, 0]} opacity={0.8} scale={10} blur={2} far={4} color="#ff003c" />

      <Suspense fallback={null}>
        <DeadpoolHead />
      </Suspense>
    </Canvas>
  );
}