"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Element One Nutrition",
    description:
      "A full-stack eCommerce platform for Ayurvedic products. Includes product search, pagination, cart system, Razorpay payment integration, and admin order management.",
    tech: ["Reactjs", "Nodejs", "mongoDB", "Expressjs", "Tailwind CSS"],
    github: "https://github.com/shubhamg3122134/elementOne",
    live: "https://element-one-khaki.vercel.app/",
    image: "/images/project1.png",
  },
  {
    id: 2,
    title: "ShopEasy",
    description:
      "An eCommerce web application with product filtering, cart system, order management, and PayPal payment integration. Designed for a smooth and user-friendly shopping experience.",
    tech: ["React", "Nodejs", "mongoDB", "Expressjs", "shadcn"],
    github: "https://github.com",
    live: "https://ecommerce-frontend-mfuc.vercel.app/",
    image: "/images/project3.png",
  },
  {
    id: 3,
    title: "Digital Dukan",
    description:
      "An eCommerce web application with product filtering, cart system, order management, and PayPal payment integration. Designed for a smooth and user-friendly shopping experience.",
    tech: ["React", "Nodejs", "mongoDB", "Expressjs", "shadcn"],
    github: "https://github.com",
    live: "https://ecommmeredigitaldukanfrontend.onrender.com",
    image: "/images/project2.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">
              02. Selected Work
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">
              Featured Projects.
            </h3>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-400 transition-colors flex items-center gap-2 font-medium"
          >
            View full archive <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index % 2 === 0 ? 0 : 0.2 }}
              className="group relative flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-white/5 border border-white/10">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h4 className="text-2xl font-bold text-white">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
