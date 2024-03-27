import { IAccordionGroup } from "../interface";
import { Accordion } from "./Accordion";

export const AccordionGroup = ({
  title,
  description,
  technologies,
  features,
  translation,
}: IAccordionGroup) => {
  return (
    <>
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
    </>
  );
};
