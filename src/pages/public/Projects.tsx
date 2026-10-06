import { useEffect, useState } from "react";
import ProjectCard from "../../components/projects/ProjectCard";
import type { Project } from "../../types/project";

const API_URL = "https://vgarmy-portfolio-api.vgarmy.workers.dev/";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Could not load projects");
        }

        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h1 className="text-4xl font-bold">
        Projects
      </h1>

      <p className="mt-4 max-w-2xl text-slate-600">
        A collection of web applications and digital products I have designed and developed, focusing on usability, performance and maintainable architecture.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {loading ? (
          <p className="text-slate-500">
            Loading projects...
          </p>
        ) : projects.length === 0 ? (
          <p className="text-slate-500">
            No projects found.
          </p>
        ) : (
          projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Projects;