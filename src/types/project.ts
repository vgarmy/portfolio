export type Project = {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  challenge: string;
  solution: string;
  features: string[];

  image: string;

  technologies: string[];

  githubUrl: string;
  liveUrl: string;

  featured: boolean;
};