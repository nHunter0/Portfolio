import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Building2,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

const ExperienceCard = ({
  role,
  company,
  date,
  location,
  description,
  skills,
  link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="relative rounded-2xl bg-white dark:bg-primary-800 overflow-hidden"
    >
      <motion.div layout="position" className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <motion.h3 layout="position" className="text-lg font-semibold">
              {role}
            </motion.h3>
            <div className="flex items-center gap-2 text-sm text-accent-purple">
              <Building2 size={16} />
              <span>
                <a href={link}>{company}</a>
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-primary-700 rounded-xl transition-colors"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 pt-4"
            >
              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-medium">Responsibilities & Achievements</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <h4 className="font-medium">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-purple
                      dark:bg-accent-purple/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {link && (
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent-purple hover:text-accent-violet"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more</span>
                  <ExternalLink size={14} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Timeline Indicator */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-purple/20">
        <motion.div
          className="w-full bg-accent-purple"
          animate={{
            height: isExpanded ? "100%" : "30%",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("work");

  const experienceData = {
    work: [
      {
        role: "Software Engineer",
        company: "GetData Forensics",
        date: "March 2024 - Present",
        location: "Sydney, Australia",
        description: [
          "Performance Optimization with CUDA, OpenCL",
          "Developed decryption tools for encrypted databases",
          "Expanded forensic file analysis capabilities",
          "Led software integration initiatives",
        ],
        skills: ["CUDA", "OpenCL", "C++", "Python", "Forensics", "Encryption"],
        link: "https://getdataforensics.com/",
      },
      {
        role: "Software Engineer Intern",
        company: "GetData Forensics",
        date: "January 2021 - January 2022",
        location: "Sydney, Australia",
        description: [
          "Enhanced and maintained software products",
          "Implemented virtualization for testing",
          "Led software integration initiatives",
          "Collaborated with senior engineers on core features",
        ],
        skills: ["C++", "Python", "Git", "Software Testing", "Virtualization"],
        link: "https://getdataforensics.com/",
      },
    ],
    education: [
      {
        role: "Bachelor of Computer Science",
        company: "University of Wollongong",
        date: "2021 - December 2023",
        location: "Wollongong, Australia",
        description: [
          "Specialization in Cybersecurity",
          "Graduate with Distinction",
          "Key coursework: Algorithms, Data Structures, Network Security",
          "Led team projects in software development",
        ],
        skills: [
          "Cybersecurity",
          "Algorithms",
          "Data Structures",
          "Java",
          "Python",
        ],
        link: "https://www.uow.edu.au",
      },
      {
        role: "Bachelor of Science",
        company: "University of Wollongong",
        date: "2020 - 2021",
        location: "Wollongong, Australia",
        description: [
          "Cell/Cellular and Molecular Biology",
          "Foundation in scientific principles",
          "Laboratory research experience",
          "Academic excellence in core subjects",
        ],
        skills: ["Biology", "Research", "Lab Techniques", "Data Analysis"],
        link: "https://www.uow.edu.au",
      },
    ],
  };

  return (
    <motion.section className="space-y-8">
      {/* Tab Buttons */}
      <div className="flex w-full border rounded-xl bg-white dark:bg-primary-800 p-1.5">
        {["work", "education"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-6 py-2.5 rounded-lg font-medium relative ${
              activeTab === tab ? "text-white" : ""
            }`}
          >
            <motion.div
              className="absolute inset-0 rounded-lg bg-accent-purple"
              initial={false}
              animate={{
                opacity: activeTab === tab ? 1 : 0,
              }}
              transition={{ duration: 0.1 }}
            />
            <span className="relative flex items-center justify-center gap-2">
              {tab === "work" ? (
                <Building2 size={18} />
              ) : (
                <GraduationCap size={18} />
              )}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Experience Cards */}
      <motion.div className="space-y-4" layout>
        <AnimatePresence mode="wait">
          {experienceData[activeTab].map((experience, index) => (
            <motion.div
              key={experience.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};

export default ExperienceSection;
