import ProjectCard from "../components/ProjectCard";
import { projects as projectsData } from "../data";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { useState } from "react";
import { Category } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animation";

const Projects = () => {

  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState("all")

  const [showDetails, setShowDetails] = useState<number | null>(null)

  const handlerFilterCategoy = (category: Category | "all") => {
    if (category == "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArry = projectsData.filter(project => project.category.includes(category));
    setProjects(newArry);
    setActive(category)
  };

  return (
    <motion.div
      variants={routeAnimation} initial="initial" animate="animate" exit="exit"
      className="px-5 py-2 overflow-y-scroll" style={{ height: "68vh" }}>
      <nav>Navbar</nav>
      <ProjectsNavbar handlerFilterCategoy={handlerFilterCategoy} active={active} />

      <motion.div className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger} initial="initial" animate="animate">
        {
          projects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeInUp}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
              <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails} />
            </motion.div>
          ))
        }
      </motion.div>
    </motion.div >
  );
};

export default Projects;
