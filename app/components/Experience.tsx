"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "ElementOne (E-commerce Project)",

    description: [
      "Built a full-stack e-commerce platform for Ayurvedic products using React, Node.js, Express, and MongoDB.",
      "Implemented product search, pagination, add-to-cart functionality, and Razorpay payment integration.",
      "Developed product detail pages and an order management system for users and admin approval.",
      "Used Cloudinary for image storage and Tailwind CSS for modern UI design.",
    ],
  },
  {
    id: 2,
    role: " Full Stack Developer",
    company: "ShopEasy(E-commerce Project)",

    description: [
      "Developed an e-commerce platform for women, men, kids, and footwear products.",
      "Implemented product filtering by category, size, and price for better user experience.",
      "Integrated PayPal payment gateway for secure online transactions.",
      "Built a responsive UI using React and shadcn UI components.",
    ],
  },
  {
    id: 3,
    role: " Full Stack Developer",
    company: "DigitalDukan (E-commerce Project)",

    description: [
      "Built an electronics e-commerce platform for products like TVs, mobiles, and refrigerators.",
      "Implemented product comparison, filtering, and detailed specifications for better decision-making.",
      "Developed cart and order management system with smooth checkout flow.",
      "Designed responsive UI using React and optimized performance for large product data.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3">
            03. Projects & Experience
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            What I’ve Built.
          </h3>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10 hidden md:block"></div>

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-[7px] top-2.5 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-black hidden md:block"></div>

              {/* Role + Period */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <h4 className="text-xl font-bold text-white">
                  {exp.role}{" "}
                  <span className="text-gray-400">@ {exp.company}</span>
                </h4>
              </div>

              {/* Points */}
              <ul className="space-y-3 text-gray-400">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="relative pl-5 leading-relaxed
                    before:content-['▹'] before:absolute before:left-0
                    before:text-white before:text-xs before:top-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
