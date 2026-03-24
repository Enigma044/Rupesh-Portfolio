"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Environment } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { personalInfo } from "@/data/portfolio"
import "./Hero.css"

function AnimatedSphere() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1.5, 100, 100]} position={[2, 0, 0]}>
        <MeshDistortMaterial
          color="#4fd1c5"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function FloatingRing({ position, rotation, scale }: { position: [number, number, number], rotation: [number, number, number], scale: number }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} rotation={rotation}>
        <torusGeometry args={[scale, 0.1, 16, 100]} />
        <meshStandardMaterial color="#4fd1c5" metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  )
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4fd1c5" />
      <AnimatedSphere />
      <FloatingRing position={[-3, 2, -2]} rotation={[Math.PI / 4, 0, 0]} scale={1.2} />
      <FloatingRing position={[4, -1, -3]} rotation={[0, Math.PI / 3, Math.PI / 6]} scale={0.8} />
      <FloatingRing position={[-2, -2, 1]} rotation={[Math.PI / 2, Math.PI / 4, 0]} scale={0.5} />
      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero-section bg-background">
      <div className="hero-canvas-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene3D />
        </Canvas>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title text-foreground">
          <span className="hero-title-line">{personalInfo.name.split(" ")[0]}</span>
          <span className="hero-title-line text-primary">{personalInfo.title}</span>
        </h1>
        <p className="hero-subtitle text-muted-foreground leading-relaxed">
          {personalInfo.description}
        </p>
        <div className="hero-cta">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border text-foreground hover:bg-secondary"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>

      <button 
        className="hero-scroll-indicator text-muted-foreground hover:text-primary transition-colors"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
