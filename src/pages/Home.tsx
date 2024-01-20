import { useState, useEffect, useContext } from "react";
import { HeroDivider } from "../components/HeroDivider";
import { Link } from "react-router-dom";
import { MainContext } from "../provider/MainContext";

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
      } mx-auto w-5/6 flex flex-col gap-12 py-10`}
    >
      <main className="grid items-center gap-10 translate-y-3 md:grid-cols-2">
        <div className="flex flex-col gap-4 ">
          <HeroDivider>
            <span className="uppercase font-marlinge text-primary">
              {translation
                ? "Desenvolvedor Web Fullstack"
                : "Fullstack Web Developer"}
            </span>
            <h1 className="text-5xl font-bold">
              {translation
                ? "Bem vindo ao meu portfólio"
                : "Welcome to my portfolio"}
            </h1>
          </HeroDivider>
          <HeroDivider>
            <p className="py-4 font-thin leading-7 text-white/70">
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
          <span className="absolute bottom-0 p-2 text-xl font-bold transition-all duration-1000 shadow-lg font-marlinge bg-primary px-14 sm:p-4 text-primary-content sm:text-3xl">
            Marcelino
          </span>
        </div>
      </main>
      <section className="grid grid-cols-1 col-span-2 gap-3 md:grid-cols-7 md:gap-10">
        <h2 className="text-5xl font-bold md:col-span-2">
          {translation ? "Sobre mim" : "About me"}
        </h2>
        <>
          {translation ? (
            <span className="py-4 font-thin leading-7 tracking-wide md:col-span-5 md:py-0 text-white/70">
              Olá! Me chamo{" "}
              <strong className="font-bold">Marcelino Gutierrez</strong>, possuo
              conhecimentos em{" "}
              <strong className="font-bold"> JavaScript, Java, Python</strong> e
              tecnologias avançadas para o front-end como
              <strong className="font-bold">
                {" "}
                Angular, React.js e Tailwind CSS.
              </strong>{" "}
              Também estou familiarizado com frameworks de back-end como o
              <strong className="font-bold">
                {" "}
                Node.js, Django, Spring Boot{" "}
              </strong>{" "}
              e a gestão de bancos de dados utilizando{" "}
              <strong className="font-bold"> PostgreSQL.</strong> Minha
              experiência inclui projetos individuais e em equipe, demonstrando
              minha capacidade de criar soluções inovadoras. Além disso, confio
              na minha aprendizagem autodirigida, que me mantém em constante
              aprimoramento. Vamos nos conectar e discutir como podemos
              contribuir para o seu time.
            </span>
          ) : (
            <span className="py-4 font-thin leading-7 tracking-wide md:col-span-5 md:py-0 text-white/70">
              Hello! I am{" "}
              <strong className="font-bold">Marcelino Gutierrez</strong>, a web
              developer based in Brazil. I'm skilled in
              <strong className="font-bold"> JavaScript, Java, Python </strong>
              and the latest front-end tech like
              <strong className="font-bold">
                {" "}
                Angular, React.js and Tailwind CSS.
              </strong>{" "}
              I'm also familiar with back-end frameworks like
              <strong className="font-bold">
                {" "}
                Node.js, Django, Spring Boot{" "}
              </strong>{" "}
              and database management using
              <strong className="font-bold"> PostgreSQL.</strong> My experience
              includes solo and team projects, showcasing my ability to create
              innovative coding solutions. Plus, I'm confident in my
              self-directed learning, which keeps me growing and improving
              constantly. Let's connect and discuss how I can bring my skills to
              benefit your team.
            </span>
          )}
        </>
      </section>
    </div>
  );
};
