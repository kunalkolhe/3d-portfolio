"use client";

import { motion } from "framer-motion";

export default function JourneyTimeline() {
  const items = [
    {
      year: "Feb 2022 – June 2024",
      title: "Gautam Polytechnic Institutes",
      desc: "Diploma in Computer Science • Percentage: 77"
    },
    {
      year: "June 2024 – July 2024",
      title: "Industrial Training on Python | Thought Bliss Solutions",
      desc: "Participated and successfully completed the six-week Industrial Training on Python."
    },
    {
      year: "Sept 2024 – Present",
      title: "Sanjivani University Kopargaon",
      desc: "BTech in Computer Science • GPA: 7.23/10 • Coursework: Computer Architecture, Algorithms, Computational Theory"
    },
    {
      year: "May 2025 – Jul 2025",
      title: "Software Development Trainee | HCL Technologies",
      desc: "Developed backend modules using Spring Boot and MySQL following enterprise grade practices. Implemented secure CRUD APIs and gained hands-on experience designing services."
    },
    {
      year: "2026 / Now",
      title: "4 Live Projects. 2 Internships. Building more.",
      desc: "HireMatrix, Virtual Setu, AniCircle, Smart Waste — all deployed. Certified by NPTEL IIT Madras & MeitY FutureSkills Prime."
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#fec144] mb-20 leading-tight tracking-[-0.03em] text-center">
          Education & Experience
        </h2>
        <div className="relative">
          {/* Centered Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {items.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 bg-[#ff6b35] rounded-full -translate-x-[5px] md:-translate-x-1/2 border-4 border-[#0d0d0d] box-content"></div>
                  
                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className="text-[#ff6b35] font-bold tracking-widest text-sm mb-1 uppercase">{item.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
