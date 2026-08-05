import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";

function FeaturedProjects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">
        Featured Projects
      </h2>

      <div className="mt-8 grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;