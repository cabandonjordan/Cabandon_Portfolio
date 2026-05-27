import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Grid } from '@react-three/drei'; // Imported Grid!

const InteractiveGyroscope = () => {
  const groupRef = useRef(null);
  const ring1 = useRef(null);
  const ring2 = useRef(null);
  const ring3 = useRef(null);
  const core = useRef(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Auto-rotation 
    if (ring1.current?.rotation) {
      ring1.current.rotation.x = t * 0.4;
      ring1.current.rotation.y = t * 0.2;
    }
    if (ring2.current?.rotation) {
      ring2.current.rotation.x = t * -0.3;
      ring2.current.rotation.z = t * 0.5;
    }
    if (ring3.current?.rotation) {
      ring3.current.rotation.y = t * 0.8;
      ring3.current.rotation.z = t * -0.2;
    }
    if (core.current?.rotation) {
      core.current.rotation.x = t * 0.5;
      core.current.rotation.y = t * 0.5;
    }

    // Interactive mouse tracking
    if (groupRef.current?.rotation) {
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
        <mesh ref={ring1}>
          <torusGeometry args={[2.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#ff003c" emissive="#ff003c" emissiveIntensity={0.8} wireframe />
        </mesh>
        
        <mesh ref={ring2}>
          <torusGeometry args={[2.0, 0.1, 16, 100]} />
          <meshStandardMaterial color="#110000" metalness={1} roughness={0.2} />
        </mesh>
        
        <mesh ref={ring3}>
          <torusGeometry args={[1.3, 0.04, 16, 100]} />
          <meshStandardMaterial color="#ff003c" emissive="#ff003c" emissiveIntensity={2} />
        </mesh>
        
        <mesh ref={core}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#000000" emissive="#ff003c" emissiveIntensity={0.5} wireframe />
        </mesh>
      </Float>
    </group>
  );
};

export default function RobotCore3D() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 7] }}>
        {/* Changed from pitch black to a very deep, dark red/black */}
        <color attach="background" args={['#060002']} />
        
        {/* Fog blends the grid smoothly into the background so it doesn't look like a sharp cut-off */}
        <fog attach="fog" args={['#060002', 4, 12]} />

        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ff003c" />
        <pointLight position={[0, 0, 0]} intensity={4} color="#ff003c" distance={10} />
        
        {/* NEW: Infinite Cyberpunk Floor Grid */}
        <Grid
          position={[0, -3.5, 0]} /* Sits below the gyroscope */
          args={[30, 30]} /* Width and depth of the grid */
          cellSize={0.5}
          cellThickness={1}
          cellColor="#33000b" /* Subtle dark red inner lines */
          sectionSize={2.5}
          sectionThickness={1.5}
          sectionColor="#aa0022" /* Brighter red main sections */
          fadeDistance={12} /* How far out before it fades into the fog */
          fadeStrength={1.5}
        />

        <InteractiveGyroscope />
      </Canvas>
      <div className="vignette-overlay"></div>
      <div className="scanline-overlay"></div>
    </div>
  );
}