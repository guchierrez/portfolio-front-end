import { useState, useEffect, useContext } from "react";
import { PageTitle } from "../components/PageTitle";
import { ProjectCard } from "../components/ProjectCard";
import { MainContext } from "../provider/MainContext";
import { ProjectContext } from "../provider/ProjectContext";
import { LoadingProjects } from "../components/LoadingProjects";

export const Projects = () => {
  const { translation } = useContext(MainContext);
  const { projects } = useContext(ProjectContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        loading
          ? "opacity-0 translate-y-3 select-none "
          : "transition-all duration-1000"
      } mx-auto w-5/6 flex flex-col gap-12 py-10`}
    >
      <PageTitle title={translation ? "Projetos" : "Projects"} />
      <main>
        <div className="flex flex-col gap-20">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                imgSource={project.image}
                title={project.name}
                description={
                  translation ? project.description : project.description_en
                }
                reverse={project.id % 2 != 0}
                technologies={project.technologies}
                features={translation ? project.features : project.features_en}
                liveDemo={project.project_url}
                repo={project.repository_url}
              />
            ))
          ) : (
            <LoadingProjects />
          )}
        </div>
      </main>
    </div>
  );
};
