"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Code2,
  Database,
  Layout,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";

const TypewriterText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  return (
    <span className="inline-flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
        {words[index].substring(0, subIndex)}
      </span>
      <span
        className={`inline-block w-[3px] h-[1em] bg-blue-400 ml-1 ${
          blink ? "opacity-100" : "opacity-0"
        } transition-opacity duration-100`}
        style={{ verticalAlign: "middle" }}
      ></span>
    </span>
  );
};

export function Hero() {
  const typewriterWords = [
    "web applications.",
    "mobile experiences.",
    "scalable systems.",
    "modern products.",
  ];

  const techStack = [
    {
      name: "React",
      icon: <Layout className="w-4 h-4" />,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
    },
    {
      name: "TypeScript",
      icon: <Code2 className="w-4 h-4" />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      name: "Node.js",
      icon: <Server className="w-4 h-4" />,
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20",
    },
    {
      name: "Next.js",
      icon: <Sparkles className="w-4 h-4" />,
      color: "text-white",
      bg: "bg-white/10",
      border: "border-white/20",
    },
    {
      name: "mongoDB",
      icon: <Database className="w-4 h-4" />,
      color: "text-blue-300",
      bg: "bg-blue-300/10",
      border: "border-blue-300/20",
    },
    {
      name: "TailwindCSS",
      icon: <Terminal className="w-4 h-4" />,
      color: "text-teal-400",
      bg: "bg-teal-400/10",
      border: "border-teal-400/20",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-black"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white"
          >
            I build fast, scalable & modern <br className="hidden md:block" />
            <TypewriterText words={typewriterWords} />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            Hi, I'm Shubham, a full-stack developer specializing in React,
            Node.js, and building real-world, high-performance web apps that
            deliver exceptional user experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 mb-16"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all hover:scale-105 overflow-hidden"
              style={{
                boxShadow:
                  "0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              View Work{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/images/shubhamresume1.pdf"
              download="shubhamresume1.pdf"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all hover:scale-105"
            >
              Download Resume{" "}
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${tech.bg} ${tech.border} backdrop-blur-sm`}
              >
                <span className={tech.color}>{tech.icon}</span>
                <span className="text-sm font-medium text-gray-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-400"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
