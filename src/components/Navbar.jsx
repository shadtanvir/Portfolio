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
  const menuRef = useRef();

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
  }, [menuOpen]);

  const navLinks = [
    { path: "about", label: "About" },
    { path: "skills", label: "Skills" },
    { path: "education", label: "Education" },
    { path: "projects", label: "Projects" },
    { path: "contact", label: "Contact" },
  ];

  return (
    <div className="navbar sticky z-50 top-0 shadow-md px-6 py-4 bg-base-200 text-primary-content font-poppins h-20">
      <div className="navbar max-w-5xl mx-auto">
        {/* Mobile dropdown */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="p-2 hover:font-semibold hover:bg-base-300 lg:hidden text-primary"
            >
              <button className=" text-2xl text-[var(--color-accent)] focus:outline-none">
                <AiOutlineMenu />
              </button>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-200 items-center rounded-box text-lg w-52"
            >
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-110}
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

          <div className="flex-1 ">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-20 h-20 object-contain"
                />
                <span className="text-accent text-3xl  font-bold ">Tanvir</span>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex-none navbar-end">
          <ul className="menu menu-horizontal md:items-center px-1 font-poppins text-lg hidden lg:flex flex-nowrap">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-110}
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
      </div>
    </div>
  );
};

export default Navbar;
