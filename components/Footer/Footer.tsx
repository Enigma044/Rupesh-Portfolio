"use client"

import { personalInfo, footerInfo } from "@/data/portfolio"
import "./Footer.css"

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
]

export function Footer() {
  return (
    <footer className="footer bg-card">
      <div className="footer-container">
        <div className="footer-logo text-foreground">{personalInfo.name}</div>
        
        <p className="footer-text text-muted-foreground">
          {footerInfo.copyright}
        </p>
        
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link text-muted-foreground">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
