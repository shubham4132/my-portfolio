"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">
            04. What's Next?
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm a full-stack developer open to freelance work, internships, and
            full-time opportunities. Whether you have a project idea, need a
            website, or just want to connect, feel free to reach out. I’ll try
            my best to respond as soon as possible!
          </p>
        </motion.div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamgoswami418@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl text-lg"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Noida,sector 62</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/shubham4132"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white p-2 rounded-lg"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shubhamdev01"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white p-2 rounded-lg"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white p-2 rounded-lg"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
