import { ILinks, ISocialLinks } from "./../interfaces/index";
import { IconType } from "react-icons";

/** Social Logos */
import GithubLogo from "@/public/socialLogos/github.png";
import LinkedInLogo from "@/public/socialLogos/linkedin.png";
import whatsappLogo from "@/public/socialLogos/whatsapp.png";
import FacebookLogo from "@/public/socialLogos/facebook.png";
import InstaLogo from "@/public/socialLogos/instagram.png";
import TikTokLogo from "@/public/socialLogos/social-media.png";
import { IButtons } from "@/components/ui/Button";
import { IExperience } from "@/components/ui/ExperienceCard";
import { IProjectCard, Technology } from "@/components/ui/ProjectCard";

/** Tech Logos */
import {
  SiAxios,
  SiClerk,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiShadcnui,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaLaravel } from "react-icons/fa";
import { SiZod } from "react-icons/si";

// Projects cover
import Barcode from "@/public/ProjectsImages/screencapture-localhost-3000-2025-07-24-17_44_42.png";
import BarcodeCover from "@/public/ProjectsImages/logo.png";
import Ramen from "@/public/ProjectsImages/ramen-web.png";
import RamenCover from "@/public/ProjectsImages/Screenshot 2025-06-22 195302.png";
import WonderMakers from "@/public/ProjectsImages/Screenshot (49).png";
import WonderMakersCover from "@/public/ProjectsImages/wonderMakers.ico";
import ContractorLandingPage from "@/public/ProjectsImages/Screenshot (50).png";
import ContractCover from "@/public/ProjectsImages/cropped_image.png";
import TodoList from "@/public/ProjectsImages/Screenshot (51).png";
import OnlineShopCover from "@/public/ProjectsImages/onlineShopCover.webp";
import OnlineShop from "@/public/ProjectsImages/Screenshot (52).png";
import VscodeCover from "@/public/ProjectsImages/1_dInbduWdEIdhyKkRevku3g.png";
import Vscode from "@/public/ProjectsImages/VscodeProject.png";
import NetflixCover from "@/public/ProjectsImages/NetflixCover.png";
import Netflix from "@/public/ProjectsImages/Screenshot (53).png";
import WatchCover from "@/public/ProjectsImages/stiwarti-watch-shop-html-template_368509-original.webp";
import Watch from "@/public/ProjectsImages/timezone-free-template.jpg";
import CreativoCover from "@/public/ProjectsImages/Screenshot (55).png";
import Creativo from "@/public/ProjectsImages/Screenshot (56).png";

import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";

export const NavLinks: ILinks[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/About",
  },
  {
    title: "Portfolio",
    href: "/Portfolio",
  },
  {
    title: "Contact",
    href: "/Contact",
  },
];

export const SocialLinks: ISocialLinks[] = [
  {
    href: "https://github.com/abdalrhman-abdalalim",
    icon: GithubLogo,
  },
  {
    href: "https://www.linkedin.com/in/abdalrhman-aboalela/",
    icon: LinkedInLogo,
  },
  {
    href: "https://wa.me/01065781468",
    icon: whatsappLogo,
  },
  {
    href: "https://www.facebook.com/profile.php?id=100092075502128",
    icon: FacebookLogo,
  },
  {
    href: "https://www.instagram.com/abdalrhman_mhamd/",
    icon: InstaLogo,
  },
  {
    href: "https://www.tiktok.com/@abdalrhman__mhmd?_t=ZS-8w1IvFveTvY&_r=1",
    icon: TikTokLogo,
  },
];

export const buttonData: IButtons[] = [
  {
    href: "/Portfolio",
    title: "View My Work",
    variatn: "black",
  },
  {
    href: "/Contact",
    title: "Contact Me",
    variatn: "outline",
  },
];

