import type { Project } from "../../types/project";

type ProjectRowProps = {
  project: Project;
};

function ProjectRow({ project }: ProjectRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-6">

      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {project.technologies.join(", ")}
        </p>
      </div>


      <button
        className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-100"
      >
        Edit
      </button>

    </div>
  );
}

export default ProjectRow;