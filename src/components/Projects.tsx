"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "DocumentSimplification System",
      status: "Live",
      desc: [
        "Developed a full-stack application that converts complex government and legal documents into simple language.",
        "Implemented OCR text extraction from images and PDFs using Tesseract OCR.",
        "Built multilingual support for multiple Indian languages.",
        "Developed backend APIs using Express.js and created a responsive frontend using React and Tailwind CSS."
      ]
    },
    {
      title: "Virtual Setu",
      status: "Live",
      desc: [
        "Solved fragmented government document storage and slow emergency access through centralized digital identity.",
        "Developed cloud based document management system with React Supabase QR sharing PIN security & Gemini AI.",
        "Architected secure document workflows enabling controlled sharing verification without recipient user accounts.",
        "Reduced document retrieval time and improved emergency readiness and access reliability by over 70% faster."
      ]
    },
    {
      title: "CineVerse",
      status: "Live",
      desc: [
        "Developed a responsive platform to discover trending movies and TV shows with real-time entertainment data.",
        "Integrated the TMDB API to fetch movie details, ratings, cast information, trailers, and upcoming releases.",
        "Built the application using React with Vite for fast development and optimized performance.",
        "Implemented advanced search with real-time suggestions and filtering between movies and TV series.",
        "Designed a modern responsive UI with dark/light mode and smooth animations using Framer Motion and Tailwind CSS."
      ]
    },
    {
      title: "HireMatrix",
      status: "Live",
      desc: [
        "Developed an AI-powered hiring platform that automates candidate evaluation and recruitment workflows.",
        "Implemented job description parsing to extract required skills, experience levels, and role requirements automatically.",
        "Built a system to generate customized assessments including MCQs, subjective questions, and coding challenges.",
        "Integrated AI-based scoring, plagiarism detection, and analytics dashboards for candidate evaluation and skill gap analysis."
      ]
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#fec144] mb-16 leading-tight tracking-[-0.03em] text-center">
          {`Things I've Built`} - PROJECTS
        </h2>
        
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-[#ff6b35]/30 transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff6b35] to-[#fec144] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                <span className="bg-[#ff6b35]/10 text-[#ff6b35] border border-[#ff6b35]/20 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
                  {project.status}
                </span>
              </div>
              
              <ul className="space-y-4">
                {project.desc.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-4 text-gray-300 md:text-lg leading-relaxed">
                    <span className="text-[#ff6b35] font-bold mt-1 text-xl">✦</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