export const skills: { skill: string }[] = [
  // Frontend Frameworks
  { skill: "React.js" },
  { skill: "Next.js" },

  // State Management
  { skill: "Redux" },
  { skill: "RTK (Redux Toolkit)" },

  // UI Libraries & Frameworks
  { skill: "Material UI" },
  { skill: "Shadcn UI" },
  { skill: "Chakra UI" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Framer Motion" },

  // Styling
  { skill: "SASS/SCSS" },
  { skill: "CSS" },

  // Backend & Databases
  { skill: "MongoDB" },
  { skill: "Prisma" },
  { skill: "Strapi" },

  // Programming Languages
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "C++" },

  { skill: "Axios" },
  { skill: "React Router" },

  // Tools & Platforms
  { skill: "Git" },
  { skill: "Jira Align" },

  { skill: "Design Patterns" },
  { skill: "OOP" },
  { skill: "Data Structures" },
  { skill: "Algorithms" },
  { skill: "Problem Solving" },
];

export const experiences: IExperience[] = [
  {
    title: "🚀 Freelance Frontend Developer (Remote)",
    description:
      "Built 5+ production apps with React, Next.js, TypeScript for clients in e-commerce and SaaS. Improved performance by 30% (Lighthouse) via code splitting, caching, and image optimization. Integrated Strapi (Headless CMS) and MongoDB for dynamic content management.",
    duration: "2024 – Present",
  },
  {
    title: "📚 Advanced Frontend & Problem-Solving Training",
    description:
      "Competitive Programming: Ranked top 20% in ECPC (twice). Solved 300+ problems on LeetCode/Codeforces (focus: C++, DSA). Frontend Mastery: Completed Next.js 14 (App Router), React Hooks, and TypeScript courses. Built projects with Redux Toolkit, Framer Motion, and Prisma.",
    duration: "2022 – 2024",
  },
  {
    title: "🏆 Key Projects & Milestones",
    description:
      "2023: Developed a full-stack task manager (Next.js + MongoDB). Contributed to open-source (GitHub: 50+ commits). 2022: Learned OOP principles and design patterns through C++ projects. Started freelancing with small React apps.",
    duration: "2022 - 2023",
  },
];

export const TechIcons: {
  title: Technology;
  icon: IconType;
  color?: string;
}[] = [
  {
    title: "next",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    title: "tailwind",
    icon: RiTailwindCssFill,
    color: "#38BDF8",
  },
  {
    title: "typescript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    title: "react",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    title: "mongodb",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    title: "prisma",
    icon: SiPrisma,
    color: "#2D3748",
  },
  {
    title: "laravel",
    icon: FaLaravel,
    color: "#FF2D20",
  },
  {
    title: "zod",
    icon: SiZod,
    color: "#3E67FF",
  },
  { title: "framer-motion", icon: SiFramer, color: "#8855FF" },
  {
    title: "clerk",
    icon: SiClerk,
    color: "#3C47E5",
  },
  {
    title: "shadcn",
    icon: SiShadcnui,
    color: "#000000",
  },
  {
    title: "axios",
    icon: SiAxios,
    color: "#5A29E4",
  },
  {
    title: "html",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    title: "css",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    title: "javascript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    title: "bootstrap",
    icon: BsBootstrap, // Make sure to import from 'react-icons/bs'
    color: "#7952B3", // Bootstrap's purple color
  },
];

