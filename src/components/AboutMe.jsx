import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette } from "react-icons/fa";
import profileImg from "../assets/dpPortfolio.jpg";

const floatTransition = {
  y: { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="pb-20 mt-20 bg-base-100 text-base-content transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold mb-10 text-center text-accent"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Floating Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            transition={floatTransition}
            className="flex-shrink-0  relative"
          >
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-30 rounded-full"></div>
            <img
              src={profileImg}
              alt="Profile"
              className="w-56 h-56 rounded-2xl object-cover shadow-xl border-4 border-indigo-500/40 dark:border-cyan-400/40 relative z-10"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed text-justify"
          >
            <p>
              Hello! I’m{" "}
              <span className="font-semibold text-indigo-500 dark:text-cyan-400">
                Tanvir Ahmed Shad
              </span>
              , a passionate{" "}
              <span className="text-accent font-semibold">
                Full Stack Developer
              </span>{" "}
              who loves turning ideas into real-world digital solutions. My
              journey in programming started out of curiosity — I wanted to
              understand how websites actually work — and soon, it turned into
              an obsession with creating smooth, functional, and visually
              appealing web experiences.
            </p>

            <p>
              I enjoy building modern web applications using{" "}
              <span className="font-semibold text-indigo-500 dark:text-cyan-400">
                React, Express.js, and MongoDB
              </span>
              , constantly learning new technologies, and writing clean,
              maintainable code. My focus lies in backend development and
              scalable architectures, but I also enjoy crafting engaging
              frontend interfaces.
            </p>

            <p>
              Outside of coding, I find joy in{" "}
              <span className="font-semibold text-amber-500">
                playing football
              </span>
              , exploring new tech trends, and experimenting with{" "}
              <span className="font-semibold text-pink-500">UI design</span>. I
              believe every developer should balance logic with creativity — and
              that’s what drives my passion for software engineering.
            </p>

          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
