"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { personalInfo, socialLinks as socialLinksData } from "@/data/portfolio"
import "./Contact.css"

const contactInfo = [
  { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\D/g, "")}` },
  { icon: MapPin, text: personalInfo.location, href: "#" },
]

const socialLinks = [
  { icon: Github, href: socialLinksData.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinksData.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: socialLinksData.twitter, label: "Twitter" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thanks for reaching out! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="contact-section bg-background">
      <div className="contact-container">
        <div className="contact-content">
          <p className="contact-label text-primary">Contact</p>
          <h2 className="contact-title text-foreground text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="contact-description text-muted-foreground">
            Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities, 
            creative ideas, or ways to bring your vision to life.
          </p>
          
          <div className="contact-info">
            {contactInfo.map((item) => (
              <a key={item.text} href={item.href} className="contact-info-item text-foreground">
                <div className="contact-info-icon">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="contact-info-text">{item.text}</span>
              </a>
            ))}
          </div>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                className="social-link text-foreground"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label text-foreground">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label text-foreground">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label text-foreground">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label text-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