export const projectsData: IProjectCard[] = [
  {
    title: "Barcode Store",
    description:
      "Project: Barcode Store E-commerce Platform – As the frontend developer and project manager for Barcode Store, I led the development of a fully responsive, mobile-first e-commerce website tailored for men’s fashion retail. Built using Next.js 15, TypeScript, and Tailwind CSS, the platform delivers a clean, modern user interface with seamless navigation from product discovery to checkout. I implemented efficient JWT-based authentication, integrated with a secure backend API, and used React Query for smart state management and data synchronization. Features like guest shopping, persistent cart functionality, and real-time product syncing were key to enhancing the user experience. Additionally, I collaborated on performance optimization techniques, including code splitting, lazy loading, and Framer Motion animations, ensuring fast load times and engaging interactions. This project reflects strong skills in responsive UI development, scalable architecture, and cross-functional team collaboration.",
    imageSrc: Barcode,
    CoverImg: BarcodeCover,
    demoLink: "https://barcodestore.store/",
    technologies: [
      "next",
      "typescript",
      "tailwind",
      "laravel",
      "axios",
      "framer-motion",
    ],
  },
  {
    title: "Ramen Pharma",
    description:
      "Project: Ramen Pharma Web Platform – As the frontend developer for Ramen Pharma, I built a fully responsive, high-performance website for a real pharmaceutical company, focused on showcasing products, sponsors, and branch locations across Egypt. Developed using Next.js, TypeScript, Tailwind CSS, and Framer Motion, the platform features an interactive map powered by Leaflet.js with dynamic pharmacy locations based on latitude and longitude. I handled the entire frontend development process — from wireframes to production — and integrated the UI with a secure Laravel REST API using JWT authentication. Performance and SEO were key priorities, achieved through code splitting, lazy loading, and optimized asset delivery. The result was a fast, clean, and accessible healthcare platform delivered one day ahead of schedule, demonstrating expertise in API integration, responsive design, and real-world deployment under tight deadlines.",
    imageSrc: Ramen,
    CoverImg: RamenCover,
    demoLink: "https://wondermakers-eg.com/",
    technologies: ["next", "typescript", "tailwind", "laravel", "axios"],
  },
  {
    title: "Wonder Makers",
    description:
      "Project: Wonder Makers Landing Page & Dashboard – As the frontend developer for Wonder Makers, I designed and built a fully responsive landing page with dynamic content fetched from an API, ensuring seamless performance across mobile, tablet, and desktop. The project leveraged React.js, TypeScript, and Tailwind CSS for a modern, scalable, and maintainable codebase, while optimized performance techniques like code splitting and lazy loading ensured fast load times. Additionally, I developed an admin dashboard for complete website control, including content management and analytics. The result was an engaging, high-performance user interface with a streamlined backend workflow, demonstrating expertise in responsive design, API integration, and efficient state management.",
    imageSrc: WonderMakers,
    CoverImg: WonderMakersCover,
    demoLink: "https://wondermakers-eg.com/",
    technologies: [
      "next",
      "typescript",
      "tailwind",
      "laravel",
      "zod",
      "shadcn",
      "axios",
    ],
  },

  {
    title: "Contractor Landing Page",
    description:
      "Contractor Landing Page (Saudi Arabia) – I developed a high-performance, mobile-optimized landing page for a Saudi Arabian contractor, ensuring fast load times and seamless responsiveness across all devices (mobile, tablet, and desktop). Built with React.js, TypeScript, and Tailwind CSS, the project prioritized clean code, efficient styling, and a smooth user experience to effectively showcase the contractor's services. The adaptive design guarantees a polished presentation on any screen, while modern optimization techniques enhance speed and engagement.",
    imageSrc: ContractorLandingPage,
    CoverImg: ContractCover,
    demoLink: "https://hisham-profiling.netlify.app/",
    technologies: ["react", "typescript", "tailwind", "framer-motion"],
  },
  {
    title: "Full-Stack Todo List ",
    description:
      "full-stack task management application with Next.js, featuring OAuth authentication (LinkedIn, Google, GitHub) via Clerk for seamless user onboarding. Implemented a hybrid architecture blending server and client components for optimized performance, while enabling personalized CRUD operations for each user's to-do items. Leveraged MongoDB and Prisma for robust data modeling and backend operations, complemented by global error handling for reliable debugging. The UI was built with ShadcnUI for a modern, accessible interface.",
    imageSrc: TodoList,
    CoverImg: TodoList,
    githubLink:
      "https://github.com/abdalrhman-abdalalim/TodoList-NextJs-MongoDB",
    technologies: [
      "react",
      "typescript",
      "tailwind",
      "zod",
      "mongodb",
      "prisma",
      "clerk",
    ],
  },
  {
    title: " Online Shop (Static Website) ",
    description:
      "Developed my first React-based online shop using Vite, implementing dynamic product displays with color variant selection, interactive cart management (add/remove items, quantity adjustments), and category filtering through React state hooks. Built with component architecture and CSS Modules, the project features localStorage persistence for cart data, responsive layouts with mobile-first styling, and prop-based data flow to master core React concepts including state lifting and derived values. This foundational project demonstrated component lifecycle management, debugging techniques, and performance-aware development while establishing proficiency in modern frontend workflows.",
    imageSrc: OnlineShop,
    CoverImg: OnlineShopCover,
    githubLink: "https://github.com/abdalrhman-abdalalim/Online-shop",
    technologies: ["react", "typescript", "tailwind"],
  },
  {
    title: "VS code Cloning",
    description:
      "Developed a responsive VS Code interface clone using React and Tailwind CSS, accurately replicating the IDE's layout with a collapsible sidebar (explorer, search, git icons), tabbed editor window with syntax highlighting, and an interactive status bar. Leveraged React's component-based architecture to build reusable UI elements like the activity bar and file explorer, while Tailwind streamlined styling for pixel-perfect spacing, color matching, and hover effects. Implemented state management for dynamic features such as tab switching and sidebar toggling, demonstrating modern frontend development practices with a focus on detail-oriented UI replication.",
    imageSrc: Vscode,
    CoverImg: VscodeCover,
    githubLink: "https://github.com/abdalrhman-abdalalim/VScode-cloning",
    technologies: ["react", "typescript", "tailwind"],
  },
  {
    title: "Netflix Cloning",
    description:
      "Developed a static Netflix interface replica using pure HTML5 and CSS3, meticulously recreating the streaming platform's desktop experience without frameworks or libraries. Implemented the iconic hero banner with CSS positioning techniques and built horizontally-scrolling content rows using Flexbox, achieving pixel-perfect alignment of all UI elements. Enhanced with JavaScript-free interactivity including hover effects on movie thumbnails and navigation items, while maintaining semantic HTML structure throughout. The project demonstrates advanced vanilla CSS capabilities including complex layout positioning, background image manipulation, and responsive design principles within a fixed-width desktop layout.",
    imageSrc: Netflix,
    CoverImg: NetflixCover,
    githubLink: "https://github.com/abdalrhman-abdalalim/Netflix",
    demoLink: "https://netflix-flax-six.vercel.app/",
    technologies: ["html", "css", "javascript"],
  },
  {
    title: "Watch shop",
    description:
      "I developed a static time zone conversion tool using pure HTML5, CSS3, and vanilla JavaScript, enabling users to compare real-time differences across global locations. The tool features an interactive clock display that dynamically updates based on selected time zones, a dropdown menu for city selection, and a clean, minimalist UI with clear visual hierarchy. Built entirely with client-side technologies, it leverages JavaScript’s Date object for precise time calculations, DOM manipulation for dynamic updates, and event-driven programming for seamless user interactions. The responsive layout ensures usability across devices, providing an efficient way to track multiple time zones without server-side dependencies.",
    imageSrc: Watch,
    CoverImg: WatchCover,
    githubLink: "https://github.com/abdalrhman-abdalalim/time-zone",
    demoLink: "https://courageous-froyo-c5838b.netlify.app/",
    technologies: ["html", "css", "javascript", "bootstrap"],
  },
  {
    title: "Creativo",
    description:
      "Developed a static time zone conversion tool using pure HTML, CSS, and JavaScript, allowing users to compare time differences across global locations. Key features include an interactive time display with real-time clocks for multiple time zones, a location selection dropdown for choosing different cities, and a clean, minimalist UI with a clear visual hierarchy. The tool is built entirely with core web technologies, including HTML5 for structure, CSS3 for styling, and vanilla JavaScript for functionality, leveraging features like Date object manipulation, dynamic DOM updates, and event-driven programming for a seamless, client-side experience.",
    imageSrc: Creativo,
    CoverImg: CreativoCover,
    githubLink: "https://github.com/abdalrhman-abdalalim/Criativo",
    demoLink: "https://criativo-puce.vercel.app/",
    technologies: ["html", "css"],
  },
];
