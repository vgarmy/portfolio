import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const technologies = JSON.parse(project.technologies || "[]");

  return (
    <article className="overflow-hidden rounded-lg border bg-white">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover"
        />
      )}

      <div className="p-6">
        <div className="mb-4 flex gap-2">
          <span className="rounded-full border px-3 py-1 text-sm">
            {project.status}
          </span>

          <span className="rounded-full border px-3 py-1 text-sm">
            {project.type}
          </span>
        </div>

        <Link to={`/projects/${project.slug}`}>
          <h3 className="text-2xl font-semibold hover:underline">
            {project.title}
          </h3>
        </Link>

        <p className="mt-4 text-gray-600">
          {project.short_description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech: string) => (
            <span
              key={tech}
              className="rounded-full border px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noreferrer"
              className="rounded border px-4 py-2"
            >
              GitHub
            </a>
          )}

          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noreferrer"
              className="rounded border px-4 py-2"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;