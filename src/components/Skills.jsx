import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiDaisyui } from "react-icons/si";
import { motion } from "framer-motion";
import DaisyUIIcon from "../assets/mark-static.svg";

const skills = {
  Frontend: [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "DaisyUI", icon: DaisyUIIcon, color: "text-pink-500" }, // added
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  ],
  Tools: [
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "Database", icon: FaDatabase, color: "text-indigo-500" },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="pb-20 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-center text-accent">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.keys(skills).map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-base-200 rounded-2xl shadow-lg border border-base-300"
            >
              <h3 className="text-xl font-bold mb-6 text-primary text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-10 ">
                {skills[category].map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center w-20 h-20 bg-base-100 rounded-xl shadow-md p-4"
                  >
                    {typeof skill.icon === "string" ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-7 h-7"
                      />
                    ) : (
                      <skill.icon className={`text-4xl ${skill.color}`} />
                    )}

                    <span className="mt-2 text-sm font-semibold text-primary">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
