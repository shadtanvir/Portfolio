import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 ">
      <div className="max-w-5xl mx-auto px-6 py-5 text-center font-poppins">
        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-base-content/80 mt-6"
        >
          © {new Date().getFullYear()} <span className="text-accent">Tanvir Ahmed Shad</span>. All
          rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
