import { useContext } from "react";
import { MainContext } from "../provider/MainContext";
import { motion } from "framer-motion";

export const HomeTitle = () => {
  const { translation } = useContext(MainContext);

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={item} className="flex flex-col gap-2">
      <motion.span
        variants={item}
        className="uppercase font-marlinge text-primary"
      >
        {translation
          ? "Desenvolvedor Web Full Stack"
          : "Full Stack Web Developer"}
      </motion.span>
      <motion.h1 variants={item} className="text-3xl font-bold">
        {translation ? "Bem vindo ao meu portfólio" : "Welcome to my portfolio"}
      </motion.h1>
    </motion.div>
  );
};
