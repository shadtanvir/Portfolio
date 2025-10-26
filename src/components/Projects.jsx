import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import agoraHome from "../assets/agora3.png";
import courseNestHome from "../assets/courseNest1.png";
import greenCircleHome from "../assets/greenCircle1.png";

const projects = [
  {
    id: "agora",
    name: "Agora – Developer Forum",
    image: agoraHome,
    description:
      "A full-stack Developer Discussion Forum built with MERN stack featuring authentication, posts, comments, and real-time updates.",
  },
  {
    id: "courseNest",
    name: "CourseNest - Course Management System",
    image: courseNestHome,
    description:
      "A full-stack Course Management System that enables users to browse, enroll in, and manage online courses seamlessly.",
  },
  {
    id: "greenCircle",
    name: "Green Circle - Gardening Community",
    image: greenCircleHome,
    description:
      "A full-stack Gardening Community Platform where plant lovers can connect, share tips, and explore new gardening techniques.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pb-20 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-12 text-center text-accent ">
          My Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card bg-base-200 shadow-lg rounded-2xl border border-base-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <figure className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-fill w-full h-48 hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="card-body p-6">
                <h3 className="card-title text-xl text-primary mb-2">
                  {project.name}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm  text-base-content/80 ">
                  {project.description}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-accent btn-sm flex items-center gap-2"
                  >
                    View Details <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
