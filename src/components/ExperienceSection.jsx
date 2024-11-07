import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Building2,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
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
            className="p-2 hover:bg-neutral-100 dark:hover:bg-primary-700 rounded-xl"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
        </div>

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

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 pt-4"
            >
              <div className="space-y-2">
                <h4 className="font-medium">Responsibilities & Achievements</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-purple dark:bg-accent-purple/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

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
        date: "2024 - Present",
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
        role: "Full-Stack Developer",
        company: "Self Employed",
        date: "2022 - 2023",
        location: "Hybrid, Australia ",
        description: [
          "Developed and maintaining responsive web applications for clients",
          "Creating secure, user-friendly mobile applications using React Native and Flutter",
          "Managed multiple client projects and delivering customized solutions",
          "Providing ongoing support and maintenance for deployed applications in my spare time",
        ],
        skills: [
          "React",
          "React Native",
          "Flutter",
          "Node.js",
          "WebDev",
          "Firebase",
        ],
        link: "#",
      },
      {
        role: "Software Engineer Intern",
        company: "GetData Forensics",
        date: "2021 - 2022",
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
        date: "2021 - 2023",
        location: "Wollongong, Australia",
        description: [
          "Majored and specialized in Cybersecurity",
          "Graduate with Distinction",
          "Key coursework: Algorithms, Data Structures, Network Security",
          "Graduated in the top 5% of undergraduates in the Faculty of Engineering and Information Sciences",
          "Placed in top 5 projects for end of year CAPSTONE project",
          "Led team projects in software development",
        ],
        skills: [
          "Cybersecurity",
          "Algorithms",
          "Data Structures",
          "C++",
          "Java",
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
    certifications: [
      {
        role: "Machine Learning/AI Engineer Course",
        company: "Codecademy",
        date: "2024",
        location: "Online",
        description: [
          "Intermediate Machine Learning course",
          "50 hour comprehensive curriculum",
          "37 AI Projects completed",
          "Neural networks and deep learning",
          "Data preprocessing and analysis",
        ],
        skills: ["Machine Learning", "Python", "Github", "Data Analysis"],
        link: "https://www.codecademy.com/profiles/Nathan123_69/certificates/6f8e0510ca91437a847b53aa9e9aa3f1",
      },
      {
        role: "Advanced Python Course",
        company: "Codecademy",
        date: "2024",
        location: "Online",
        description: [
          "Python fundamentals and advanced concepts",
          "Foundation of Python core concepts",
          "Object-oriented programming",
          "Data structures and algorithms",
        ],
        skills: ["Python", "Algorithms", "Data Structures"],
        link: "https://www.codecademy.com/profiles/Nathan123_69/certificates/9360ffd5f85216dc4fbe5b19fe1db5e4",
      },
      {
        role: "Intermediate Python 3 Course",
        company: "Codecademy",
        date: "2023",
        location: "Online",
        description: [
          "Advanced Python programming concepts",
          "Best practices in Python development",
          "Problem-solving with Python",
          "Code optimization techniques",
        ],
        skills: ["Python", "Object-Oriented Programming", "Code Optimization"],
        link: "https://www.codecademy.com/profiles/Nathan123_69/certificates/18580789eaba28f09e116f4fc2acec44",
      },
    ],
  };

  const tabIcons = {
    work: Building2,
    education: GraduationCap,
    certifications: Award,
  };

  return (
    <motion.section className="space-y-8">
      <div className="flex w-full border rounded-xl bg-white dark:bg-primary-800 p-1.5">
        {Object.keys(experienceData).map((tab) => {
          const IconComponent = tabIcons[tab];
          return (
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
                <IconComponent size={18} />
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </motion.button>
          );
        })}
      </div>

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
