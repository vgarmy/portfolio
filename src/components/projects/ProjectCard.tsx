import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border rounded-lg p-6">
      <h3 className="text-2xl font-semibold">
        {project.title}
      </h3>

      <p className="mt-4 text-gray-600">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 border rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;