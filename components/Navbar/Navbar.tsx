"use client"

import { useState, useEffect } from "react"
import { navLinks, personalInfo } from "@/data/portfolio"
import "./Navbar.css"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled bg-background/80" : ""}`}>
        <div className="navbar-container">
          <div 
            className="navbar-logo text-foreground"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {personalInfo.name.split(" ")[0]}
          </div>
          
          <ul className="navbar-links">
            {navLinks.filter(link => link.name !== "Home").map((item) => (
              <li key={item.href}>
                <button 
                  className="navbar-link text-muted-foreground"
                  onClick={() => scrollToSection(item.href.replace("#", ""))}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button 
            className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul className="mobile-menu-links">
          {navLinks.filter(link => link.name !== "Home").map((item) => (
            <li key={item.href}>
              <button 
                className="mobile-menu-link text-foreground"
                onClick={() => scrollToSection(item.href.replace("#", ""))}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
