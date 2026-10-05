import { projects } from "../../data/projects";
import ProjectRow from "../../components/admin/ProjectRow";
import { NavLink } from "react-router-dom";

function Projects() {
    return (
        <div>

            <div className="flex items-center justify-between">

                <h1 className="text-3xl font-bold">
                    Projects
                </h1>

                <NavLink
                    to="/admin/projects/new"
                    className="rounded-lg bg-slate-800 px-5 py-2 text-white hover:bg-slate-700"
                >
                    Add Project
                </NavLink>



            </div>


            <div className="mt-8 space-y-4">

                {projects.map((project) => (
                    <ProjectRow
                        key={project.id}
                        project={project}
                    />
                ))}

            </div>

        </div>
    );
}

export default Projects;