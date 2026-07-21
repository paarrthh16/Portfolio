import React from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProfileImage from "@/assets/image/profile1.webp";

const Hero = () => {
  // Feature 1: Interactive Mouse-Follow Lighting state
  const mouseX = useMotionValue(200); // Approximate center for initial load
  const mouseY = useMotionValue(250); 
  
  // heavily eased motion to prevent snapping (approx 500ms return)
  const springConfig = { damping: 40, stiffness: 150, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    // Smoothly animate back to center on leave
    mouseX.set(width / 2);
    mouseY.set(height / 2);
  };

  // The subtle overlay highlight
  const spotlightStyle = useMotionTemplate`radial-gradient(circle 300px at ${smoothMouseX}px ${smoothMouseY}px, rgba(255,255,255,0.08) 0%, transparent 70%)`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="gradient-blob w-[600px] h-[600px] bg-gradient-to-r from-primary/40 to-destructive/40 -top-40 -right-40 animate-pulse-glow" />
      <div className="gradient-blob w-[500px] h-[500px] bg-gradient-to-r from-cyber-teal/30 to-neon-green/30 -bottom-40 -left-40 animate-pulse-glow animation-delay-400" />
      <div className="gradient-blob w-[300px] h-[300px] bg-primary/20 top-1/2 left-1/4 animate-float" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
          
          {/* LEFT SECTION: Preserved exactly as requested */}
          <div className="space-y-12 max-w-3xl">

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-secondary-foreground">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="space-y-2"
            >
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                Parth Shah
              </h2>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black tracking-tight leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              <span className="gradient-text-orange">FULL STACK</span>
              <br />
              <span className="text-foreground">AI ENGINEER</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance"
            >
              Building scalable full-stack applications, distributed backend
              systems, and AI-powered solutions using modern software
              engineering practices.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" variant="outline" className="group" asChild>
                <Link to="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>

              <Button size="lg" className="group" asChild>
                <Link to="/projects">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT SECTION: Premium Interactive Portrait Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[420px] shrink-0 mx-auto md:mx-0 mt-16 md:mt-0"
          >
            {/* Feature 2: Dynamic Aurora Glow Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none scale-110">
              <motion.div
                className="absolute top-[10%] left-[10%] w-[120%] h-[120%] rounded-[40%_60%_70%_50%] bg-blue-500/15 blur-[60px] mix-blend-screen"
                animate={{
                  x: ["0%", "-15%", "10%", "0%"],
                  y: ["0%", "15%", "-10%", "0%"],
                  rotate: [0, 15, -10, 0]
                }}
                transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-[20%] right-[10%] w-[100%] h-[110%] rounded-[60%_40%_50%_70%] bg-teal-500/10 blur-[80px] mix-blend-screen"
                animate={{
                  x: ["0%", "20%", "-15%", "0%"],
                  y: ["0%", "-10%", "20%", "0%"],
                  rotate: [0, -15, 10, 0]
                }}
                transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
              />
            </div>

            {/* Portrait Card Container */}
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[4/5] group rounded-[2rem] border border-white/[0.04] bg-[#0a0f1c]/40 backdrop-blur-md overflow-hidden flex flex-col justify-end items-center z-10 transition-colors duration-500 hover:border-white/[0.08]"
              style={{
                /* Premium Multi-layered Shadow System */
                boxShadow: `
                  0 4px 12px rgba(0,0,0,0.1),
                  0 16px 32px rgba(0,0,0,0.2),
                  0 24px 64px rgba(59,130,246,0.06),
                  inset 0 1px 0 rgba(255,255,255,0.06)
                `
              }}
            >
              {/* Vercel-style subtle top inner highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

              {/* Portrait Image Layer */}
              <img
                src={ProfileImage}
                alt="Parth Shah - Full Stack AI Engineer"
                width={500}
                height={500}
                className="relative w-[92%] h-auto max-h-[95%] object-contain object-bottom drop-shadow-2xl z-20 origin-bottom pointer-events-none"
              />

              {/* Feature 1: Interactive Mouse-Follow Spotlight Layer */}
              <motion.div
                className="absolute inset-0 z-30 pointer-events-none mix-blend-screen"
                style={{ background: spotlightStyle }}
              />
            </div>
          </motion.div>
          
        </div>

        {/* Scroll Indicator (Preserved) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;