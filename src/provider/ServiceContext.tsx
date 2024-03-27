import { createContext, useEffect, useState } from "react";
import { IServiceContext, IServiceContextProps, Service } from "../interface";
import { toast } from "react-toastify";
import { FaCode } from "react-icons/fa6";
import { GoServer } from "react-icons/go";
import { MdOutlineDesignServices, MdOutlineWeb } from "react-icons/md";

export const ServiceContext = createContext({} as IServiceContext);

export const ServiceContextProvider = ({ children }: IServiceContextProps) => {
  const [services, setServices] = useState<Array<Service>>([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async (): Promise<void> => {
    try {
      await setServices(data);
    } catch {
      toast.error(
        "There was an error while fetching projects from the database. Refresh the page and try again."
      );
    }
  };

  const data = [
    {
      id: 0,
      Icon: FaCode,
      name: "Desenvolvimento Front End",
      name_en: "Front End Development",
      description:
        "Implementação e design da interface do usuário de websites utilizando HTML, CSS e JavaScript.",
      description_en:
        "Implementation and design of the user interface of websites using HTML, CSS, and JavaScript.",
    },
    {
      id: 1,
      Icon: GoServer,
      name: "Desenvolvimento Back End",
      name_en: "Back End Development",
      description:
        "Arquitetura lógica do lado do servidor, bancos de dados e APIs para possibilitar a funcionalidade de aplicações web.",
      description_en:
        "Server-side logic architecture, databases, and APIs to enable the functionality of web applications.",
    },
    {
      id: 2,
      Icon: MdOutlineWeb,
      name: "Desenvolvimento Full Stack",
      name_en: "Full Stack Development",
      description:
        "Implementação de habilidades tanto de front-end quanto de back-end para desenvolver soluções de ponta a ponta.",
      description_en:
        "Implementation of both front-end and back-end skills to develop end-to-end solutions.",
    },
    {
      id: 3,
      Icon: MdOutlineDesignServices,
      name: "Web Design",
      name_en: "Web Design",
      description:
        "Desenvolvimento de layouts e gráficos de sites visualmente atraentes e fáceis de usar.",
      description_en:
        "Development of visually appealing and user-friendly website layouts and graphics.",
    },
  ];

  return (
    <>
      <ServiceContext.Provider
        value={{
          services,
          setServices,
        }}
      >
        {children}
      </ServiceContext.Provider>
    </>
  );
};
