import { MdOutlineWeb } from "react-icons/md"
import { ServiceCard } from "./ServiceCard"
import { FaCode } from "react-icons/fa6";
import { GoServer } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { MainContext } from "../provider/MainContext";
import { useContext } from "react";


export const ServiceSection = () => {
  const { translation } = useContext(MainContext);

  return (
    <div>
      <h2 className="pb-8 text-3xl">{translation ? "Serviços" : "My Services"}</h2>
    <div className="grid gap-10 select-none md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-nowrap">
    <ServiceCard Icon={FaCode} title={translation ? "Desenvolvimento Front-end" : "Front-end Development"} description={translation ? "Implementação e design da interface do usuário de websites utilizando HTML, CSS e JavaScript." : "Implementation and design of the user interface of websites using HTML, CSS, and JavaScript."} />
    <ServiceCard Icon={GoServer} title={translation ? "Desenvolvimento Back-end" : "Back-end Development"} description={translation ? "Arquitetura lógica do lado do servidor, bancos de dados e APIs para possibilitar a funcionalidade de aplicações web." : "Server-side logic architecture, databases, and APIs to enable the functionality of web applications."} />
    <ServiceCard Icon={MdOutlineWeb} title={translation ? "Desenvolvimento Full-stack" : "Full-stack Development"} description={translation ? "Implementação de habilidades tanto de front-end quanto de back-end para desenvolver soluções de ponta a ponta." : "Implementation of both front-end and back-end skills to develop end-to-end solutions."} />
    <ServiceCard Icon={MdOutlineDesignServices} title="Web Design" description={translation ? "Desenvolvimento de layouts e gráficos de sites visualmente atraentes e fáceis de usar." : "Development of visually appealing and user-friendly website layouts and graphics."} />
    </div>
    </div>
  )
}