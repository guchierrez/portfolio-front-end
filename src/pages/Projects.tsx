import { useContext } from "react";
import { PageTitle } from "../components/PageTitle";
import { ProjectCard } from "../components/ProjectCard";
import { MainContext } from "../provider/MainContext";
import { ProjectContext } from "../provider/ProjectContext";
import { motion } from "framer-motion";

export const Projects = () => {
  const { translation } = useContext(MainContext);
  const { projects } = useContext(ProjectContext);

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 1,
      },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 2 } }}
      className="flex flex-col w-5/6 gap-12 py-10 mx-auto"
    >
      <PageTitle title={translation ? "Projetos" : "Projects"} />
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col gap-20"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imgSource={project.image}
            title={project.name}
            description={
              translation ? project.description : project.description_en
            }
            reverse={project.id % 2 != 0}
            technologies={project.technologies}
            features={translation ? project.features : project.features_en}
            liveDemo={project.project_url}
            repositories={project.repositories}
          />
        ))}
      </motion.ul>
    </motion.main>
  );
};
