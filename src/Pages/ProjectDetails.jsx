import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import agoraHome from "../assets/agora3.png";
import courseNestHome from "../assets/courseNest1.png";
import greenCircleHome from "../assets/greenCircle1.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import useTitle from "../Hooks/UseTitle";

const projects = {
  agora: {
    name: "Agora — Developer Forum",
    description:
      "Agora is a dynamic discussion and idea-sharing platform designed to bring people together around meaningful conversations. Users can create accounts, join discussions, share insights, comment, and interact in real time. The project focuses on community-driven engagement with smooth transitions, responsive UI, and secure Firebase authentication.It includes features like protected routes, role-based access (user/admin), and MongoDB-based data persistence. The frontend emphasizes motion and interactivity through Framer Motion animations and a dark/light mode toggle.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "DaisyUI",
      "Firebase Auth",
    ],
    live: "https://agora-shadtanvir.web.app/",
    github: "https://github.com/shadtanvir/Agora-client-side",
    challenges: [
      "Implementing efficient real-time updates for posts and comments.",
      "Handling Firebase authentication state persistence across reloads.",
      "Maintaining responsive UI consistency with dark/light theme.",
      "Designing an accessible yet elegant discussion layout that scales well across devices.",
    ],
    improvements: [
      "Integrate WebSocket-based live discussions.",
      "Add real-time chat and notifications using Socket.io.",
      "Add AI-powered post moderation using NLP.",
      "Introduce user analytics and engagement insights.",
    ],
    image: agoraHome,
  },

  courseNest: {
    name: "CourseNest — Course Management System",
    description:
      "CourseNest is a complete course management system that simplifies how learners and instructors interact in an online environment. It allows users to register, enroll in courses, view instructor and more details. Built using the MERN stack, it ensures a fast, responsive, and modern experience. Admins can manage course data, while students can view enrolled courses and view courses launched. The project follows best practices for component-driven design and modular backend routing.",
    techStack: [
      "React",
      "Express.js",
      "MongoDB",
      "Firebase",
      "JWT",
      "TailwindCSS",
      "Framer Motion",
    ],
    live: "https://course-nest-11.web.app/",
    github: "https://github.com/shadtanvir/CourseNest",
    challenges: [
      "Maintaining JWT token integrity between client and server.",
      "Handling re-login and route persistence during reloads.",
      "Designing a scalable backend for course enrollment logic.",
      "Structuring backend APIs for CRUD operations.",
    ],
    improvements: [
      "Add instructor dashboard and analytics panel.",
      "Enable course progress tracking for users.",
      "Add AI-based course recommendation engine.",
    ],
    image: courseNestHome,
  },

  greenCircle: {
    name: "Greenm Circle — Gardening Communiy",
    description:
      "Green Circle is a community and resource hub for gardening enthusiasts, built to connect nature lovers, hobbyists, and eco-friendly gardeners. Users can share their gardening tips, browse public tips, join discussions, and explore gardener profiles. It integrates Firebase authentication for secure access, CRUD functionalities for managing tips, and an elegant design inspired by modern green aesthetics. The app also features theme toggling (dark/light), dynamic filtering by difficulty level, and a like system synced with MongoDB.",
    techStack: [
      "React",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "TailwindCSS",
      "DaisyUI",
      "Lottie React",
    ],
    live: "https://green-circle-10.web.app/",
    github: "https://github.com/shadtanvir/Green-Circle",
    challenges: [
      "Implementing a like system that updates counts in real-time.",
      "Managing dynamic public/private content visibility.",
      "Ensuring consistent UI with nature-inspired colors and animations.",
    ],
    improvements: [
      "Add community event scheduling and map integration.",
      "Implement direct messaging between gardeners.",
      "Add advanced post filtering and search system.",
    ],
    image: greenCircleHome,
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects[id];
  useTitle("Project");

  if (!project)
    return (
      <div className="text-center py-40 text-2xl font-semibold text-primary">
        Project not found.
      </div>
    );

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl overflow-hidden shadow-2xl mb-10"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full object-cover h-[400px]"
        />
      </motion.div>

      {/* Title & Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">{project.name}</h1>
        <p className="text-base-content/80  text-center leading-relaxed mx-auto ">
          {project.description}
        </p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Main Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Challenges Faced
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-base-content/80">
          {project.challenges.map((challenge, i) => (
            <li key={i}>{challenge}</li>
          ))}
        </ul>
      </motion.div>

      {/* Future Plans */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Potential Improvements & Future Plans
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-base-content/80">
          {project.improvements.map((improve, i) => (
            <li key={i}>{improve}</li>
          ))}
        </ul>
      </motion.div>
      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-4 mt-8"
      >
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="btn bg-blue-600 btn-sm text-white"
        >
          Live Demo
          <FaExternalLinkAlt className="ml-2" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-sm"
        >
          Github Repository
          <FaGithub className="ml-2" />
        </a>
      </motion.div>

      <div className="text-center mt-12">
        <Link to="/" className="btn btn-accent btn-sm">
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
