function SkillsPreview() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Next.js",
    "Vite",
    "Git",
    "GitHub",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">
        Technical Skills
      </h2>

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 border rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default SkillsPreview;