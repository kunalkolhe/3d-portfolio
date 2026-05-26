export default function Achievements() {
  const achievements = [
    "Built and deployed 4 full-stack web applications with live production URLs and public repositories.",
    "Competed at Techniche, IIT Mandi — technical problem solving.",
    "Competed at CodeVersity Hackathon, IIT Gandhinagar — technical problem solving.",
    "Interned at HCL Technologies — enterprise backend development with Spring Boot & MySQL.",
    "Participated and successfully completed the six week Industrial Training on \"Python\" during 03 June, 2024 to 13th July, 2024 as organized by Thought Bliss Solutions.",
    "Applied gamification, state management, and UX optimization to improve product engagement."
  ];

  const certifications = [
    {
      title: "Introduction to Large Language Models (LLMs)",
      issuer: "NPTEL — IIT Madras",
    },
    {
      title: "Generative AI Literacy",
      issuer: "FutureSkills Prime — MeitY & NASSCOM",
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Achievements */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#fec144] mb-12 leading-tight tracking-[-0.03em]">
            Achievements
          </h2>
          <ul className="space-y-6">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-300 text-lg leading-relaxed">
                <span className="text-[#ff6b35] font-bold text-xl mt-1">✦</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="lg:w-[400px]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#fec144] mb-12 leading-tight tracking-[-0.03em]">
            Certifications
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/30 transition-all group"
              >
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-bold px-3 py-1 bg-[#ff6b35]/10 text-[#ff6b35] rounded-full uppercase tracking-wider">
                      Certified
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b35] transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
