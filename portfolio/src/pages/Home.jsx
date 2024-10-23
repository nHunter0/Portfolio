import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

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
  //  only showing 2 in the featured section
];

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("work");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className="min-h-screen bg-neutral-100 dark:bg-primary-900 text-neutral-800 dark:text-neutral-100 
      transition-colors duration-300"
    >
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="pt-24 px-4">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <motion.div
              className="md:col-span-7 order-2 md:order-1 space-y-6"
              variants={fadeIn}
            >
              <motion.div className="space-y-2" variants={stagger}>
                <motion.h2
                  variants={fadeIn}
                  className="text-accent-purple text-lg font-medium"
                >
                  Software Engineer & Digital Forensics Enthusiast
                </motion.h2>
                <motion.h1 variants={fadeIn} className="text-4xl font-bold">
                  Nathan Hunter
                </motion.h1>
                <motion.div
                  variants={fadeIn}
                  className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
                >
                  <MapPin size={18} className="text-accent-purple" />
                  <span>Based in Sydney, Australia 🏢</span>
                </motion.div>
                <motion.p
                  variants={fadeIn}
                  className="text-neutral-600 dark:text-neutral-400 max-w-md pt-2"
                >
                  Crafting innovative solutions in digital forensics. I
                  specialize in performance optimization and encryption
                  technologies, turning complex challenges into elegant
                  solutions. When I'm not decoding digital mysteries, you'll
                  find me working on side projects or enjoying a cup of instant
                  coffee. ☕
                </motion.p>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary group"
                >
                  <FileText
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  <span>Resume</span>
                </a>
                <div className="flex gap-2">
                  {[
                    {
                      Icon: Linkedin,
                      href: "https://linkedin.com/in/h-nathan",
                    },
                    { Icon: Github, href: "https://github.com/nHunter0" },
                    { Icon: Mail, href: "mailto:n-hunter@hotmail.com" },
                  ].map(({ Icon, href }, index) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-icon hover:scale-110"
                      variants={fadeIn}
                      transition={{ delay: 0.1 * (index + 1) }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:col-span-5 order-1 md:order-2"
              variants={fadeIn}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div
                  className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden
                  ring-4 ring-accent-purple/20 mx-auto relative z-10"
                >
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-accent-purple/10 w-48 h-48 rounded-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.section
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Tabs */}
            <div className="flex w-full border rounded-xl bg-white dark:bg-primary-800 p-1.5">
              {["work", "education"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 px-6 py-2.5 rounded-lg font-medium transition-all duration-300 
                    ${
                      activeTab === tab
                        ? "bg-accent-purple text-white shadow-lg shadow-accent-purple/25"
                        : "hover:bg-neutral-100 dark:hover:bg-primary-700 text-neutral-600 dark:text-neutral-300"
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Experience
                </motion.button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              className="bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-lg shadow-neutral-200/50 dark:shadow-none
                min-h-[400px]"
              layout
            >
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {activeTab === "work" ? (
                  <>
                    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-accent-purple/20">
                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent-purple" />
                      <div className="space-y-2">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                            <h3 className="text-lg font-semibold">
                              GetData Forensics
                            </h3>
                            <p className="text-accent-purple">
                              Software Engineer
                            </p>
                          </div>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            March 2024 - Present
                          </span>
                        </div>
                        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
                          <li>Performance Optimization with CUDA, OpenCL</li>
                          <li>
                            Developed decryption tools for encrypted databases
                          </li>
                          <li>Expanded forensic file analysis capabilities</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-accent-purple/20">
                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent-purple" />
                      <div className="space-y-2">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                            <h3 className="text-lg font-semibold">
                              GetData Software Company
                            </h3>
                            <p className="text-accent-purple">
                              Software Engineer Intern
                            </p>
                          </div>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            January 2021 - January 2022
                          </span>
                        </div>
                        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
                          <li>Enhanced and maintained software products</li>
                          <li>Implemented virtualization for testing</li>
                          <li>Led software integration initiatives</li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-accent-purple/20">
                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent-purple" />
                      <div className="space-y-2">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                            <h3 className="text-lg font-semibold">
                              University of Wollongong
                            </h3>
                            <p className="text-accent-purple">
                              Bachelor of Computer Science
                            </p>
                          </div>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            2021 - December 2023
                          </span>
                        </div>
                        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
                          <li>Specialization in Cybersecurity</li>
                          <li>Graduate with Distinction</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-accent-purple/20">
                      <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent-purple" />
                      <div className="space-y-2">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div>
                            <h3 className="text-lg font-semibold">
                              University of Wollongong
                            </h3>
                            <p className="text-accent-purple">
                              Bachelor of Science
                            </p>
                          </div>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            2020 - 2021
                          </span>
                        </div>
                        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
                          <li>Cell/Cellular and Molecular Biology</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          </motion.section>
          {/* Featured Projects Section */}
          <motion.section
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-accent-purple">
                Featured Projects
              </h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  to="/projects"
                  className="group flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-accent-purple dark:hover:text-accent-purple transition-colors"
                >
                  View all projects
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="grid gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Featured Projects */}
              {projectList.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                        ease: "easeOut",
                        delay: index * 0.2,
                      },
                    },
                  }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className="group bg-white dark:bg-primary-800 rounded-2xl overflow-hidden 
          shadow-lg hover:shadow-xl transition-all duration-300 
          hover:shadow-accent-purple/10"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold group-hover:text-accent-purple transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-purple
                  dark:bg-accent-purple/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>

                    <div className="flex gap-3 pt-2">
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="text-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            ></motion.div>
          </motion.section>
        </div>
      </main>

      <style jsx>{`
        .button-primary {
          @apply flex items-center gap-2 px-4 py-2 bg-accent-purple text-white rounded-xl
            hover:bg-accent-violet transition-all duration-300 shadow-lg shadow-accent-purple/25;
        }

        .button-icon {
          @apply p-2 rounded-xl bg-neutral-200 dark:bg-primary-700 hover:bg-neutral-300 
            dark:hover:bg-primary-600 transition-all duration-300;
        }
      `}</style>
    </div>
  );
};

export default Home;
