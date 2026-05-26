export default function ServicesGrid() {
  const services = [
    {
      title: "Course Education",
      desc: "400K+ students. 21+ platforms. Learn at your pace.",
    },
    {
      title: "Web Development",
      desc: "Fast, modern websites. HTML/CSS/JS. Deployed on Vercel.",
    },
    {
      title: "AI Automation",
      desc: "Chatbots, n8n workflows, smart agents. 24/7 automation.",
    },
    {
      title: "Brand Building",
      desc: "LinkedIn strategy, Instagram growth, Substack newsletters.",
    },
    {
      title: "Video Production",
      desc: "Scripting, editing, course videos, social media reels.",
    },
    {
      title: "UI/UX Design",
      desc: "Figma wireframes to pixel-perfect prototypes.",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight tracking-[-0.03em] text-center"
        >
          How I Can Help You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 ease-out group"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff6b35] transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
