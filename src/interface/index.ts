import { Dispatch, ElementType, ReactNode } from "react";
import { TContactFormValues } from "../schema/ContactFormSchema";

export interface IStackCardProps {
  Icon: ElementType;
  name: string;
}

export interface IPageTitleProps {
  title: string;
}

export interface IProjectCardProps {
  title: string;
  imgSource: string;
  description: string;
  reverse: boolean;
  technologies: string[];
  features: string[];
  liveDemo: string;
  repo: string;
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

export interface IMainContext {
  NavbarDrawerRef: React.RefObject<HTMLInputElement>;
  NavbarElementRef: React.RefObject<HTMLDivElement>;
  toggleDrawer: () => void;
  sendEmail: (formData: TContactFormValues) => Promise<void>;
  translation: boolean;
  setTranslation: Dispatch<React.SetStateAction<boolean>>;
  stacks: IStackCardProps[];
}

export interface IMainContextProps {
  children: ReactNode;
}
