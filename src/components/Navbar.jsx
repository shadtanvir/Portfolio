import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { FaMoon, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

import logo from "../assets/logo3.png";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { path: "about", label: "About" },
    { path: "skills", label: "Skills" },
    { path: "education", label: "Education" },
    { path: "projects", label: "Projects" },
    { path: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-base-200 border-b border-base-200 ">
      <div className="max-w-5xl mx-auto flex   md:flex-row  items-center md:justify-between px-6 py-4">
        {" "}
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[var(--color-accent)] focus:outline-none"
        >
          <AiOutlineMenu />
        </button>
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="w-18 h-10 rounded-full"
          />
          <span className="text-2xl font-bold text-[var(--color-accent)] group-hover:text-[var(--color-success)] transition-all">
            Tanvir
          </span>
        </NavLink>
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                smooth={true}
                duration={500}
                spy={true}
                offset={-110}
                className="cursor-pointer relative py-1 transition-all duration-300 text-[var(--color-primary)] hover:text-[var(--color-accent)] text-lg"
                activeClass="active"
              >
                {link.label}
                <motion.span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--color-accent)]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </li>
          ))}
          {/* Theme toggle */}
          <li className="text-center">
            <button
              onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
              }
              className=" rounded-full "
            >
              {theme === "dark" ? (
                <IoSunny className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-indigo-500 text-lg" />
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[var(--color-base-100)] border-t border-[var(--color-base-200)] shadow-md w-35 "
        >
          <ul className="flex flex-col text-center py-4 space-y-3 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-100}
                  className="cursor-pointer relative py-1 transition-all duration-300 text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                  activeClass="active"
                >
                  {link.label}
                  <motion.span
                    className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--color-accent)]"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
            ))}
            {/* Theme toggle */}
            <li>
              <button
                onClick={() =>
                  setTheme((prev) => (prev === "light" ? "dark" : "light"))
                }
                className=" rounded-full "
              >
                {theme === "dark" ? (
                  <IoSunny className="text-yellow-400 text-xl" />
                ) : (
                  <FaMoon className="text-indigo-500 text-lg" />
                )}
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
