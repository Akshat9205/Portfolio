import {
  FaReact,
  FaJava,
  FaPython,
  FaGithub,
  FaGitAlt,
  FaBrain,
  FaCode,
} from "react-icons/fa";
import {
  SiMongodb,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "hackathons",
    title: "Hackathons",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const stackPills = [
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", borderColor: "border-green-500/20", glowColor: "shadow-green-500/10" },
  { name: "Java", icon: FaJava, color: "text-red-500", borderColor: "border-red-500/20", glowColor: "shadow-red-500/10" },
  { name: "Python", icon: FaPython, color: "text-blue-400", borderColor: "border-blue-400/20", glowColor: "shadow-blue-400/10" },
  { name: "DSA", icon: FaCode, color: "text-amber-500", borderColor: "border-amber-500/20", glowColor: "shadow-amber-500/10" },
  { name: "Problem Solving", icon: FaBrain, color: "text-purple-400", borderColor: "border-purple-400/20", glowColor: "shadow-purple-400/10" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500", borderColor: "border-orange-500/20", glowColor: "shadow-orange-500/10" },
  { name: "GitHub", icon: FaGithub, color: "text-slate-300", borderColor: "border-slate-300/20", glowColor: "shadow-slate-300/10" },
  { name: "VS Code", icon: VscVscode, color: "text-blue-500", borderColor: "border-blue-500/20", glowColor: "shadow-blue-500/10" },
  { name: "React", icon: FaReact, color: "text-cyan-400", borderColor: "border-cyan-400/20", glowColor: "shadow-cyan-400/10" },
];

export const skills = {
  programmingLanguages: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "Java" },
    { name: "C++" },
    { name: "SQL" },
  ],
  webDevelopment: [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "Tailwind CSS" },
    { name: "Redux" },
    { name: "JWT Auth" },
    { name: "HTML/CSS" },
  ],
  coreConcepts: [
    { name: "Data Structures" },
    { name: "Algorithms" },
    { name: "Problem Solving" },
    { name: "OOP" },
    { name: "DBMS" },
    { name: "Operating Systems" },
    { name: "Computer Networks" },
  ],
  toolsTechnologies: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Docker" },
    { name: "VS Code" },
    { name: "Postman" },
    { name: "Linux" },
    { name: "Vercel" },
    { name: "Vite" },
  ],
  professionalSkills: [
    { name: "Effective Communication" },
    { name: "Team Work" },
    { name: "Problem Solving" },
    { name: "Interpersonal Skills" },
  ],
};

export const projects = [
  {
    id: "careerprep",
    title: "CareerPrep",
    description:
      "A full-stack career preparation platform that helps students improve professional readiness through English modules, mock interviews, an ATS resume checker, and smart internship suggestions.",
    tags: [
      { name: "react", color: "text-cyan-400" },
      { name: "node.js", color: "text-green-500" },
      { name: "express.js", color: "text-gray-400" },
      { name: "mongodb", color: "text-green-600" },
    ],
    image: "/assets/CareerPrep.png",
    source_code_link: "https://github.com/Akshat9205/CareerPrep",
    live_link: "https://example.com",
    gallery: [
      "/assets/CareerPrep.png",
      "/assets/Career1.jpeg",
      "/assets/Career2.jpeg",
      "/assets/Career3.jpeg",
      "/assets/Career4.jpeg"
    ],
    features: [
      "English Learning Module",
      "Mock Interview Practice",
      "ATS Resume Checker",
      "Internship Recommendation System",
    ],
  },
  {
    id: "sharecare",
    title: "ShareCare",
    description:
      "A multi-resource donation platform connecting NGOs and donors with OTP authentication and donation tracking.",
    tags: [
      { name: "react", color: "text-cyan-400" },
      { name: "node.js", color: "text-green-500" },
      { name: "express.js", color: "text-gray-400" },
      { name: "mongodb", color: "text-green-600" },
    ],
    image: "/assets/ShareCare.jpeg",
    source_code_link: "https://github.com/Gauravmittal9205/Multi_Resource_Donation",
    live_link: "https://multi-resource-donation.vercel.app/",
    gallery: [
      "/assets/ShareCare.jpeg",
      "/assets/Share1.jpeg",
      "/assets/Share2.jpeg",
      "/assets/Share3.jpeg",
      "/assets/Share4.jpeg"
    ],
    features: [
      "NGO & donor system",
      "OTP authentication",
      "Admin dashboard",
      "Donation tracking",
    ],
  },
  {
    id: "unimate",
    title: "UniMate",
    description:
      "A roommate & housing matchmaking platform using preference-based matching and ML similarity scoring.",
    tags: [
      { name: "react", color: "text-cyan-400" },
      { name: "node.js", color: "text-green-500" },
      { name: "mongodb", color: "text-green-600" },
    ],
    image: "/assets/Unimate.png",
    source_code_link: "https://github.com/",
    live_link: "https://example.com",
    gallery: [
      "/assets/Unimate.png",
      "/assets/Unimate1.png",
      "/assets/Unimate2.png",
      "/assets/Unimate3.png",
      "/assets/Unimate4.png"
    ],
    features: [
      "Preference-based matching",
      "ML similarity scoring",
      "Personalized recommendations",
    ],
  },
  {
    id: "heroresume",
    title: "HeroResume",
    description:
      "An AI-enhanced resume builder that lets users craft professional, recruiter-ready resumes with real-time live preview, multiple templates, custom color themes, font selections, and one-click PDF export — all saved locally for 100% privacy.",
    tags: [
      { name: "react", color: "text-cyan-400" },
      { name: "typescript", color: "text-blue-400" },
      { name: "vite", color: "text-purple-400" },
      { name: "tailwind css", color: "text-sky-400" },
    ],
    image: "/assets/ResumeBuilder.png",
    source_code_link: "https://github.com/Akshat9205/Resume_Builder",
    live_link: "https://resume-builder-gamma-woad.vercel.app/",
    gallery: [
      "/assets/ResumeBuilder.png",
      "/assets/Resume1.png",
      "/assets/Resume2.png",
      "/assets/Resume3.png",
    ],
    features: [
      "Live real-time resume preview",
      "Multiple templates & color themes",
      "PDF export & print support",
      "100% local save — no data uploaded",
    ],
  },
];

export const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    image: "/assets/cisco certificate.jpg",
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2025",
    image: "/assets/Microsoft Azure_900.jpg",
  },
  {
    title: "Adobe Certified Professional",
    issuer: "Adobe",
    date: "2025",
    image: "/assets/Adobe.jpg",
  },
];

export const hackathons = [
  {
    title: "Dev!@thon",
    organizer: "GLA University, Mathura",
    date: "2025",
    description: "A National-Level Hackathon focusing on innovation-driven solutions.",
    image: "/assets/gla_devathon_cert.jpg",
  },
  {
    title: "Internal Smart India Hackathon",
    organizer: "GLA University Mathura / MoE Innovation Cell",
    date: "2025",
    description: "Internal round for the national-level Smart India Hackathon.",
    image: "/assets/internal_sih_cert.jpg",
  },
  {
    title: "GDG on Campus Solution Challenge",
    organizer: "Google Developer Groups On Campus",
    date: "2025",
    description: "A hackathon challenge creating solutions for UN Sustainable Development Goals.",
    image: "/assets/gdg_solution_challenge_cert.png",
  },
  {
    title: "InnovateNSUT'26",
    organizer: "DevComm, Netaji Subhas University of Technology",
    date: "2026",
    description: "A 24-hour national level hackathon competition.",
    image: "/assets/innovate_nsut_cert.png",
  },
];
