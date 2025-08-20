import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Brain, Cpu, Database, Cloud, Zap, Bot } from "lucide-react";

function FloatingIcon({ position, icon: Icon, color }: { 
  position: [number, number, number]; 
  icon: any; 
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2} 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const icons = [
    { icon: Brain, position: [-2, 1, -1] as [number, number, number], color: "#00f5ff" },
    { icon: Cpu, position: [2, -1, -1] as [number, number, number], color: "#ff00ff" },
    { icon: Database, position: [-1, -2, 1] as [number, number, number], color: "#9333ea" },
    { icon: Cloud, position: [1, 2, 1] as [number, number, number], color: "#00f5ff" },
    { icon: Zap, position: [0, 0, -2] as [number, number, number], color: "#ff00ff" },
    { icon: Bot, position: [-3, 0, 0] as [number, number, number], color: "#9333ea" },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      
      {icons.map((iconData, index) => (
        <FloatingIcon
          key={index}
          position={iconData.position}
          icon={iconData.icon}
          color={iconData.color}
        />
      ))}
    </>
  );
}

export const FloatingIcons = () => {
  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </motion.div>
  );
};