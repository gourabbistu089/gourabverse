'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  // React Icons
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaJava, 
  FaPhp 
} from 'react-icons/fa';

import { 
  SiTypescript, 
  SiNextdotjs, 
  SiGraphql, 
  SiCplusplus, 
  SiExpress, 
  SiDjango, 
  SiMongodb, 
  SiMysql, 
  SiPandas, 
  SiNumpy, 
  SiScikitlearn, 
  SiTensorflow 
} from 'react-icons/si';

import { 
  // Lucide Icons
  Database, 
  BarChart3, 
  Brain,
  Code2,
  Monitor,
  Server,
  Grid3X3
} from 'lucide-react';

const skills = [
  // Languages
  {
    name: "JavaScript",
    category: "Languages",
    icon: <FaJs className="text-[#F7DF1E]" />,
  },
  // {
  //   name: "TypeScript",
  //   category: "Languages",
  //   icon: <SiTypescript className="text-[#3178C6]" />,
  // },
  {
    name: "Python",
    category: "Languages",
    icon: <FaPython className="text-[#3776AB]" />,
  },
  {
    name: "Java",
    category: "Languages",
    icon: <FaJava className="text-[#ED8B00]" />,
  },
  {
    name: "C++",
    category: "Languages",
    icon: <SiCplusplus className="text-[#00599C]" />,
  },
  {
    name: "PHP",
    category: "Languages",
    icon: <FaPhp className="text-[#777BB4]" />,
  },

  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: <FaReact className="text-[#61DAFB]" />,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs className="text-white" />,
  },
  {
    name: "HTML",
    category: "Frontend",
    icon: <FaHtml5 className="text-[#E34F26]" />,
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs className="text-[#339933]" />,
  },
  {
    name: "Express",
    category: "Backend",
    icon: <SiExpress className="text-white" />,
  },
  {
    name: "Django",
    category: "Backend",
    icon: <SiDjango className="text-[#092E20]" />,
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb className="text-[#47A248]" />,
  },
  {
    name: "SQL",
    category: "Database",
    icon: <Database className="text-[#336791]" />,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <SiMysql className="text-[#4479A1]" />,
  },

  // Data Science
  {
    name: "Pandas",
    category: "Data Science",
    icon: <SiPandas className="text-[#150458]" />,
  },
  {
    name: "NumPy",
    category: "Data Science",
    icon: <SiNumpy className="text-[#013243]" />,
  },
  {
    name: "Scikit-learn",
    category: "Data Science",
    icon: <SiScikitlearn className="text-[#F7931E]" />,
  },
  {
    name: "Machine Learning",
    category: "Data Science",
    icon: <Brain className="text-[#FF6B6B]" />,
  },
  {
    name: "Data Analysis",
    category: "Data Science",
    icon: <BarChart3 className="text-[#4CAF50]" />,
  },
];

const categories = [
  { name: "All", icon: <Grid3X3 className="w-4 h-4" /> },
  { name: "Frontend", icon: <Monitor className="w-4 h-4" /> },
  { name: "Backend", icon: <Server className="w-4 h-4" /> },
  { name: "Languages", icon: <Code2 className="w-4 h-4" /> },
  { name: "Database", icon: <Database className="w-4 h-4" /> },
  { name: "Data Science", icon: <BarChart3 className="w-4 h-4" /> }
];

const SkillsComponent = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  // console.log("Hovered skill:", hoveredSkill);

  const filteredSkills = activeTab === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

      // Reset hover state when changing categories
  const handleTabChange = (categoryName : any) => {
    setHoveredSkill(null);
    setActiveTab(categoryName);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#0F0F1A] to-[#141420] relative overflow-hidden" id="skills">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-40">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(102, 55, 241, 0.2) 1px, transparent 0),
              linear-gradient(45deg, rgba(139, 92, 246, 0.05) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(236, 72, 153, 0.05) 25%, transparent 25%)
            `,
            backgroundSize: "60px 60px, 120px 120px, 120px 120px",
          }}
        ></div>
        
        {/* Mesh Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10 opacity-50"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full`}
            style={{
              background: `linear-gradient(45deg, #6366F1, #8B5CF6, #EC4899)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent mb-4 sm:mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Skills
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Technologies and tools I use to build exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => handleTabChange(category.name)}
              className={`
                relative flex items-center justify-center gap-2 px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 
                text-xs sm:text-sm font-semibold rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden
                min-w-[3rem] sm:min-w-0
                ${activeTab === category.name
                  ? "text-white shadow-lg shadow-purple-500/25"
                  : "text-gray-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/25"
                }
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active background */}
              {activeTab === category.name && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl sm:rounded-2xl shadow-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Inactive background */}
              {activeTab !== category.name && (
                <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl" />
              )}
              
              {/* Icon */}
              <span className="relative z-10 text-current">
                {category.icon}
              </span>
              
              {/* Text - hidden on mobile */}
              <span className="relative z-10 hidden sm:inline">
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        {/* <AnimatePresence mode="wait"> */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 md:gap-8"
          >
            {filteredSkills.map((skill : any, index) => (
              <motion.div
                key={`${skill.name}-${skill.category}`} // More specific key
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Card */}
                <motion.div
                  className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto flex items-center justify-center rounded-2xl sm:rounded-3xl bg-gray-900/60 backdrop-blur-md border border-gray-700/50 cursor-pointer shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    rotateY: 10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Enhanced gradient border on hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] tod-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]"
                    whileHover={{
                      background: [
                        "linear-gradient(0deg, #6366F1, #8B5CF6, #EC4899)",
                        "linear-gradient(180deg, #6366F1, #8B5CF6, #EC4899)",
                        "linear-gradient(360deg, #6366F1, #8B5CF6, #EC4899)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-gray-900/95 backdrop-blur-md" />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 text-2xl sm:text-3xl md:text-4xl"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Enhanced glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#6366F1]/30 via-[#8B5CF6]/30 to-[#EC4899]/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Enhanced Tooltip */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute -bottom-12 sm:-bottom-14 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900/95 backdrop-blur-md text-white text-xs sm:text-sm font-medium rounded-xl border border-gray-700/50 whitespace-nowrap z-20 shadow-xl"
                    >
                      {skill.name}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-t border-gray-700/50" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        {/* </AnimatePresence> */}

        {/* Enhanced Bottom Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/40 backdrop-blur-md rounded-full border border-gray-700/50">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-gray-400 text-sm sm:text-base">
              Always learning and exploring new technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsComponent;