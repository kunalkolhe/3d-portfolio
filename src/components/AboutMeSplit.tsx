"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutMeSplit() {
  return (
    <section className="bg-[#0d0d0d] py-24 md:py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left: Stats */}
        <div className="w-full md:w-[40%] grid grid-cols-2 gap-8 h-max">
          <div className="flex flex-col">
            <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter">
              <Counter to={4} />+
            </h3>
            <p className="text-gray-400 font-medium tracking-wide">Live Projects</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter">
              <Counter to={2} />
            </h3>
            <p className="text-gray-400 font-medium tracking-wide">Internships</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter">
              <Counter to={2} />
            </h3>
            <p className="text-gray-400 font-medium tracking-wide">IIT Competitions</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tighter">
              <Counter to={15} />+
            </h3>
            <p className="text-gray-400 font-medium tracking-wide">Tech Skills</p>
          </div>
        </div>

        {/* Right: Story text */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#fec144] mb-8 leading-tight tracking-[-0.03em]"
          >
            I build full-stack web applications from scratch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6"
          >
            <p>
              I&apos;m Kunal Kolhe — a CSE student at Sanjivani University (CGPA 7.23) with a diploma background. I build full-stack web applications from scratch, ship them to production, and make them actually useful.
            </p>
            <p>
              My stack centers around React, Next.js, TypeScript, and Supabase — equally comfortable on the backend with Node.js, Express, PostgreSQL, and Spring Boot.
            </p>
            <p>
              I have worked in enterprise environments at HCL Technologies, competed at IIT Mandi &amp; IIT Gandhinagar, and am certified by NPTEL IIT Madras &amp; MeitY FutureSkills Prime.
            </p>
            <p className="border-l-4 border-[#ff6b35] pl-4 italic text-white/80 font-medium mt-8">
              Every project here is live. Every skill here is earned.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
