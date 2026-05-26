"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // PHASE 1 — Ghost watermark
  const opacity1 = useTransform(scrollYProgress, [0, 0.10, 0.18, 0.28], [1, 1, 1, 0]);

  // PHASE 2 — Name intro block
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.38, 0.44, 0.52], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.52], [60, -60]);

  // PHASE 3 — Role statement
  const opacity3 = useTransform(scrollYProgress, [0.52, 0.62, 0.70, 0.78], [0, 1, 1, 0]);

  // PHASE 4 — Main headline
  const opacity4 = useTransform(scrollYProgress, [0.78, 0.88, 0.96, 1.00], [0, 1, 1, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
      {/* PHASE 1 */}
      <motion.div
        style={{ opacity: opacity1, willChange: "opacity, transform" }}
        className="absolute text-white/10 font-black flex items-center justify-center w-full h-full"
      >
        <span style={{ fontSize: "clamp(5rem, 15vw, 14rem)" }}>Kunal Kolhe.</span>
      </motion.div>

      {/* PHASE 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2, willChange: "opacity, transform" }}
        className="absolute flex flex-col items-center justify-center text-center px-4 w-full"
      >
        <p className="text-sm md:text-base font-medium text-gray-400 mb-2 uppercase tracking-widest">
          I Build Web Applications
        </p>
        <h1
          className="font-extrabold text-white leading-tight mb-4"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Kunal Kolhe.
        </h1>
        <p className="text-sm md:text-lg text-gray-300 font-medium tracking-wide">
          CSE Student &middot; Full-Stack Developer
        </p>
      </motion.div>

      {/* PHASE 3 */}
      <motion.div
        style={{ opacity: opacity3, willChange: "opacity, transform" }}
        className="absolute flex items-center justify-center px-4 text-center w-full"
      >
        <h2
          className="font-bold text-white whitespace-pre-line leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 7rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {"Full-Stack Developer &\nProblem Solver."}
        </h2>
      </motion.div>

      {/* PHASE 4 */}
      <motion.div
        style={{ opacity: opacity4, willChange: "opacity, transform" }}
        className="absolute flex flex-col items-center justify-center px-4 text-center w-full"
      >
        <h2
          className="font-bold text-white whitespace-pre-line leading-tight mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          {"I build applications from scratch,\nship them to production, and\nmake them actually useful."}
        </h2>
        <p className="text-sm md:text-lg text-gray-300 font-medium uppercase tracking-wider">
          React &middot; Next.js &middot; Supabase &middot; Spring Boot
        </p>
      </motion.div>
    </div>
  );
}
