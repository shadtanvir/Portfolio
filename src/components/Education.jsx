import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "University of Scholars",
      duration: "2022 – Present",
      description:
        "Currently pursuing my undergraduate studies with a strong focus on Software Engineering, Web Development, and AI-related research.",
    },
  ];

  return (
    <section id="education" className="pb-20 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-12 text-center text-accent">
          Education
        </h2>

        <div className="relative border-l-4 border-accent">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full">
                <FaGraduationCap className="text-lg" />
              </span>
              <div className="p-6 bg-base-200 rounded-2xl shadow-md border border-base-300">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {item.degree}
                </h3>
                <p className="text-sm  text-accent font-medium max-w-md mb-2">
                  {item.institution} | <span>{item.duration}</span>
                </p>
                <p className="text-base leading-relaxed text-base-content/80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
