import React, { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { useDarkMode } from "../context/DarkModeContext";

const Projects = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projectList = [
    {
      id: 1,
      name: "News Search Engine",
      description:
        "A simple news search engine that fetches top news articles using NewsAPI, scrapes content with BeautifulSoup, and performs sentiment analysis, ranking results based on TF-IDF relevance.",
      githubLink: "https://github.com/nHunter0/News-Search-Engine",
      tech: ["Python", "BeautifulSoup", "NLP", "NewsAPI"],
    },
    {
      id: 2,
      name: "Text Editor C++",
      description:
        "NHText is a text editor written in C++ with predictive text technology, improving typing efficiency and accuracy through NLP and machine learning.",
      githubLink: "https://github.com/nHunter0/TextEditorCpp",
      tech: ["C++", "NLP", "Machine Learning"],
    },
    {
      id: 3,
      name: "FileSystem CPP",
      description:
        "This repository hosts a simulated file system in C++, leveraging the MD5 algorithm for security.",
      githubLink: "https://github.com/nHunter0/FileSystem-Cpp",
      tech: ["C++", "MD5", "File Systems"],
    },
    {
      id: 4,
      name: "Block Chain Clicker Game",
      description:
        "This project is a fun, interactive game that combines the addictive nature of clicker games with the concept of mining cryptocurrency using a simple blockchain.",
      githubLink: "https://github.com/nHunter0/NHCoinMiningGame/",
      websiteLink: "https://nhunter0.github.io/NHCoinMiningGame/",
      tech: ["JavaScript", "Blockchain", "Game Development"],
    },
    {
      id: 5,
      name: "Resistor Detector",
      description:
        "This repository contains the code necessary to train and utilize a Convolutional Neural Network (CNN) for resistor recognition from images. The model classifies 37 different resistor types with high accuracy.",
      githubLink: "https://github.com/nHunter0/Resistor-Detector-",
      tech: ["Python", "CNN", "Computer Vision", "Deep Learning"],
    },
    {
      id: 6,
      name: "Portfolio",
      description:
        "This repository showcases my dynamic and interactive portfolio, crafted using the power and flexibility of React.",
      githubLink: "https://github.com/nHunter0/Portfolio",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      id: 7,
      name: "TFIDF NLP",
      description:
        "This TF-IDF calculator processes text from .txt and .pdf files, featuring a drag-and-drop Tkinter GUI.",
      githubLink:
        "https://github.com/nHunter0/TF.IDF-Natural-Language-Processor-",
      tech: ["Python", "NLP", "Tkinter", "PDF Processing"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-primary-900 text-neutral-800 dark:text-neutral-100 transition-colors duration-300">
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="pt-24 pb-14">
        <div className="max-w-3xl mx-auto px-4  space-y-16">
          {/* Header with animated title */}
          <motion.div
            className="text-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-wider"
              variants={itemVariants}
            >
              {Array.from("PROJECTS").map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block hover:text-accent-purple cursor-default"
                  whileHover={{
                    scale: 1.2,
                    rotate: [-5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-neutral-600 dark:text-neutral-400"
              variants={itemVariants}
            >
              Here are a few recent projects I've worked on
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projectList.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="group bg-white dark:bg-primary-800 rounded-2xl overflow-hidden 
                  shadow-lg hover:shadow-xl
                  hover:shadow-accent-purple/10"
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <motion.h3
                        className="text-xl font-bold group-hover:text-accent-purple transition-colors"
                        layout
                      >
                        {project.name}
                      </motion.h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-purple
                          dark:bg-accent-purple/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex gap-3 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 * index }}
                  >
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-200 dark:bg-primary-700
                        hover:bg-accent-purple hover:text-white transition-all duration-300
                        text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      GitHub
                    </motion.a>
                    {project.websiteLink && (
                      <motion.a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-200 dark:bg-primary-700
                          hover:bg-accent-purple hover:text-white transition-all duration-300
                          text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        Demo
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
