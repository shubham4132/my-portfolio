"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Terminal } from "lucide-react";

const SKILLS = [
  "React",
  "Node.js",
  "mongoDB",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn",
];

const SERVICES = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and performant user interfaces using modern web technologies.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Backend Development",
    description:
      "Designing scalable APIs and robust database architectures for complex web applications.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">
            01. About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Passionate about <br />
            creating solutions.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — Bio + Skills */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-gray-400 text-lg space-y-4 leading-relaxed"
            >
              <p>
                I'm a full-stack developer based in India, specializing in
                building modern and scalable web applications.
              </p>
              <p>
                I work with technologies like React, Next.js, Node.js, and
                MongoDB to create fast, user-friendly, and responsive websites.
                I enjoy turning ideas into real-world products that solve
                problems.
              </p>
              <p>
                Currently, I'm focused on improving my problem-solving skills
                through DSA and building real-world projects to strengthen my
                development skills. I'm always open to learning new technologies
                and working on exciting projects.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-10"
            >
              <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-gray-500" />
                Technologies I work with:
              </h4>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Service Cards */}
          <div className="lg:col-span-5">
            <div className="grid gap-6">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
