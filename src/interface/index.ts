import { Dispatch, ElementType, ReactNode } from "react";
import { TContactFormValues } from "../schema/ContactFormSchema";
import { IconType } from "react-icons";

export interface IMainContext {
  NavbarDrawerRef: React.RefObject<HTMLInputElement>;
  NavbarElementRef: React.RefObject<HTMLDivElement>;
  toggleDrawer: () => void;
  sendEmail: (formData: TContactFormValues) => Promise<void>;
  translation: boolean;
  setTranslation: Dispatch<React.SetStateAction<boolean>>;
}

export interface IMainContextProps {
  children: ReactNode;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  description_en: string;
  image: string;
  technologies: string[];
  features: string[];
  features_en: string[];
  project_url: string;
  repositories: string[];
}

export interface IProjectContext {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export interface IProjectContextProps {
  children: ReactNode;
}

export interface IProjectCardButtonsProps {
  liveDemo: string;
  repositories: string[];
  translation: boolean;
}

export interface IProjectCardProps {
  title: string;
  imgSource: string;
  description: string;
  reverse: boolean;
  technologies: string[];
  features: string[];
  liveDemo: string;
  repositories: string[];
}

export interface Service {
  id: number;
  Icon: IconType;
  name: string;
  name_en: string;
  description: string;
  description_en: string;
}

export interface IServiceContext {
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
}

export interface IServiceContextProps {
  children: ReactNode;
}

export interface IServiceCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

export interface ITechnologyContext {
  technologies: Technology[];
  setTechnologies: React.Dispatch<React.SetStateAction<Technology[]>>;
}

export interface ITechnologyContextProps {
  children: ReactNode;
}

export interface Technology {
  id: number;
  Icon: ElementType;
  name: string;
  years_oe: number;
  months_oe: number;
}

export interface ITechCardProps {
  Icon: ElementType;
  name: string;
  years_oe: number;
  months_oe: number;
}

export interface IAccordionGroup {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  translation: boolean;
}

export interface IPageTitleProps {
  title: string;
}

export interface IFooterIcons {
  children: ReactNode;
  link: string;
}

export interface IAccordionProps {
  title: string;
  children: ReactNode;
  project: string;
}
