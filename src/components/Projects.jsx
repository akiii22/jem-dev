import img1 from "/public/img1.png";
import img2 from "/public/img2.png";
import img3 from "/public/img3.png";
import img4 from "/public/img4.png";
import img7 from "/public/img7.png";
import { motion } from "framer-motion";

const projectData = [
  {
    image: img3,
    title: "KCL Hardware (Capstone Project)",
    description:
      "A full-stack e-commerce website for a hardware shop with data visualization, built during my thesis as part of my capstone project.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    image: img4,
    title: "Fast Pizza (Course Project)",
    description:
      "A client-side React application where users can order pizza and view their order. Built as part of a course project using React, Redux, and Tailwind CSS.",
    technologies: ["Redux", "Tailwind CSS", "React", "React Router"],
  },
  {
    image: img7,
    title: "Forkify App (Course Project)",
    description:
      "A JavaScript application where you can search for your favorite pizza recipes and create your own. Built as part of a course project following the MVC architecture.",
    technologies: ["HTML", "CSS", "JavaScript", "MVC"],
  },
  {
    image: img1,
    title: "UsePopcorn (Course Project)",
    description:
      "A React application where you can search for movies and save them to your list. This project introduced me to the useEffect hook and component state management.",
    technologies: ["React", "Styled Components", "useEffect"],
  },
  {
    image: img2,
    title: "Worldwise (Course Project)",
    description:
      "A map-based React application where users can mark locations they've traveled to. Built as part of a course project to learn React Router and Context API.",
    technologies: ["React", "Styled Components", "React Router", "Context API"],
  },
];

function ScrollBehavior({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

function Projects() {
  return (
    <div
      id="project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollBehavior>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollBehavior>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectsCart project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

function ProjectsCart({ project }) {
  return (
    <ScrollBehavior>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollBehavior>
  );
}

export default Projects;
