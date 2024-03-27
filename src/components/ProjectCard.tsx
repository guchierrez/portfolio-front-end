import { useContext } from "react";
import { IProjectCardProps } from "../interface";
import { MainContext } from "../provider/MainContext";
import { ProjectCardButtons } from "./ProjectCardButtons";
import { AccordionGroup } from "./AccordionGroup";
import { motion } from "framer-motion";

export const ProjectCard = ({
  imgSource,
  title,
  reverse,
  description,
  technologies,
  features,
  liveDemo,
  repositories,
}: IProjectCardProps) => {
  const item = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const reverseItem = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const { translation } = useContext(MainContext);
  return (
    <motion.li
      variants={reverse ? reverseItem : item}
      className={`md:flex ${
        reverse ? "md:flex-row-reverse ml-auto" : "md:flex-row"
      }  grid bg-[#1c1c1c] my-auto grid-cols-1 w-full xl:w-3/4`}
    >
      <img
        className="object-cover transition-all duration-300 md:max-w-xs lg:max-w-md"
        src={imgSource}
        alt={title}
      />
      <div className="w-full p-4 outline-none">
        <h3 className="py-2 text-2xl font-semibold tracking-widest uppercase xl:text-3xl font-marlinge text-primary">
          {title}
        </h3>
        <AccordionGroup
          description={description}
          features={features}
          technologies={technologies}
          title={title}
          translation={translation}
        />
        <ProjectCardButtons
          liveDemo={liveDemo}
          repositories={repositories}
          translation={translation}
        />
      </div>
    </motion.li>
  );
};
