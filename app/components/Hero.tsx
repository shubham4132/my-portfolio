"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const ROLES = [
  "web applications.",
  "SaaS products.",
  "digital experiences.",
  "scalable APIs.",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  // Smooth mouse parallax
  useEffect(() => {
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const loop = () => {
      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;
      setMouse({ x: current.x, y: current.y });
      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const word = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        75,
      );
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length - 1)),
        38,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-mesh.png"
          alt="background"
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/80 to-black" />
      </div>

      {/* ── Parallax blobs ── */}
      <div
        className="absolute top-1/4 left-1/3 w-[560px] h-[560px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)",
          transform: `translate(${mouse.x * -28}px, ${mouse.y * -28}px)`,
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
        }}
      />
      <div
        className="absolute top-2/3 left-1/4 w-72 h-72 rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
          transform: `translate(${mouse.x * 14}px, ${mouse.y * -14}px)`,
        }}
      />

      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Floating particles ── */}
      {[
        { left: "12%", top: "22%", delay: 0 },
        { left: "28%", top: "65%", delay: 0.6 },
        { left: "55%", top: "18%", delay: 1.1 },
        { left: "72%", top: "55%", delay: 0.3 },
        { left: "85%", top: "30%", delay: 0.8 },
        { left: "40%", top: "80%", delay: 1.4 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/40 pointer-events-none z-0"
          style={{ left: p.left, top: p.top }}
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-300 tracking-wide">
                Available for new opportunities
              </span>
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-semibold mb-5"
          >
            Full-Stack Developer
          </motion.p>

          {/* Heading line 1 */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-2"
          >
            I build fast,
          </motion.h1>

          {/* Heading line 2 */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-3"
          >
            scalable & modern
          </motion.h1>

          {/* Typewriter line */}
          <motion.div
            variants={fadeUp}
            className="flex items-center mb-8 min-h-[1.2em]"
          >
            <span className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">
              {displayed}
            </span>
            <motion.span
              className="inline-block w-[3px] rounded-full ml-1 self-center bg-violet-400"
              style={{ height: "0.85em" }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.85, repeat: Infinity }}
            />
          </motion.div>

          {/* Thin accent line */}
          <motion.div
            variants={fadeUp}
            className="w-14 h-px bg-gradient-to-r from-indigo-500 via-violet-500 to-transparent mb-8"
          />

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed"
          >
            Hi, I'm <span className="text-white font-semibold">Shubham</span> —
            a full-stack developer specializing in{" "}
            <span className="text-indigo-400 font-medium">React</span>,{" "}
            <span className="text-indigo-400 font-medium">Node.js</span>, and
            building real-world, high-performance web apps.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-semibold rounded-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 32px rgba(255,255,255,0.22)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              View Work
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>

            <motion.a
              href="/images/shubhamresume.pdf"
              download="shubhamresume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/8 text-white font-semibold rounded-xl border border-white/15 backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.13)",
                borderColor: "rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
              <motion.span
                animate={{ y: [0, 2, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Download className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-10">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Built" },
              { value: "10+", label: "Happy Clients" },
            ].map((s) => (
              <motion.div
                key={s.label}
                className="flex flex-col gap-1"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                <span className="text-3xl font-bold text-white">{s.value}</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] text-gray-600">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
