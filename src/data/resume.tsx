import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiFigma,
  SiTailwindcss,
  SiXampp,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiLaragon,
  SiPhp,
  SiGit,
  SiGithub,
  SiJira,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { CgDesignmodo } from "react-icons/cg";

export const DATA = {
  name: "Adriana Gutierrez",
  initials: "A",
  url: "https://adrianagutierrez.dev",
  location: "Guiguinto, Bulacan, Philippines",
  locationLink: "https://www.google.com/maps/place/Guiguinto,+Bulacan,+Philippines",
  description:
    "Analytical IT graduate focused on delivering secure, scalable, and high-performing software solutions.",
  summary:
    "Analytical IT graduate focused on delivering secure, scalable, and high-performing software solutions. Experienced in refactoring legacy code, upgrading UI components, and conducting dependency scanning and penetration testing. Possesses strong communication skills, leadership, and a flexible problem-solving mindset to collaborate effectively across teams. Driven by a proactive attitude and a willingness to learn, eager to apply a solid technical foundation to deliver high-quality, production-ready results.",
  avatarUrl: "/me.png",
  skills: [
    // Web & Mobile Development
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "PHP", icon: SiPhp },
    { name: "Dart", icon: SiDart },
    { name: "Flutter", icon: SiFlutter },
    // Backend & Database
    { name: "XAMPP", icon: SiXampp },
    { name: "Laragon", icon: SiLaragon },
    { name: "Firebase", icon: SiFirebase },
    // Design & UI
    { name: "Figma", icon: SiFigma },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Canva", icon: CgDesignmodo },
    // Version Control
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    // Productivity & Collaboration Tools
    { name: "MS Office", icon: FaMicrosoft },
    { name: "Jira", icon: SiJira },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adrianajoygutierez@gmail.com",
    tel: "+63 949 738 9119",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adriana-grz",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/adriana-gutierrez-581a633a2/?skipRedirect=true  ",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:adrianajoygutierez@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Xentra Infotech Solutions, Inc.",
      href: "https://www.xentrasolutions.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/xentra.png",
      start: "Jan 2026",
      end: "Apr 2026",
      description:
        "Refactored and modernized a legacy US-based front-end project by updating it to current standards, improving structure, maintainability, and overall performance. Enhanced UI components and resolved existing bugs while collaborating virtually with supervisors and US clients to ensure scalability and an optimal user experience. Strengthened application security by utilizing Snyk for dependency scanning and conducting pentesting to mitigate potential exploits across remote deployments.",
    },
  ],
  education: [
    {
      school: "La Consolacion University Philippines",
      href: "https://lcup.edu.ph",
      degree: "Bachelor of Science in Information Technology (Magna Cum Laude | Academic Excellence Awardee)",
      logoUrl: "/laco.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "La Consolacion University Philippines - TVL",
      href: "https://lcup.edu.ph",
      degree: "Technical Vocational Livelihood ICT - Computer Programming (With High Honors)",
      logoUrl: "/laco.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Guiguinto National Vocational High School",
      href: "#",
      degree: "Major in Computer Technology (With High Honors)",
      logoUrl: "/guiguinto.png",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
   
    {
      title: "MakeCents",
      href: "https://github.com/neiljosephdelrosario/makecents",
      dates: "2025",
      active: true,
      description:
        "A mobile budgeting app powered by AI to help users track expenses, manage finances, and get smart spending insights.",
      technologies: ["Flutter", "Dart", "Firebase", "SQL"],
      links: [
        {
          type: "Mobile App",
          href: "https://github.com/neiljosephdelrosario/makecents",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/makecents-project.png",
      video: "",
    },
    {
      title: "Inventory System",
      href: "#",
      dates: "2026",
      active: true,
      description:
        "A full-featured inventory management system with real-time updates, smooth animations, and modern UI/UX.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Postman", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "https://inventory-system.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/inventory-system.png",
      video: "",
    },
    {
      title: "Task Manager",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A simple yet functional task management application built with vanilla HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/taskmanger.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Best in Research Award",
      dates: "2022",
      location: "La Consolacion University Philippines",
      description:
        "Received the Best in Research Award during Technical Vocational Livelihood ICT - Computer Programming program for outstanding research contributions.",
      image: "",
      mlh: "",
      links: [],
    },
  ],
  certifications: [
    {
      name: "Microsoft Excel Expert (2019)",
      issuer: "Microsoft",
      date: "2019",
    },  
    {
      name: "Microsoft Access Expert (2019)",
      issuer: "Microsoft",
      date: "2019",
    },
    {
      name: "IT Specialist Device Configuration and Management Certification",
      issuer: "Certiport",
      date: "",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "",
    },
  ],
} as const;