import { createContext, useEffect, useState } from "react";
import { IProjectContext, IProjectContextProps, Project } from "../interface";
import { toast } from "react-toastify";

export const ProjectContext = createContext({} as IProjectContext);

export const ProjectContextProvider = ({ children }: IProjectContextProps) => {
  useEffect(() => {
    loadProjects();
  }, []);

  const [projects, setProjects] = useState<Array<Project>>([]);

  const loadProjects = async (): Promise<void> => {
    try {
      await setProjects(data);
    } catch {
      toast.error(
        "There was an error while fetching projects from the database. Refresh the page and try again."
      );
    }
  };

  const data = [
    {
      id: 2,
      name: "SWIFTASK",
      description:
        "Swiftask é uma plataforma fullstack, que permite aos usuários gerenciarem sua lista de tarefas.",
      description_en: "Swiftask is a concise to do list app.",
      image: "https://i.ibb.co/9g1Qsn6/asdasdasd.jpg",
      technologies: [
        "TypeScript",
        "React.js",
        "Java",
        "Spring Boot",
        "Tailwind CSS",
        "Daisy UI",
      ],
      features: [
        "API REST",
        "Validação dinâmica de formulários",
        "Design responsivo em todas as resoluções",
      ],
      features_en: [
        "API REST",
        "Dynamic form validation",
        "Responsive design in all resolutions",
      ],
      project_url: "https://swiftask-front-end.vercel.app/",
      repositories: [
        "https://github.com/guchierrez/swiftask-front-end",
        "https://github.com/guchierrez/swiftask-back-end",
      ],
    },
    {
      id: 3,
      name: "DEV MOVIES",
      description:
        "Dev Movies é uma plataforma fullstack que permite aos usuários se inscreverem e publicarem suas avaliações de filmes. Também podem ver as avaliações de outros usuários assim como criar, editar e excluir suas próprias avaliações.",
      description_en:
        "Dev Movies is a full-stack platform that allows users to sign up and post their own reviews, as well as view reviews from other users. You are able to create, edit, and delete reviews.",
      image: "https://i.ibb.co/27bfPLj/project3.jpg",
      technologies: [
        "TypeScript",
        "Next.js",
        "Zustand",
        "Tailwind CSS",
        "Tailwind Variants",
        "Daisy UI",
        "Other Libraries: React Hook Form, ZOD, Toastify, React Icons",
      ],
      features: [
        "REST API",
        "Proteção de rotas, autenticação automática",
        "Validação dinâmica de formulários",
        "Design responsivo em todas as resoluções",
        "Criação dinâmica de metadata para indexação de páginas",
        "Uso de livraria de gerenciamento de estado",
        "Uso de livraria de variáveis de estilização, promovendo a escalabilidade do código",
      ],
      features_en: [
        "REST API",
        "Route protection, auto-login",
        "Dynamic form validation",
        "Responsive design in all resolutions",
        "Dynamic metadata generation for page indexing",
        "Usage of state management library (Zustand)",
        "Usage of style variants library, enhancing code scalability (Tailwind Variants)",
      ],
      project_url:
        "https://dev-movies-rdoce0q9m-marcelinogutierrez.vercel.app/",
      repositories: [
        "https://github.com/guchierrez/dev-movies-front-end",
        "https://github.com/guchierrez/dev-movies-back-end",
      ],
    },
    {
      id: 4,
      name: "FASHION STORE",
      description:
        "Plataforma e-commerce que foi desenvolvida como um projeto colaborativo, no qual eu atuei como Tech Lead. Você pode se cadastrar como administrador e acessar a dashboard, onde é possível: criar, editar e remover itens na loja.",
      description_en:
        "In this platform, you are able to sign up as an administrator and login into the dashboard, where you are able to: create, edit and remove items from the shop.",
      image: "https://i.ibb.co/RQd3mdh/fashionkenzie.jpg",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Daisy UI"],
      features: [
        "API REST",
        "Funcionalidade completa de loja e carrinho",
        "Proteção de rotas",
        "Validação dinâmica de formulários",
        "Design responsivo em todas as resoluções",
      ],
      features_en: [
        "REST API",
        "Complete store and cart functionality",
        "Route protection",
        "Dynamic form validation",
        "Responsive design in all resolutions",
      ],
      project_url: "https://fashion-store-marcelino-gutierrez.vercel.app/",
      repositories: [
        "https://github.com/Kenzie-Academy-Brasil-Developers/fashion-store-entrega-template-grupo2",
        "https://github.com/guchierrez/fashion-kenzie-back-end",
      ],
    },
    {
      id: 5,
      name: "DEV HUB",
      description:
        "Dev Hub é uma plataforma fullstack que permite aos usuários se inscreverem e registrar as tecnologias que utilizam em seu trabalho, bem como seu nível de proficiência.",
      description_en:
        "Dev Hub is a fullstack platform that allows users to sign up and register the technologies they use for their work and how proficient they are at it.",
      image: "https://i.ibb.co/YRVWtsN/projeto2.jpg",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Daisy UI",
        "React Libraries: React Router DOM, React Form, ZOD, Toastify, React Icons",
      ],
      features: [
        "REST API",
        "Proteção de rotas, autenticação automática",
        "Validação dinâmica de formulários",
        "Design responsivo em todas as resoluções",
      ],
      features_en: [
        "REST API",
        "Route protection, auto-login",
        "Dynamic form validation",
        "Responsive design in all resolutions",
      ],
      project_url: "https://dev-hub-marcelino-gutierrez-lyart.vercel.app/",
      repositories: [
        "https://github.com/Kenzie-Academy-Brasil-Developers/dev-hub_marcelino-gutierrez",
      ],
    },
    {
      id: 6,
      name: "FrameDraw Player",
      description:
        "FrameDraw Player é uma plataforma web que capacita os usuários a fazer upload de vídeos locais, criar polígonos sobre eles e extrair seus vértices, tudo com o objetivo de definir áreas de interesse de maneira precisa e eficiente.",
      description_en:
        "FrameDraw Player is a web platform that enables users to upload local videos, draw polygons on them, and extract their vertices, all with the purpose of accurately and efficiently determining areas of interest.",
      image: "https://img.freepik.com/vetores-gratis/design-de-maquete-de-modelo-de-player-de-video-preto_1017-36895.jpg?size=626&ext=jpg",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Daisy UI",
      ],
      features: [
        "Validação dinâmica de formulários",
        "Design responsivo em todas as resoluções",
      ],
      features_en: [
        "Dynamic form validation",
        "Responsive design in all resolutions",
      ],
      project_url: "https://frame-draw-player.vercel.app/",
      repositories: [
        "https://github.com/guchierrezzz/frame-draw-player",
      ],
    },
    
  ];

  return (
    <>
      <ProjectContext.Provider
        value={{
          projects,
          setProjects,
        }}
      >
        {children}
      </ProjectContext.Provider>
    </>
  );
};
