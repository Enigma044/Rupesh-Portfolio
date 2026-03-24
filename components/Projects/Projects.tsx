"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment, Icosahedron, Octahedron, Dodecahedron } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"
import { ExternalLink, Github } from "lucide-react"
import { projects as projectsData } from "@/data/portfolio"
import "./Projects.css"

function ProjectShape1() {
  const meshRef = useRef<Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })
  return (
    <Float speed={2} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[1.2]}>
        <MeshDistortMaterial color="#4fd1c5" distort={0.3} speed={2} metalness={0.8} roughness={0.2} />
      </Icosahedron>
    </Float>
  )
}

function ProjectShape2() {
  const meshRef = useRef<Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })
  return (
    <Float speed={1.5} floatIntensity={1.2}>
      <Octahedron ref={meshRef} args={[1.3]}>
        <meshStandardMaterial color="#4fd1c5" metalness={0.9} roughness={0.1} wireframe />
      </Octahedron>
    </Float>
  )
}

function ProjectShape3() {
  const meshRef = useRef<Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })
  return (
    <Float speed={2.5} floatIntensity={0.8}>
      <Dodecahedron ref={meshRef} args={[1.1]}>
        <MeshDistortMaterial color="#4fd1c5" distort={0.2} speed={3} metalness={0.7} roughness={0.3} />
      </Dodecahedron>
    </Float>
  )
}

function ProjectShape4() {
  const meshRef = useRef<Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.25
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.35
    }
  })
  return (
    <Float speed={1.8} floatIntensity={1}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.7, 0.25, 100, 16]} />
        <meshStandardMaterial color="#4fd1c5" metalness={0.85} roughness={0.15} />
      </mesh>
    </Float>
  )
}

const shapeMap: Record<string, React.ComponentType> = {
  icosahedron: ProjectShape1,
  octahedron: ProjectShape2,
  dodecahedron: ProjectShape3,
  torusKnot: ProjectShape4,
}

function ProjectScene({ Scene }: { Scene: React.ComponentType }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#4fd1c5" />
      <Scene />
      <Environment preset="night" />
    </>
  )
}

export function Projects() {
  return (
    <section id="projects" className="projects-section bg-card">
      <div className="projects-container">
        <div className="projects-header">
          <p className="projects-label text-primary">Projects</p>
          <h2 className="projects-title text-foreground text-balance">Featured Work</h2>
          <p className="projects-subtitle text-muted-foreground">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const ShapeComponent = shapeMap[project.shape] || ProjectShape1
            return (
              <div key={project.id} className="project-card">
                <div className="project-visual">
                  <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                    <ProjectScene Scene={ShapeComponent} />
                  </Canvas>
                  <div className="project-overlay" />
                </div>
                
                <div className="project-content">
                  <p className="project-category text-primary">{project.category}</p>
                  <h3 className="project-name text-foreground">{project.title}</h3>
                  <p className="project-description text-muted-foreground">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((t) => (
                      <span key={t} className="project-tech-tag text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={project.githubUrl} className="project-link text-foreground">
                      <Github size={18} />
                      Code
                    </a>
                    <a href={project.liveUrl} className="project-link text-foreground">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
