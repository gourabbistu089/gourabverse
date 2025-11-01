'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedJobTitle = () => {
  const titles = [
    "Aspiring Software Engineer",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Competitive Coder"
  ];
  
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      // Typing forward
      if (currentTitle.length < titles[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setCurrentTitle(titles[currentTitleIndex].substring(0, currentTitle.length + 1));
        }, 100);
      } else {
        // When typing is complete, wait before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      // Deleting
      if (currentTitle.length > 0) {
        timeout = setTimeout(() => {
          setCurrentTitle(currentTitle.substring(0, currentTitle.length - 1));
        }, 75);
      } else {
        // When deleting is complete, move to next title and start typing
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentTitle, currentTitleIndex, isTyping, titles]);
  
  return (
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="text-xl md:text-2xl font-light flex items-center h-8 overflow-hidden"
    >
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {currentTitle}
      </span>
      
      <motion.span
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="text-purple-400 font-bold ml-1"
      >
        |
      </motion.span>
    </motion.h2>
  );
};

export default AnimatedJobTitle;