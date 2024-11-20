import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext";

const PortfolioTerminal = ({ onClose, terminalButtonRef }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to NathanPortfolioOS v1.0.0",
    'Type "help" for available commands',
  ]);
  const [isSudo, setIsSudo] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const outputContainerRef = useRef(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const { isDarkMode } = useDarkMode();

  const commands = {
    help: () => [
      "Available commands:",
      "• about - Learn about Nathan",
      "• skills - View technical skills",
      "• projects - List major projects",
      "• contact - Get contact info",
      "• whoami - Discover your true identity",
      "• clear - Clear terminal",
      "• sudo - Gain unlimited power",
      "• exit - Close terminal",
      "• easter - ???",
    ],
    about: () => [
      "Nathan Hunter",
      "Software Engineer & Digital Forensics Enthusiast",
      "Based in Sydney, Australia",
      "Passionate about encryption, optimization, and solving digital mysteries",
      <div key="about-link">
        Learn more on the{" "}
        <Link to="/" className="text-accent-purple underline">
          Home Page
        </Link>
        .
      </div>,
    ],
    skills: () => [
      "Technical Skills:",
      "• Languages: Delphi, Python, C, C++, JavaScript",
      "• Digital Forensics",
      "• Machine Learning",
      "• NLP & Data Analysis",
      <div key="skills-link">
        See my skills applied in{" "}
        <Link to="/projects" className="text-accent-purple underline">
          Projects
        </Link>
        {" "}and form more detail visit the{" "}
        <Link to="/" className="text-accent-purple underline">
          Home Page
        </Link>
        .
      </div>,
    ],
    projects: () => [
      "Notable Projects:",
      "• News Search Engine - NLP-based article analysis",
      "• NHText - Predictive text editor in C++",
      "• FileSystem CPP - Custom file system implementation",
      <div key="projects-link">
        Learn more on the{" "}
        <Link to="/projects" className="text-accent-purple underline">
          Projects Page
        </Link>
        .
      </div>,
    ],
    contact: () => [
      "Contact Information:",
      <div key="email">
        • Email:{" "}
        <a
          href="mailto:n-hunter@hotmail.com"
          className="text-accent-purple underline"
        >
          n-hunter@hotmail.com
        </a>
      </div>,
      <div key="linkedin">
        • LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/h-nathan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-purple underline"
        >
          /in/h-nathan
        </a>
      </div>,
      <div key="github">
        • GitHub:{" "}
        <a
          href="https://github.com/nHunter0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-purple underline"
        >
          /nHunter0
        </a>
      </div>,
    ],
    whoami: () => {
      if (isSudo) {
        return ["Root User (but you're still not getting my password 😎)"];
      }
      const responses = [
        "A curious soul exploring a developer's portfolio 🔍",
        "Someone who actually reads portfolio websites - I appreciate you! 🙏",
        "A person of impeccable taste in portfolio terminals ✨",
        "Hopefully my future colleague? 👀",
        "Someone who found the best command in this terminal 🎯",
        "A tech enthusiast with great command-line skills 💻",
      ];
      return [responses[Math.floor(Math.random() * responses.length)]];
    },
    clear: () => {
      setOutput([]);
      return [];
    },
    sudo: () => {
      if (isSudo) {
        return [
          "You already have unlimited power! Try not to break anything 😅",
        ];
      }
      setIsSudo(true);
      return [
        "Successfully gained root access!",
        "With great power comes great responsibility... 🦸‍♂️",
        "(Try other commands now with your new powers!)",
      ];
    },
    exit: () => {
      if (isSudo) {
        return [
          'Exit denied: You have too much power to leave! Try "sudo exit" 😉',
        ];
      }
      setTimeout(onClose, 500);
      return ["Goodbye! Thanks for visiting! 👋"];
    },
    easter: () => [
      "🎉 You found the easter egg! 🎉",
      "Here's a quick joke:",
      "Why do programmers prefer dark mode?",
      "Because light attracts bugs! 🪲",
      'Try "sudo" for more fun...',
    ],
  };

  const handleCommand = (cmd) => {
    const args = cmd.toLowerCase().trim().split(" ");
    const command = args[0];

    // Add command to history if it's not empty
    if (cmd.trim()) {
      setCommandHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
    }

    if (args.length === 2 && args[0] === "sudo" && args[1] === "exit") {
      setIsSudo(false);
      return [
        "Sudo powers revoked.",
        "You may now leave... but why would you want to? 😊",
      ];
    }

    if (command in commands) {
      return commands[command]();
    }

    if (command === "rm" || command === "drop") {
      return isSudo
        ? ["Nice try! Even with sudo, you can't delete my portfolio 😎"]
        : ["Permission denied: Need sudo access for destruction 🛡️"];
    }

    return [
      `Command not found: ${command}`,
      'Type "help" for available commands',
    ];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const result = handleCommand(input);
    setOutput((prev) => [
      ...prev,
      `${isSudo ? "# " : "> "}${input}`,
      ...result,
    ]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  const handleTerminalClick = (e) => {
    e.stopPropagation();
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop =
        outputContainerRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (terminalButtonRef?.current?.contains(e.target)) {
        return;
      }
      if (terminalRef.current && !terminalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={terminalRef}
      className={`${
        isDarkMode ? "bg-primary-800" : "bg-white"
      } rounded-2xl overflow-hidden shadow-lg`}
      onClick={handleTerminalClick}
      style={{
        width: "100%",
        height: "450px",
        resize: "both",
        minWidth: "300px",
        minHeight: "200px",
      }}
    >
      <div
        className={`${
          isDarkMode ? "bg-primary-900" : "bg-neutral-100"
        } p-3 flex items-center gap-3`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-accent-purple" />
          <span
            className={`${
              isDarkMode ? "text-neutral-100" : "text-neutral-700"
            } text-sm`}
          >
            portfolio-terminal {isSudo ? "(root)" : "(user)"}
          </span>
        </div>
      </div>

      <div
        ref={outputContainerRef}
        className={`p-4 font-mono text-sm ${
          isDarkMode ? "text-neutral-100" : "text-neutral-700"
        } space-y-2 overflow-y-auto`}
        style={{ height: "calc(100% - 48px)" }}
      >
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <span className="text-accent-purple">{isSudo ? "#" : ">"}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`w-full bg-transparent outline-none ${
              isDarkMode ? "text-neutral-100" : "text-neutral-700"
            } caret-accent-purple`}
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default PortfolioTerminal;
