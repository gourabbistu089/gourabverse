


'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../lib/constants';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#4f46e525,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#3b82f620,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#8b5cf625,transparent_70%)]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05),_1px,transparent_1px),linear-gradient(to_right,rgba(99,102,241,0.06),_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Additional subtle effects */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stylish Header with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 mx-auto max-w-3xl"
          >
            <p className="text-gray-400">
              Explore my latest work — from responsive web apps to innovative solutions built with modern technologies
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/30 shadow-lg shadow-blue-900/5 h-full flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Enhanced hover effect with glowing icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-black/40 backdrop-blur-sm group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-800/80 hover:bg-blue-600 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-gray-800/80 hover:bg-purple-600 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-5">{project.description}</p>
                
                {/* Technology tags with improved styling */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-900/20 text-blue-300 border border-blue-800/30 hover:bg-blue-900/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-900/20 text-purple-300 border border-purple-800/30 hover:bg-purple-900/30 transition-colors">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Enhanced CTA Button */}
                
              </div>
              
              {/* Decorative corner accent with enhanced glow */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-blue-500/30 to-purple-500/30 rotate-45 transform origin-bottom-left"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View more projects link with enhanced styling */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 text-white border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 group"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}