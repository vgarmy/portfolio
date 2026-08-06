import type { Project } from "../../types/project";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <article className="border rounded-lg p-6">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        )}
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
        <div className="mt-6 flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border rounded"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border rounded"
            >
              Live Demo
            </a>
          )}
        </div>
      </article>
    </Link>
  );
}

export default ProjectCard;