import { useState, useEffect, useContext } from "react";
import { HeroDivider } from "../components/HeroDivider";
import { Link } from "react-router-dom";
import { MainContext } from "../provider/MainContext";
import { ServiceSection } from "../components/ServiceSection";

export const Home = () => {
  const { translation } = useContext(MainContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);

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
      } mx-auto xl:w-2/3 w-5/6 flex flex-col gap-20 py-10`}
    >
      <main className="grid items-center gap-10 translate-y-3 md:grid-cols-2">
        <div className="flex flex-col gap-4 ">
          <HeroDivider>
            <span className="uppercase font-marlinge text-primary">
              {translation
                ? "Desenvolvedor Web Fullstack"
                : "Fullstack Web Developer"}
            </span>
            <h1 className="text-3xl font-bold">
              {translation
                ? "Bem vindo ao meu portfólio"
                : "Welcome to my portfolio"}
            </h1>
          </HeroDivider>
          <HeroDivider>
            <p className="py-4 font-thin leading-7 xl:text-lg text-white/70">
              {translation
                ? "Conectando pessoas por meio do código, criando experiências web cativantes e evoluindo no mundo do desenvolvimento web."
                : "Bridging people through code, crafting captivating web experiences while leveling up in the world of web development."}
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="tracking-widest transition-all duration-300 rounded-none btn btn-primary w-fit"
              >
                {translation ? "Contato" : "Contact"}
              </Link>
              <a
                target="_blank"
                href={
                  translation
                    ? "https://drive.google.com/file/d/1GaO3vxTRBT2-ROKLYQRjXUyRdLHm3K27/view?usp=sharing"
                    : "https://drive.google.com/file/d/1t3fzR-pV0FMBRi1BzNYaFHZdF7k5k9M2/view?usp=sharing"
                }
                className="inline-flex tracking-widest transition-all duration-300 rounded-none btn btn-outline w-fit"
              >
                {translation ? "Currículo" : "Resumee"}
              </a>
            </div>
          </HeroDivider>
        </div>
        <div className="relative mx-auto">
          <div className="overflow-hidden rounded-full">
            <img
              className="transition-all duration-1000 hover:scale-110 w-96"
              src="https://i.ibb.co/GpMbgKz/IMG-0165.jpg"
            />
          </div>
          <span className="absolute p-2 text-xl transition-all duration-1000 shadow-lg -bottom-3 font-marlinge bg-primary px-14 sm:p-4 text-primary-content sm:text-3xl">
            Marcelino
          </span>
        </div>
      </main>
        <ServiceSection />
    </div>
  );
};
