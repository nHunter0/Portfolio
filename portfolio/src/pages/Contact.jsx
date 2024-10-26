import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { useDarkMode } from "../context/DarkModeContext";

const Contact = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode(true);

  const contactMethods = [
    {
      icon: MapPin,
      title: "Location",
      content: "Sydney, Australia",
      type: "text",
    },
    {
      icon: Mail,
      title: "Email",
      content: "n-hunter@hotmail.com",
      href: "mailto:n-hunter@hotmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "Connect with me",
      href: "https://www.linkedin.com/in/h-nathan",
    },
    {
      icon: Github,
      title: "GitHub",
      content: "Check out my repositories",
      href: "https://github.com/nHunter0",
    },
    {
      icon: Code2,
      title: "LeetCode",
      content: "View my solutions",
      href: "https://leetcode.com/u/nHunter0/",
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

      <main className="pt-24">
        <div className="max-w-3xl mx-auto px-4  pb-14 space-y-16">
          {/* Header */}
          <motion.div
            className="text-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto"
              variants={itemVariants}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </motion.p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-accent-purple/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent-purple/10 group-hover:bg-accent-purple/20">
                        <method.icon className="text-accent-purple" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {method.content}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white dark:bg-primary-800 rounded-2xl p-6 shadow-lg group-hover:shadow-xl group-hover:shadow-accent-purple/10">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-accent-purple/10 group-hover:bg-accent-purple/20">
                        <method.icon className="text-accent-purple" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {method.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
