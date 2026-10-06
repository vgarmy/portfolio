import { useEffect, useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import type { Project } from "../../types/project";

const API_URL = "https://vgarmy-portfolio-api.vgarmy.workers.dev/";

function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeaturedProjects() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Could not load projects");
        }

        const data: Project[] = await response.json();

        setProjects(
          data.filter(project => project.featured === 1)
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadFeaturedProjects();
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold">
        Featured Projects
      </h2>

      <div className="mt-8 grid gap-6">
        {loading ? (
          <p className="text-slate-500">
            Loading projects...
          </p>
        ) : projects.length === 0 ? (
          <p className="text-slate-500">
            No featured projects found.
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

export default FeaturedProjects;