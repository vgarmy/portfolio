import { useState } from "react";

function ProjectForm() {

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [liveUrl, setLiveUrl] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log({
            title,
            slug,
            description,
            image,
            githubUrl,
            liveUrl,
            shortDescription,
        });
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border bg-white p-8"
        >

            <div>
                <label className="block text-sm font-medium">
                    Title
                </label>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-2 w-full rounded-lg border p-3"
                />
            </div>


            <div>
                <label className="block text-sm font-medium">
                    Slug
                </label>

                <input
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="mt-2 w-full rounded-lg border p-3"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">
                    Short Description
                </label>

                <input
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    className="mt-2 w-full rounded-lg border p-3"
                />
            </div>


            <div>
                <label className="block text-sm font-medium">
                    Description
                </label>

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    className="mt-2 w-full rounded-lg border p-3"
                />
            </div>

            <div>
                <label className="block text-sm font-medium">
                    Image URL
                </label>

                <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="mt-2 w-full rounded-lg border p-3"
                />
            </div>


            <div>
                <label className="block text-sm font-medium">
                    GitHub URL
                </label>

                <input
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="mt-2 w-full rounded-lg border p-3"
                />
            </div>


            <div>
                <label className="block text-sm font-medium">
                    Live Demo URL
                </label>

                <input
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    className="mt-2 w-full rounded-lg border p-3"
                />
            </div>


            <button
                type="submit"
                className="rounded-lg bg-slate-800 px-6 py-3 text-white"
            >
                Save Project
            </button>

        </form>
    );
}

export default ProjectForm;