import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "real-estate-portal",

    title: "Real Estate Portal",

    shortDescription:
      "Property management platform built with React.",

    description:
      "A full-featured property management platform built with React, TypeScript, Vite, Tailwind CSS, Supabase and Express.",

    challenge:
      "Managing properties manually created unnecessary administration and made it difficult to keep information structured.",

    solution:
      "I developed a modern property management platform using React and TypeScript with a focus on usability, scalability and efficient workflows.",

    features: [
      "User authentication",
      "Property management dashboard",
      "PDF generation",
      "Supabase database integration",
      "Responsive design",
    ],

    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Express",
    ],

    githubUrl: "https://github.com/yourname/project",

    liveUrl: "https://your-demo.com",

    featured: true,
  },
];