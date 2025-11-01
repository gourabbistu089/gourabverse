"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGraphql } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
// import { profile } from 'console';
import profilePic from "./Gourab.jpg";

// Updated skills with categories, levels, and icons (using React Icons)
const skills = [
  {
    name: "React",
    category: "Frontend",
    level: 92,
    icon: <FaReact className="text-blue-400" />,
  },
  {
    name: "TypeScript",
    category: "Languages",
    level: 85,
    icon: <SiTypescript className="text-blue-600" />,
  },
  {
    name: "Node.js",
    category: "Backend",
    level: 88,
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 90,
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "GraphQL",
    category: "Backend",
    level: 78,
    icon: <SiGraphql className="text-pink-500" />,
  },
  {
    name: "UI/UX Design",
    category: "Design",
    level: 82,
    icon: <MdOutlineDesignServices className="text-purple-400" />,
  },
  {
    name: "AWS",
    category: "DevOps",
    level: 75,
    icon: <FaAws className="text-yellow-500" />,
  },
  {
    name: "Docker",
    category: "DevOps",
    level: 80,
    icon: <FaDocker className="text-blue-500" />,
  },
];

// Updated timeline with more dramatic experiences
const timeline = [
  {
    year: "2025",
    title: "Project Maintainer",
    company: "NIT Jamshedpur Dispensary System",
    description:
      "Directed the development of a dispensary management system, reducing appointment scheduling time by 50%. Crafted a user-friendly interface, increasing adoption by 70%. Strengthened data security mechanisms, reducing vulnerabilities by 80%.",
    icon: "🛡️",
    color: "from-purple-500 to-indigo-600",
  },
  {
    year: "2024",
    title: "Web Head",
    company: "NSS, NIT Jamshedpur",
    description:
      "Managed and maintained the NSS website, increasing uptime to 99.9%. Spearheaded the creation of 3+ web-based solutions for NSS events, boosting engagement by 60%. Collaborated with 5+ teams to enhance NSS’s digital presence, reaching 2,000+ students.",
    icon: "🌐",
    color: "from-blue-500 to-cyan-600",
  },
  {
    year: "2023",
    title: "Web Developer",
    company: "E-Cell, NIT Jamshedpur",
    description:
      "Designed and crafted interfaces for 5+ client websites using the MERN stack. Integrated 10+ REST APIs, reducing data retrieval time by 40%. Engineered fully responsive websites, improving mobile compatibility by 95%.",
    icon: "💼",
    color: "from-pink-500 to-rose-600",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const pulseAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const [activeTab, setActiveTab] = useState("all");
  const [isInView, setIsInView] = useState(false);

  // Filter skills based on active category
  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  // Get unique categories
  const categories = [
    "all",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-tr from-gray-950 to-gray-950/10 text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Particle Background */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
          variants={fadeInUp}
          className="text-center mb-16 relative"
        >
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-purple-500/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -100 - 50],
                  x: [0, (Math.random() - 0.5) * 100],
                  opacity: [0.7, 0],
                  scale: [1, Math.random() * 2 + 0.5],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          <h2 className="relative inline-block text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-600 mb-6">
            About Me
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-600"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I transform complex challenges into elegant digital solutions, with
            a passion for crafting immersive experiences that live at the
            intersection of innovation and usability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Profile & Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-72 h-72 mb-8 group">
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(79,70,229,0) 70%)",
                    "radial-gradient(circle, rgba(79,70,229,0.3) 0%, rgba(147,51,234,0) 70%)",
                    "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0) 70%)",
                    "radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(79,70,229,0) 70%)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <div className="relative z-10 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-[0_0_25px_rgba(147,51,234,0.5)] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(147,51,234,0.7)] h-[310px] w-[310px]">
                <Image
                  src={profilePic}
                  alt="Developer portrait"
                  className="rounded-full  w-full h-full transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-5 -right-5 w-16 h-16 bg-blue-500/10 rounded-full backdrop-blur-md border border-blue-500/20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-12 h-12 bg-purple-500/10 rounded-full backdrop-blur-md border border-purple-500/20"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute top-10 -left-8 w-8 h-8 bg-cyan-500/10 rounded-full backdrop-blur-md border border-cyan-500/20"
                animate={{
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 1.5,
                }}
              />
            </div>

            <motion.div
              className="space-y-4 text-center lg:text-left"
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I’m a passionate software developer with a strong foundation in
                computer science and a deep commitment to building scalable,
                user-centric web applications. With a Master’s degree in
                Computer Applications from NIT Jamshedpur (CGPA: 9.17) and a
                Bachelor’s in Computer Science from J.K College, Purulia (CGPA:
                9.44), I bring both academic rigor and hands-on experience to
                every project I work on.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My professional journey spans impactful roles such as Web
                Developer at E-Cell and Web Head at NSS, NIT Jamshedpur, where I
                led the development of dynamic websites, integrated REST APIs,
                and significantly enhanced user engagement and site performance.
                As a Project Maintainer for the NITJ Dispensary Management
                System, I’ve architected end-to-end solutions that improved
                operational efficiency and data security.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond academics and internships, I’ve engineered full-stack
                platforms like Learnify and CodersHub using the MERN stack,
                Framer Motion, and Tailwind CSS, focusing on clean UI/UX,
                performance optimization, and smooth animations. Whether it's
                crafting immersive user interfaces or diving deep into backend
                logic, I strive to merge aesthetics with functionality.
              </p>
            </motion.div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="lg:col-span-3 space-y-2"
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-white mb-8">
              My Journey
            </h3>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className="relative pl-12 pb-12"
                >
                  {/* Timeline line */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[2px]"
                    style={{
                      background:
                        index < timeline.length - 1
                          ? `linear-gradient(to bottom, #9333ea, #4f46e5)`
                          : `linear-gradient(to bottom, #9333ea, transparent)`,
                    }}
                  />

                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute -left-4 top-0 w-8 h-8 bg-gray-900 rounded-full border-2 border-purple-500 flex items-center justify-center text-lg`}
                    whileHover={{
                      scale: 1.3,
                      boxShadow: "0 0 15px rgba(147,51,234,0.6)",
                    }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 shadow-lg"
                  >
                    <div className="mb-3">
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} inline-block mb-2`}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-blue-400 text-sm mb-2">
                        {item.company}
                      </p>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

   

     
      </div>
    </section>
  );
}
