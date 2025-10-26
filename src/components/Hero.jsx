import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { TypeAnimation } from "react-type-animation";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import profilePic from "../assets/dpPortfolio.jpg";
import resumePDF from "../assets/demoCv.pdf";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero max-h-2/3 bg-base-100 relative overflow-x-hidden overflow-y-hidden">
      <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-20">
        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.5 },
                push: { quantity: 3 },
              },
            },
            particles: {
              color: {
                value: [
                  "var(--color-accent)",
                  "var(--color-success)",
                  "var(--color-primary)",
                ],
              },
              links: {
                color: "var(--color-accent)",
                distance: 120,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: { value: 50, density: { enable: true, area: 800 } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0 overflow-hidden"
        />

        {/* Animated Gradient Blobs */}
        <div className="absolute top-[-10rem] left-[-10rem] w-[25rem] h-[25rem] bg-[var(--color-accent)] opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>
        <div className="absolute bottom-[-10rem] right-[-10rem] w-[25rem] h-[25rem] bg-[var(--color-success)] opacity-20 blur-3xl rounded-full animate-pulse delay-1000 z-0"></div>

        {/* Left Side - Intro */}
        <div className="flex-1 flex flex-col items-start justify-center space-y-6 md:space-y-8 z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl text-primary font-bold tracking-wide"
          >
            Hi, I'm{" "}
            <span className="bg-[var(--color-accent)] bg-clip-text text-transparent">
              Tanvir Ahmed Shad
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl font-semibold text-accent"
          >
            <TypeAnimation
              sequence={["Full Stack Developer", 2000, "", 200]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-accent   to-success bg-clip-text text-transparent max-w-md"
          >
            I craft modern, responsive web applications with clean and efficient
            code. I love transforming ideas into interactive, scalable, and
            elegant solutions that users enjoy.
          </motion.p>

          {/* Resume + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href={resumePDF}
              download
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-success)] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Download Resume
            </a>

            <div className="flex gap-4 items-center mt-2 sm:mt-0">
              <a
                href="https://github.com/"
                target="_blank"
                className=" text-2xl hover:-translate-y-1 hover:text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                className="text-2xl hover:-translate-y-1 hover:text-3xl text-[#0A66C2]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="text-2xl hover:-translate-y-1 hover:text-3xl "
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[var(--color-accent)] hover:scale-105 transition-transform bg-[rgba(255,255,255,0.1)] backdrop-blur-xl">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
