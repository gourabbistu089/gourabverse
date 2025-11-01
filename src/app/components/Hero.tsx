"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Code,
  Sparkles,
  ExternalLink,
  Download,
  Twitter,
} from "lucide-react";
import { siteConfig } from "../lib/constants";
import Image from "next/image";
import AnimatedJobTitle from "./AnimatedJobTitle";

export default function Hero(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const textControls = useAnimation();

  // Text animation sequence
  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await textControls.start("visible");
      setIsLoaded(true);
    };

    sequence();
  }, [controls, textControls]);

  // Split text animation
  const titleWords = siteConfig.name.split(" ");

  return (
    <section
      id="home"
      className="min-h-screen w-full  overflow-hidden bg-slate-950 relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 ">
        {/* Animated gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#4f46e520,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#3b82f620,transparent_50%)]"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:90px_90px]"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto h-screen md:px-12 lg:px-18">
        <div className="flex flex-col lg:flex-row h-full">
          {/* LEFT SIDE: Text content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-6 lg:pl-12 pt-20 lg:pt-0 z-20"
          >
            <div className="space-y-6 md:space-y-7">
              {/* Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20"
              >
                <Sparkles size={14} className="text-blue-400" />
                <span className="text-xs font-medium">Available for work</span>
              </motion.div>

              {/* Animated title */}
              <div className="space-y-1">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                >
                  {titleWords.map((word, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-violet-300"
                      variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.4, ease: "easeOut" },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>

                <AnimatedJobTitle />
              </div>

              {/* Typewriter effect */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="h-6 overflow-hidden"
              >
                <AnimatePresence>
                  {isLoaded && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                      <p className="text-gray-400">
                        Expert in creating seamless digital experiences
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base"
              >
                {siteConfig.description}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 font-medium text-white hover:shadow-lg hover:shadow-blue-500/50 transition duration-300"
                >
                  <span className="relative flex items-center gap-2 rounded-md bg-slate-950 px-6 py-3 transition-all duration-300 ease-out group-hover:bg-opacity-50">
                    <span>Get in Touch</span>
                    <ChevronRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1ck1Yjim0RuVCkf7Iu9LRwPDqJU9_kUxO/view?usp=sharing"
                  target="_blank"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-900/32 to-purple-900/30 p-0.5 font-medium text-white hover:shadow-md hover:shadow-blue-500/10 transition duration-300"
                >
                  <span className="relative flex items-center gap-2 rounded-md bg-slate-950 px-6 py-3 transition-all duration-300 ease-out group-hover:bg-opacity-50">
                     <span>Resume</span>
                  <Download size={16} 
                  className="transition-transform duration-300 "/>
                 
                    
                  </span>
                </a>

              
              </motion.div>

              {/* Social links */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                  },
                }}
                className="flex gap-4"
              >
                {[
                  {
                    icon: <Github size={18} />,
                    url: siteConfig.social.github,
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin size={18} />,
                    url: siteConfig.social.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: <Twitter size={18} />,
                    url: `${siteConfig.social.x}`,
                    label: "Twitter",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                      hidden: { scale: 0.8, opacity: 0 },
                      visible: { scale: 1, opacity: 1 },
                    }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {social.icon}
                    <span className="text-sm">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Visual elements */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative hidden lg:flex items-center justify-center overflow-hidden"
          >
            {/* Colored gradient orbs */}
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>

            {/* 3D-like floating elements */}
            <div className="relative w-[500px] h-[500px]">
              {/* Code blocks */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-1/4 -left-10 p-5 rounded-xl bg-slate-900/80 backdrop-blur-lg border border-gray-800 shadow-lg"
              >
                <pre className="text-xs text-green-400">
                  <code>{`function animate() {\n  requestAnimationFrame();\n  render();\n}`}</code>
                </pre>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-1/4 right-0 p-5 rounded-xl bg-slate-900/80 backdrop-blur-lg border border-gray-800 shadow-lg"
              >
                <pre className="text-xs text-blue-400">
                  <code>{`const App = () => {\n  return <Hero />;\n}`}</code>
                </pre>
              </motion.div>

              {/* Tech stack badges */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute top-36  right-1/5 transform -translate-y-1/2 flex flex-col gap-3"
              >
                {["React", "TypeScript", "Next.js"].map((tech, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                    className="px-4 py-2 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-sm text-white/80 shadow-lg"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>

              {/* Central decorative circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100,
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-4 border-dashed border-blue-500/30 flex items-center justify-center "
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-full h-full rounded-full border border-blue-500/20 flex items-center justify-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <Sparkles size={32} className="text-blue-400" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative dots grid */}
            <div className="absolute inset-0">
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: Math.random() * 0.5 + 0.1 }}
                  transition={{ duration: 0.4, delay: Math.random() * 2 }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  className="absolute w-1 h-1 rounded-full bg-white/20"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-10 rounded-full border border-white/20 flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
          />
        </motion.div>
        <span className="mt-2 text-xs text-gray-500">Scroll down</span>
      </motion.div>
    </section>
  );
}
