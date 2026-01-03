import KernelTech from "@/public/Projects/kernelTech.png";
import CodeSpark from "@/public/Projects/CodeSpark.png";
import BarcodeStore from "@/public/Projects/BarCode.png";
import RamenPharma from "@/public/Projects/Ramen Pharma.png";
import WonderMakers from "@/public/Projects/WonderMakers.png";
import ContractProject from "@/public/Projects/Contract.png";
import CodeSparkSa from "@/public/Projects/codesparkSA.png";
import TekaX from "@/public/Projects/Teka-X-Store.png";

export const projects = [
  {
    category: "MY BUISNESS",
    title: "Kernel Tech – Interactive Learning Platform",
    image: KernelTech,
    layout: "left" as const,
    description:
      "As the founder of Kernel volunteer initiative launched at Kernel Software Solutions to support students in tech by offering organized learning roadmaps curated from open, proven resources shared by professional developers.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Laravel",
      "MySQL",
    ],
    liveSite: "https://www.kerneltech.site/",
  },
  {
    category: "FREELANCE PROJECT",
    title: "Teka-X E-commerce Store",
    image: TekaX,
    layout: "right" as const,
    description:
      "Teka-X is a scalable E-Commerce platform built with a strong focus on user experience, performance, and business flexibility. The store supports both simple and variant-based products, enables guest checkout without mandatory authentication, and provides a flexible pricing system where variant prices can differ from the base product price. The project was designed to ensure a smooth shopping journey from product discovery to order completion, with optimized search functionality for fast and accurate product access.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Axios",
      "Framer Motion",
      "RESTful APIs",
      "Scalable Architecture",
      "Performance Optimization",
      "UX/UI Best Practices",
    ],
    liveSite: "https://teka-x.store/", // عدل اللينك لو مختلف
  },
  {
    category: "FREELANCE PROJECT",
    title: "Code Spark KSA (Saudi Arabia Version)",
    image: CodeSparkSa,
    layout: "right" as const,
    description:
      "A full-stack educational platform built with Clean Architecture principles and agile development methodologies. Code Spark provides instructors with advanced tools for course creation, student management, and performance analytics, all developed with a clear separation of concerns.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Axios",
      "Clean Architecture",
      "Agile Development",
    ],
    liveSite: "https://codespark-sa.com/",
  },
  {
    category: "FREELANCE PROJECT",
    title: "Code Spark – LMS Platform",
    image: CodeSpark,
    layout: "right" as const,
    description:
      "A full-stack educational platform built with Clean Architecture principles and agile development methodologies. Code Spark provides instructors with advanced tools for course creation, student management, and performance analytics, all developed with a clear separation of concerns.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
      "Axios",
      "Clean Architecture",
      "Agile Development",
    ],
    liveSite: "https://codespark-eg.com/",
  },
  {
    category: "FREELANCE PROJECT",
    title: "Barcode Store – E-commerce Platform",
    image: BarcodeStore,
    layout: "left" as const,
    description:
      "A full-stack e-commerce platform developed as a freelance project, featuring dynamic product filtering, real-time cart and wishlist functionality, secure authentication, and an intuitive admin dashboard.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "React Query",
      "Redux Toolkit Query",
      "PHP",
    ],
    liveSite: "https://barcodestore.store/",
  },
  {
    category: "FREELANCE PROJECT",
    title: "Ramen Pharma – Pharmaceutical Web Platform",
    image: RamenPharma,
    layout: "right" as const,
    description:
      "A full-stack pharmaceutical web platform developed for a real company to showcase medical products, sponsors, and branch locations across Egypt.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Leaflet.js",
      "PHP",
    ],
    liveSite: "https://ramen-pharma.com/",
  },
  {
    category: "FREELANCE PROJECT",
    title: "Wonder Makers – Creative Agency Website",
    image: WonderMakers,
    layout: "left" as const,
    description:
      "A fully responsive and animation-rich website built for a creative agency to showcase their projects, sponsors, and team members.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Laravel 10",
    ],
    liveSite: "https://wondermakers-eg.com/",
  },
  {
    category: "FREELANCE PROJECT",
    title: "Contract Project – Construction Landing Page",
    image: ContractProject,
    layout: "right" as const,
    description:
      "A high-performance landing page built for a contractor based in Saudi Arabia.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    liveSite: "https://hisham-profiling.netlify.app/",
  },
];
