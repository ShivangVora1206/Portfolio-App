import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

interface ParticlesProps {
  mousePosition: { x: number; y: number };
}

const Particles: React.FC<ParticlesProps> = ({ mousePosition }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesCount = 1000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      particlesRef.current.rotation.x = mousePosition.y * 0.0002;
      particlesRef.current.rotation.z = mousePosition.x * 0.0002;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const GridPlane: React.FC = () => {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = ((state.clock.elapsedTime * 2) % 20) - 10;
    }
  });

  return (
    <group rotation={[Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <gridHelper ref={gridRef} args={[40, 40, '#ffffff', '#333333']} />
    </group>
  );
};

interface Scene3DProps {
  mousePosition: { x: number; y: number };
}

const Scene3D: React.FC<Scene3DProps> = ({ mousePosition }) => {
  const aberrationOffset = useMemo(() => {
    const intensity = Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2) / 1000;
    return new THREE.Vector2(intensity * 0.005, intensity * 0.005);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 10, 50]} />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <Particles mousePosition={mousePosition} />
        <GridPlane />
        
        <EffectComposer>
          <ChromaticAberration
            offset={aberrationOffset}
            radialModulation={false}
            modulationOffset={0}
            blendFunction={BlendFunction.NORMAL}
          />
          <Vignette
            offset={0.3}
            darkness={0.5}
            blendFunction={BlendFunction.NORMAL}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Scene3D;
