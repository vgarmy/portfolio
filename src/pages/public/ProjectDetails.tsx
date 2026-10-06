import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Project } from "../../types/project";

const API_URL = "https://vgarmy-portfolio-api.vgarmy.workers.dev/";

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Could not load projects");
        }

        const projects: Project[] = await response.json();

        const foundProject = projects.find(
          project => project.slug === slug
        );

        setProject(foundProject || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-slate-500">
          Loading project...
        </p>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl font-bold">
          Project not found
        </h1>
      </section>
    );
  }

  const features = JSON.parse(project.features || "[]");
  const technologies = JSON.parse(project.technologies || "[]");

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="h-96 w-full rounded-xl object-cover"
        />
      )}

      <div className="mt-6 flex gap-2">
        <span className="rounded-full border px-3 py-1 text-sm">
          {project.status}
        </span>

        <span className="rounded-full border px-3 py-1 text-sm">
          {project.type}
        </span>
      </div>

      <h1 className="mt-6 text-4xl font-bold text-slate-800">
        {project.title}
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        {project.short_description}
      </p>

      <p className="mt-6 leading-8 text-slate-700">
        {project.description}
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800">
          Challenge
        </h2>

        <p className="mt-4 leading-8 text-slate-700">
          {project.challenge}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800">
          Solution
        </h2>

        <p className="mt-4 leading-8 text-slate-700">
          {project.solution}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800">
          Features
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          {features.map((feature: string) => (
            <li key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((tech: string) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 flex gap-4">
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-5 py-3 text-white hover:bg-slate-700"
          >
            GitHub
          </a>
        )}

        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-3 hover:bg-slate-100"
          >
            Live Demo
          </a>
        )}
      </div>
    </section>
  );
}

export default ProjectDetails;