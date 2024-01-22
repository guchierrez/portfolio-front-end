import { createContext, useEffect, useState } from "react";
import { IProjectContext, IProjectContextProps, Project } from "../interface";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ProjectContext = createContext({} as IProjectContext);

export const ProjectContextProvider = ({ children }: IProjectContextProps) => {
  useEffect(() => {
    loadProjects();
  }, []);

  const [projects, setProjects] = useState<Array<Project>>([]);

  const loadProjects = async (): Promise<void> => {
    try {
      const { data } = await api.get("/projects");
      await setProjects(data);
    } catch {
      toast.error(
        "There was an error while fetching projects from the database. Refresh the page and try again."
      );
    }
  };
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
