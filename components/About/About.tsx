"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshWobbleMaterial, Box, Environment } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"
import { aboutSection } from "@/data/portfolio"
import "./About.css"

function AnimatedBox() {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Box ref={meshRef} args={[2, 2, 2]}>
        <MeshWobbleMaterial
          color="#4fd1c5"
          attach="material"
          factor={0.3}
          speed={2}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
    </Float>
  )
}

function SmallCube({ position, scale }: { position: [number, number, number], scale: number }) {
  const meshRef = useRef<Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[scale, scale, scale]} />
        <meshStandardMaterial color="#4fd1c5" metalness={0.9} roughness={0.1} wireframe />
      </mesh>
    </Float>
  )
}

function AboutScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#4fd1c5" />
      <AnimatedBox />
      <SmallCube position={[-2, 1.5, -1]} scale={0.5} />
      <SmallCube position={[2, -1.5, 1]} scale={0.4} />
      <SmallCube position={[-1.5, -2, 0.5]} scale={0.3} />
      <Environment preset="city" />
    </>
  )
}

export function About() {
  return (
    <section id="about" className="about-section bg-card">
      <div className="about-container">
        <div className="about-visual">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <AboutScene />
          </Canvas>
        </div>
        
        <div className="about-content">
          <p className="about-label text-primary">{aboutSection.heading}</p>
          <h2 className="about-title text-foreground text-balance">
            Building Digital Experiences That Matter
          </h2>
          {aboutSection.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-description text-muted-foreground">
              {paragraph}
            </p>
          ))}
          
          <div className="about-stats">
            {aboutSection.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-number text-primary">{stat.value}</div>
                <div className="stat-label text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
