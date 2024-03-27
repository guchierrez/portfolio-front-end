import Lottie from "lottie-react";
import { MainContext } from "../provider/MainContext";
import { useContext } from "react";
import Coding from "../assets/animations/Coding.json";
export const ContactArt = () => {
  const { translation } = useContext(MainContext);
  return (
    <div className="relative flex flex-col h-screen bg-primary">
      <Lottie
        className="absolute w-full -translate-y-1/2 top-1/2 right-2/3 translate-x-2/3 sm:w-1/2"
        animationData={Coding}
      ></Lottie>
      <h3 className="absolute text-lg tracking-widest text-center uppercase translate-x-1/2 select-none text-primary-content bottom-10 right-1/2">
        {translation
          ? "Entre em contato! Vamos expandir o seu negócio juntos"
          : "Get in touch! Let's expand your business together"}
      </h3>
    </div>
  );
};
