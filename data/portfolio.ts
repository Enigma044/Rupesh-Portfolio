// Portfolio Data Configuration
// Edited for: Rupesh Raj

export const personalInfo = {
  name: "Rupesh Raj",
  title: "Software Developer",
  tagline: "Building innovative hardware and software solutions for real-world problems.",
  description:
    "Passionate engineering student focused on developing practical systems combining electronics, embedded technology, and software. Interested in creating solutions that improve everyday life through technology.",
  email: "rupeshjr681@gmail.com",
  phone: "987654321",
  location: "India",
  avatar: "/images/avatar.jpg",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/jxyzee04",
  linkedin: "https://www.linkedin.com/in/rupesh-raj-0ab01b314",
  leetcode: "https://leetcode.com/u/rupeshr11/",
  twitter: "",
  dribbble: "",
  instagram: "",
};

export const aboutSection = {
  heading: "About Me",
  paragraphs: [
    "I am an engineering student passionate about building innovative hardware and software systems. My interests lie in embedded systems, wearable technology, and game development.",
    "I enjoy transforming ideas into practical devices and applications, combining sensors, microcontrollers, and programming to create real-world impact.",
  ],
  stats: [
    { value: "3", label: "Major Projects" },
    { value: "Software", label: "Focus Area" },
    { value: "Engineering", label: "Background" },
    { value: "∞", label: "Curiosity" },
  ],
};

export const skills = [
  {
    title: "Embedded Systems",
    description:
      "Developing hardware-based solutions using sensors, microcontrollers, and wearable technology.",
    icon: "cpu",
    technologies: ["Arduino", "Sensors", "Embedded C", "IoT"],
  },
  {
    title: "Hardware Prototyping",
    description:
      "Designing and building functional prototypes for real-world applications.",
    icon: "tool",
    technologies: ["Circuit Design", "Wearables", "Electronics"],
  },
  {
    title: "Programming",
    description:
      "Writing efficient code for both hardware and software projects.",
    icon: "code",
    technologies: ["C/C++", "Python", "OOP"],
  },
  {
    title: "Problem Solving",
    description:
      "Practicing algorithms and logical thinking through coding challenges.",
    icon: "brain",
    technologies: ["DSA Basics", "LeetCode"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Wearable Hand Glove with Gesture Control",
    category: "Embedded · Wearable Tech",
    description:
      "A smart glove capable of recognizing hand gestures and translating them into control signals for devices, enabling intuitive human–machine interaction.",
    image: "/images/project-1.jpg",
    technologies: ["Sensors", "Microcontroller", "Embedded C"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    shape: "icosahedron",
  },
  {
    id: 2,
    title: "Fitness & Calorie Tracker",
    category: "Health Tech · Embedded",
    description:
      "A wearable fitness tracking system that monitors steps taken, estimates calories burned, and tracks physical activity to help users maintain a healthy lifestyle.",
    image: "/images/project-2.jpg",
    technologies: ["Motion Sensors", "Microcontroller", "Embedded C", "IoT"],
    liveUrl: "#",
    githubUrl: "",
    featured: true,
    shape: "octahedron",
  },
  {
    id: 3,
    title: "Arcade Fighting Game",
    category: "Game Development · Software",
    description:
      "A 2D fighting game inspired by Tekken, featuring player controls, character movements, attack mechanics, collision detection, and score tracking.",
    image: "/images/project-3.jpg",
    technologies: ["C++", "OOP", "Game Logic"],
    liveUrl: "#",
    githubUrl: "https://github.com/jxyzee04/OOPs_project",
    featured: true,
    shape: "dodecahedron",
  },
];

export const experience = [
  {
    id: 1,
    role: "Engineering Student",
    company: "ABV IIITM Gwalior",
    location: "India",
    startDate: "Present",
    endDate: "",
    description:
      "Focused on developing practical engineering solutions through academic projects and hands-on experimentation.",
    achievements: [
      "Built multiple embedded and wearable technology projects",
      "Worked on health and fitness monitoring systems",
      "Developed hardware–software integrated solutions",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    institution: "ABV IIITM Gwalior",
    location: "India",
    year: "Expected Graduation",
    description:
      "Studying core engineering principles with focus on electronics, embedded systems, and applied technology.",
  },
];

export const certifications = [];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const footerInfo = {
  copyright: `© ${new Date().getFullYear()} Rupesh Raj. All rights reserved.`,
  tagline: "Building technology that makes a difference.",
};