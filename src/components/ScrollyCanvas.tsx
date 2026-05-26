"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas({ heroRef }: { heroRef: React.RefObject<HTMLDivElement> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const totalFrames = 120;
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

  useEffect(() => {
    let loaded = 0;
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp?v=2`;
      img.onload = () => {
        loaded++;
        setLoadedFrames(loaded);
      };
      imagesRef.current[i] = img;
    }
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (img && img.complete) {
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasAspect > imgAspect) {
        drawHeight = canvas.width / imgAspect;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgAspect;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.min(totalFrames - 1, Math.max(0, Math.floor(latest)));
    drawFrame(index);
  });

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const index = Math.floor(frameIndex.get());
        drawFrame(index);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  // Initial draw once frames start loading
  useEffect(() => {
    if (loadedFrames > 0) {
      const index = Math.floor(frameIndex.get());
      drawFrame(index);
    }
  }, [loadedFrames, frameIndex]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
      {loadedFrames < totalFrames && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#0d0d0d] text-white text-2xl font-bold">
          LOADING {Math.floor((loadedFrames / totalFrames) * 100)}%
        </div>
      )}
      <canvas ref={canvasRef} className="h-full w-full block" />
    </div>
  );
}
