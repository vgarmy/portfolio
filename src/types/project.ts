export type Project = {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  image: string;

  technologies: string[];

  githubUrl: string;
  liveUrl: string;

  featured: boolean;
};