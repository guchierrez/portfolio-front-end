import Lottie from "lottie-react";
import Coding from "../assets/animations/Coding.json";
import { SiWhatsapp } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FooterIcon } from "../components/FooterIcon";
import { ContactForm } from "../components/ContactForm";
import { useState, useEffect, useContext } from "react";
import { MainContext } from "../provider/MainContext";
import { ReturnButton } from "../components/ReturnButton";

export function Contact() {
  const { translation } = useContext(MainContext);

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
        loading ? "opacity-0 select-none " : "transition-all duration-300"
      } min-h-screen grid md:grid-cols-2 grid-cols-1 bg-[#1c1c1c] rounded-sm w-full relative`}
    >
      <div className="relative flex flex-col h-screen bg-primary">
        <Lottie
          className="absolute w-full -translate-y-1/2 top-1/2 right-2/3 translate-x-2/3 sm:w-1/2"
          animationData={Coding}
        ></Lottie>
        <h3 className="absolute text-lg tracking-widest text-center uppercase translate-x-1/2 select-none  text-primary-content bottom-10 right-1/2">
          {translation
            ? "Entre em contato! Vamos expandir o seu negócio juntos."
            : "Get in touch! Let's expand your business together."}
        </h3>
      </div>

      <div className="relative flex justify-center w-5/6 h-screen m-auto">
        <ReturnButton />
        <ul className="absolute flex gap-4 translate-x-1/2 bottom-20 md:bottom-10 right-1/2">
          <FooterIcon link="https://wa.me/5541991012722">
            <SiWhatsapp className="text-2xl" />
          </FooterIcon>
          <FooterIcon link="https://www.linkedin.com/in/guchierrez/">
            <SiLinkedin className="text-2xl" />
          </FooterIcon>
          <FooterIcon link="https://github.com/guchierrez">
            <SiGithub className="text-2xl" />
          </FooterIcon>
        </ul>
        <ContactForm />
      </div>
    </div>
  );
}
