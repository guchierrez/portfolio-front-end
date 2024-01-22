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
  repositories,
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
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="rounded-none btn btn-primary"
            >
              {translation ? "Ver código" : "See code"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-200 w-52"
            >
              {repositories.map((repository: Object) => (
                <li
                  className="tracking-widest uppercase"
                  key={Object.keys(repository)[0]}
                >
                  <a target="_blank" href={Object.values(repository)[0]}>
                    {Object.keys(repository)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
