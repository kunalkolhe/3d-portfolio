export default function SkillsGrid() {
  const categories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "C", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Zustand", "React Query"],
    },
    {
      title: "Backend & DB",
      skills: ["Node.js", "Express.js", "Spring Boot", "Supabase", "PostgreSQL", "REST APIs", "JWT Auth"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "OpenAI API", "Gemini API", "Supabase Storage"],
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#fec144] mb-16 leading-tight tracking-[-0.03em] text-center"
        >
          Tech Stack & Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, i) => (
            <div 
              key={i} 
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 ease-out group"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#ff6b35] transition-colors uppercase tracking-wider">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j} 
                    className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
