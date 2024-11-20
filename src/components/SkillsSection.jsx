import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { 
  SiDelphi,
  SiCplusplus,
  SiC,
  SiPython,
  SiSqlite,
  SiReact,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
  SiFlask,
  SiKalilinux,
} from 'react-icons/si';
import { 
  DiTerminal
} from 'react-icons/di';
import {
  BsSearch,
  BsCpu,
  BsShieldLock
} from 'react-icons/bs';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const textRef = useRef(null);

  // Check if text is truncated using ResizeObserver
  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const isTruncated = textRef.current.scrollHeight > textRef.current.clientHeight;
        setIsTextTruncated(isTruncated);
      }
    };

    // Create a ResizeObserver to watch for content changes
    const resizeObserver = new ResizeObserver(checkTruncation);
    
    if (textRef.current) {
      resizeObserver.observe(textRef.current);
      
      // Initial check after a brief delay to ensure content is rendered
      setTimeout(checkTruncation, 0);
    }

    return () => {
      if (textRef.current) {
        resizeObserver.unobserve(textRef.current);
      }
    };
  }, [selectedSkill]);

  const skillsData = {
    "Programming": [
      {
        name: "Delphi",
        color: "bg-red-500",
        icon: SiDelphi,
        description: "A Pascal-based programming language for building cross-platform desktop apps. I have extensive experience with Delphi and am currently crafting some exciting new projects with it!"
      },
      {
        name: "C++",
        color: "bg-orange-500",
        icon: SiCplusplus,
        description: "I have a strong background in C++ and use it when I need low-level control and high performance."
      },
      {
        name: "C",
        color: "bg-zinc-500",
        icon: SiC,
        description: "The grandfather of modern programming. I dont jump into C often, but when I do, I primarly use it for creating DLL wrappers and building custom DLLs"
      },
      {
        name: "Python",
        color: "bg-green-500",
        icon: SiPython,
        description: "The Swiss Army knife of programming languages and my primary toolkit. I have extensive experience with Python, leveraging it daily for both forensic analysis and machine learning implementations. Currently leading our team in developing AI-powered image analysis tools using TensorFlow, Keras, and scikit-learn, while crafting elegant solutions for complex challenges."
      },
      {
        name: "SQLite",
        color: "bg-blue-500",
        icon: SiSqlite,
        description: "The go-to embedded database that's literally everywhere. I regularly interact with SQLite DB's and WAL files for forensic analysis purposes."
      }
    ],
    "Full Stack": [
      {
        name: "React",
        color: "bg-blue-500",
        icon: SiReact,
        description: "A JavaScript library for building user interfaces. I use it to create interactive web apps - currently powering this portfolio you're looking at!"
      },
      {
        name: "Tailwind",
        color: "bg-cyan-500",
        icon: SiTailwindcss,
        description: "A utility-first CSS framework. Makes my websites look pretty without the CSS headaches 💅"
      },
      {
        name: "Flutter",
        color: "bg-green-500",
        icon: SiFlutter,
        description: "Google's UI toolkit for mobile apps. I build cross-platform mobile applications with it - one codebase, runs everywhere!"
      },
      {
        name: "Firebase",
        color: "bg-yellow-500",
        icon: SiFirebase,
        description: "Google's backend platform. My go-to tool for adding auth, storage, and databases to projects. Makes backend work actually enjoyable! 🔥"
      },
      {
        name: "Flask",
        color: "bg-gray-500",
        icon: SiFlask,
        description: "A lightweight Python web framework I use to build server-side applications and APIs quickly."
      }
    ],
    "Digital Forensics & Cybersecurity": [
      {
        name: "Volatility",
        color: "bg-purple-500",
        icon: BsSearch,
        description: "An advanced open-source memory forensics framework I use to analyze RAM dumps, detect malware, and recover hidden data."
      },
      {
        name: "Forensic Explorer",
        color: "bg-indigo-500",
        icon: BsCpu,
        description: "A comprehensive digital forensics software suite developed by our company. I use daily to investigate complex cases and recover evidence."
      },
      {
        name: "Encase",
        color: "bg-lime-500", 
        icon: BsShieldLock,
        description: "A powerful digital platform that I and many other use for forensic acquisition and analysis of hard drive data, preserving evidence integrity."
      },
      {
        name: "Kali Linux",
        color: "bg-slate-500",
        icon: SiKalilinux,
        description: "Industry-standard penetration testing platform. I leverage its comprehensive suite of security tools for vulnerability assessment and penetration testing."
      }
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <h2 className="text-2xl font-bold text-accent-purple">
        Technical Skills
      </h2>

      <div className="space-y-10">
        {Object.entries(skillsData).map(([category, categorySkills]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
              {category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill) => (
                <motion.button
                  key={skill.name}
                  onClick={() => {
                    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
                  }}
                  className={`group relative ${selectedSkill?.name === skill.name ? 'ring-2 ring-accent-purple' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute inset-0 ${skill.color} opacity-10 rounded-lg blur`} />
                  <div className="relative px-4 py-2 bg-white dark:bg-primary-800 rounded-lg shadow-sm hover:shadow-md transition-all">
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="h-px bg-gradient-to-r from-accent-purple/20 via-accent-purple/10 to-transparent" />
          </div>
        ))}
      </div>

      {/* Skill description container */}
      <div className="relative min-h-[8rem]">
        <AnimatePresence mode="wait">
          {selectedSkill ? (
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full p-6 bg-white dark:bg-primary-800 rounded-xl shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      {selectedSkill.icon && (
                        <selectedSkill.icon 
                          className="w-6 h-6 text-accent-purple" 
                        />
                      )}
                    </motion.div>
                    <h4 className="text-lg font-medium text-accent-purple">
                      {selectedSkill.name}
                    </h4>
                  </div>
                  
                  <div className="relative">
                    <div 
                      ref={textRef}
                      className={`text-sm text-neutral-600 dark:text-neutral-400 transition-all duration-200 ${
                        isExpanded ? 'h-auto' : 'h-10 overflow-hidden'
                      }`}
                    >
                      {selectedSkill.description}
                    </div>
                    
                    {isTextTruncated && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsExpanded(!isExpanded);
                        }}
                        className="mt-1 text-accent-purple flex items-center gap-1 text-sm"
                      >
                        {isExpanded ? (
                          <>Show Less <ChevronUp className="w-4 h-4" /></>
                        ) : (
                          <>Read More <ChevronDown className="w-4 h-4" /></>
                        )}
                      </button>
                    )}
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 flex-shrink-0"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 p-6 bg-white dark:bg-primary-800 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 h-full">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Sparkles className="w-6 h-6 text-accent-purple" />
                </motion.div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Exploring new technologies and continuously expanding my skill set. Click on any skill to learn more about my experience.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default SkillsSection;