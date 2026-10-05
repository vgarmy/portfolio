import ProjectForm from "../../components/admin/ProjectForm";

function AddProject() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        Add Project
      </h1>

      <p className="mt-3 text-slate-600">
        Create a new portfolio project.
      </p>


      <div className="mt-8">
        <ProjectForm />
      </div>

    </div>
  );
}

export default AddProject;