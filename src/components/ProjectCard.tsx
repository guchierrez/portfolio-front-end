import { useContext } from "react";
import { IProjectCardProps } from "../interface";
import { Accordion } from "./Accordion";
import { MainContext } from "../provider/MainContext";

export const ProjectCard = ({
  imgSource,
  title,
  reverse,
  description,
  technologies,
  features,
  liveDemo,
  repo,
}: IProjectCardProps) => {
  const { translation } = useContext(MainContext);
  return (
    <div
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
        <Accordion
          project={title}
          title={translation ? "Descrição" : "Description"}
        >
          <p className="font-thin leading-7 tracking-wide">{description}</p>
        </Accordion>
        <Accordion
          project={title}
          title={translation ? "Tecnologias" : "Technologies"}
        >
          <ul className="ml-4 font-thin leading-7 tracking-wide list-disc ">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Accordion>
        <Accordion project={title} title="Features">
          <ul className="ml-4 font-thin leading-7 tracking-wide list-disc">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Accordion>
        <div className="flex gap-5 my-4">
          <a
            className="tracking-widest rounded-none btn btn-primary"
            target="_blank"
            href={repo}
          >
            {translation ? "Ver código" : "See code"}
          </a>
          <a
            className="tracking-widest rounded-none btn btn-outline"
            target="_blank"
            href={liveDemo}
          >
            {translation ? "Ao vivo" : "Live demo"}
          </a>
        </div>
      </div>
    </div>
  );
};
