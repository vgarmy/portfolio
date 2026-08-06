import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(
  (project) => project.slug === slug
);

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">
        {project?.title}
      </h1>
      <p className="mt-4 text-slate-600">
        Slug: {slug}
      </p>
    </section>
  );
}

export default ProjectDetails;