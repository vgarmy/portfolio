import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold">
          Project not found
        </h1>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="mt-10 text-4xl font-bold text-slate-800">
        {project.title}
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        {project.shortDescription}
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
          {project.features.map((feature) => (
            <li key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </section>


      <div className="mt-8 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>


      <div className="mt-10 flex gap-4">

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 px-5 py-3 text-white hover:bg-slate-700"
          >
            GitHub
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
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