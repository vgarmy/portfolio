import { useState } from "react";

const API_URL = "https://vgarmy-portfolio-api.vgarmy.workers.dev/";

function ProjectForm() {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [challenge, setChallenge] = useState("");
    const [solution, setSolution] = useState("");
    const [features, setFeatures] = useState("");
    const [image, setImage] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [liveUrl, setLiveUrl] = useState("");
    const [featured, setFeatured] = useState(false);
    const [status, setStatus] = useState("ongoing");
    const [type, setType] = useState("frontend");

    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setSaving(true);
        setMessage("");

        const project = {
            slug,
            title,
            shortDescription,
            description,
            challenge,
            solution,
            features: features
                .split(",")
                .map(feature => feature.trim())
                .filter(Boolean),
            image,
            technologies: technologies
                .split(",")
                .map(technology => technology.trim())
                .filter(Boolean),
            githubUrl,
            liveUrl,
            featured,
            status,
            type
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.error || "Could not save project");
            }

            setMessage("Project saved successfully!");

            setTitle("");
            setSlug("");
            setShortDescription("");
            setDescription("");
            setChallenge("");
            setSolution("");
            setFeatures("");
            setImage("");
            setTechnologies("");
            setGithubUrl("");
            setLiveUrl("");
            setFeatured(false);
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong while saving the project.");
        } finally {
            setSaving(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-xl border bg-white p-8"
        >
            <div>
                <h2 className="text-xl font-semibold">
                    Project information
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                    Add the basic information about your project.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        className="w-full rounded-lg border px-4 py-3"
                        placeholder="Real Estate Portal"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Slug
                    </label>
                    <input
                        type="text"
                        value={slug}
                        onChange={e => setSlug(e.target.value)}
                        required
                        className="w-full rounded-lg border px-4 py-3"
                        placeholder="real-estate-portal"
                    />
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
    <div>
        <label className="mb-2 block text-sm font-medium">
            Status
        </label>

        <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
        >
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
        </select>
    </div>

    <div>
        <label className="mb-2 block text-sm font-medium">
            Type
        </label>

        <select
            value={type}
            onChange={e => setType(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
        >
            <option value="frontend">Frontend</option>
            <option value="mentoring">Mentoring</option>
            <option value="fullstack">Fullstack</option>
            <option value="other">Other</option>
        </select>
    </div>
</div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Short description
                </label>
                <input
                    type="text"
                    value={shortDescription}
                    onChange={e => setShortDescription(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="Property management platform built with React."
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Description
                </label>
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={5}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="Describe the project..."
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Challenge
                </label>
                <textarea
                    value={challenge}
                    onChange={e => setChallenge(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="What problem did the project solve?"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Solution
                </label>
                <textarea
                    value={solution}
                    onChange={e => setSolution(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="How did you solve the problem?"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Features
                </label>
                <textarea
                    value={features}
                    onChange={e => setFeatures(e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="User authentication, Dashboard, PDF generation"
                />
                <p className="mt-2 text-xs text-slate-500">
                    Separate each feature with a comma.
                </p>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Technologies
                </label>
                <input
                    type="text"
                    value={technologies}
                    onChange={e => setTechnologies(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="React, TypeScript, Vite, Tailwind CSS"
                />
                <p className="mt-2 text-xs text-slate-500">
                    Separate each technology with a comma.
                </p>
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Image
                </label>
                <input
                    type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    className="w-full rounded-lg border px-4 py-3"
                    placeholder="https://..."
                />
                <p className="mt-2 text-xs text-slate-500">
                    We will replace this with an image upload to Cloudflare R2 later.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium">
                        GitHub URL
                    </label>
                    <input
                        type="url"
                        value={githubUrl}
                        onChange={e => setGithubUrl(e.target.value)}
                        className="w-full rounded-lg border px-4 py-3"
                        placeholder="https://github.com/..."
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Live URL
                    </label>
                    <input
                        type="url"
                        value={liveUrl}
                        onChange={e => setLiveUrl(e.target.value)}
                        className="w-full rounded-lg border px-4 py-3"
                        placeholder="https://..."
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <input
                    id="featured"
                    type="checkbox"
                    checked={featured}
                    onChange={e => setFeatured(e.target.checked)}
                    className="h-4 w-4"
                />
                <label
                    htmlFor="featured"
                    className="text-sm font-medium"
                >
                    Featured project
                </label>
            </div>

            {message && (
                <div className="rounded-lg bg-slate-100 px-4 py-3 text-sm">
                    {message}
                </div>
            )}

            <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {saving ? "Saving..." : "Save project"}
            </button>
        </form>
    );
}

export default ProjectForm;