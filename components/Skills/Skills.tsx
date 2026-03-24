"use client"

import { Code2, Palette, Database, Boxes, Terminal, Sparkles } from "lucide-react"
import { skills as skillsData } from "@/data/portfolio"
import "./Skills.css"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  cube: Boxes,
  palette: Palette,
  server: Database,
  sparkles: Sparkles,
  settings: Terminal,
}

export function Skills() {
  return (
    <section id="skills" className="skills-section bg-background">
      <div className="skills-container">
        <div className="skills-header">
          <p className="skills-label text-primary">Skills</p>
          <h2 className="skills-title text-foreground text-balance">Technologies & Expertise</h2>
          <p className="skills-subtitle text-muted-foreground">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code2
            return (
              <div key={skill.title} className="skill-card">
                <div className="skill-icon">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="skill-name text-foreground">{skill.title}</h3>
                <p className="skill-description text-muted-foreground">{skill.description}</p>
                <div className="skill-tags">
                  {skill.technologies.map((tag) => (
                    <span key={tag} className="skill-tag text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
