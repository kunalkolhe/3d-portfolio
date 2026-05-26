export default function TagScroll() {
  const tagsRow1 = [
    "React", "Next.js", "TypeScript", "JavaScript", 
    "Supabase", "PostgreSQL", "Node.js", "Express.js",
    "Spring Boot", "Tailwind CSS"
  ];
  const tagsRow2 = [
    "Full-Stack Developer", "HCL Technologies Intern", "Vistara ERP Intern", 
    "NPTEL Certified", "IIT Mandi Competitor", "IIT Gandhinagar Hackathon",
    "Git & GitHub", "REST APIs"
  ];

  return (
    <section className="bg-[#111111] py-12 md:py-16 overflow-hidden flex flex-col gap-6 relative z-20 border-y border-white/5">
      <div className="flex w-[200vw] sm:w-max animate-marquee">
        {[...tagsRow1, ...tagsRow1, ...tagsRow1].map((tag, i) => (
          <div key={`row1-${i}`} className="whitespace-nowrap px-6 py-2 border border-white/20 rounded-full text-white mx-3 text-sm md:text-base font-medium tracking-wide">
            {tag}
          </div>
        ))}
      </div>
      <div className="flex w-[200vw] sm:w-max animate-marquee-reverse">
        {[...tagsRow2, ...tagsRow2, ...tagsRow2].map((tag, i) => (
          <div key={`row2-${i}`} className="whitespace-nowrap px-6 py-2 border border-white/20 rounded-full text-white mx-3 text-sm md:text-base font-medium tracking-wide">
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}
