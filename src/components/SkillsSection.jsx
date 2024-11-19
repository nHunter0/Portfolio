import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid, // React icon
  Palette, // Tailwind icon
  Smartphone, // Flutter icon
  Database, // Firebase icon
  Search, // Volatility icon
  Cpu, // Memory Analysis icon
  Monitor, // Delphi icon
  Code2, // C++ icon
  FileCode2, // Python icon
  Sparkles, // Fun icon
} from 'lucide-react';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsData = {
    "Programming": [
      {
        name: "Delphi",
        color: "bg-red-500",
        icon: Monitor,
        description: "A Pascal-based programming language for building cross-platform desktop apps. It's my go-to for building desktop apps - currently crafting some cool forensic utilities with it!"
      },
      {
        name: "C++",
        color: "bg-orange-500",
        icon: Code2,
        description: "A powerful systems programming language. I use it when I need that extra speed and low-level control"
      },
      {
        name: "C",
        color: "bg-zinc-500",
        icon: Code2,
        description: "The grandfather of modern programming. I use it primarily for creating DLL wrappers and building custom DLLs"
      },
      {
        name: "Python",
        color: "bg-green-500",
        icon: FileCode2,
        description: "The Swiss Army knife of programming languages. My favorite for automating boring tasks and building quick forensic analysis tools - it just makes life easier!"
      }
    ],
    "Full Stack": [
      {
        name: "React",
        color: "bg-blue-500",
        icon: LayoutGrid,
        description: "A JavaScript library for building user interfaces. I use it to create interactive web apps - currently powering this portfolio you're looking at!"
      },
      {
        name: "Tailwind",
        color: "bg-cyan-500",
        icon: Palette,
        description: "A utility-first CSS framework. Makes my websites look pretty without the CSS headaches 💅"
      },
      {
        name: "Flutter",
        color: "bg-sky-500",
        icon: Smartphone,
        description: "Google's UI toolkit for mobile apps. I build cross-platform mobile applications with it - one codebase, runs everywhere, what's not to love?"
      },
      {
        name: "Firebase",
        color: "bg-yellow-500",
        icon: Database,
        description: "Google's backend platform. My goto tool for adding auth, storage, and databases to projects. Makes backend work actually enjoyable! 🔥"
      }
    ],
    "Digital Forensics": [
      {
        name: "Volatility",
        color: "bg-purple-500",
        icon: Search,
        description: "An open-source memory forensics framework. I use it to dig through memory dumps and build custom plugins."
      },
      {
        name: "Forensic Explorer",
        color: "bg-indigo-500",
        icon: Cpu,
        description: "Our company's digital forensics software. It's my daily companion for investigating digital evidence and recovering data."
      },
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
                  onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
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

      {/* Fixed height container for description */}
      <div className="h-32 relative">
        <AnimatePresence mode="wait">
          {selectedSkill ? (
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 p-6 bg-white dark:bg-primary-800 rounded-xl shadow-lg"
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
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {selectedSkill.description}
                  </p>
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