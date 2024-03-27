import { createContext, useEffect, useState } from "react";
import {
  ITechnologyContext,
  ITechnologyContextProps,
  Technology,
} from "../interface";
import { toast } from "react-toastify";
import {
  BiLogoAngular,
  BiLogoDjango,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

export const TechnologyContext = createContext({} as ITechnologyContext);

export const TechnologyContextProvider = ({
  children,
}: ITechnologyContextProps) => {
  const [technologies, setTechnologies] = useState<Array<Technology>>([]);

  useEffect(() => {
    loadTechnologys();
  }, []);

  const loadTechnologys = async (): Promise<void> => {
    try {
      await setTechnologies(data);
    } catch {
      toast.error(
        "There was an error while fetching projects from the database. Refresh the page and try again."
      );
    }
  };

  const data = [
    {
      id: 0,
      name: "Tailwind CSS",
      Icon: BiLogoTailwindCss,
      years_oe: 1,
      months_oe: 1,
    },
    {
      id: 1,
      name: "Java",
      Icon: BiLogoJava,
      years_oe: 0,
      months_oe: 8,
    },
    {
      id: 2,
      name: "Spring Boot",
      Icon: BiLogoSpringBoot,
      years_oe: 0,
      months_oe: 6,
    },
    {
      id: 3,
      name: "Python",
      Icon: BiLogoPython,
      years_oe: 0,
      months_oe: 8,
    },
    {
      id: 4,
      name: "Django",
      Icon: BiLogoDjango,
      years_oe: 0,
      months_oe: 7,
    },
    {
      id: 5,
      name: "JavaScript",
      Icon: BiLogoJavascript,
      years_oe: 1,
      months_oe: 1,
    },
    {
      id: 6,
      name: "React.js",
      Icon: BiLogoReact,
      years_oe: 1,
      months_oe: 0,
    },
    {
      id: 7,
      name: "Angular",
      Icon: BiLogoAngular,
      years_oe: 8,
      months_oe: 0,
    },
    {
      id: 8,
      name: "Express.js",
      Icon: SiExpress,
      years_oe: 0,
      months_oe: 8,
    },
  ];

  return (
    <>
      <TechnologyContext.Provider
        value={{
          technologies,
          setTechnologies,
        }}
      >
        {children}
      </TechnologyContext.Provider>
    </>
  );
};
