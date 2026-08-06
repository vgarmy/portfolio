import { projects } from "../../data/projects";
import ProjectCard from "../../components/projects/ProjectCard";

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">
        Projects
      </h1>

      <p className="mt-4 max-w-2xl text-slate-600">
        A collection of web applications and digital products I have designed and developed, focusing on usability, performance and maintainable architecture.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
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

export default Projects;