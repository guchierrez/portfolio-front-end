import { motion } from "framer-motion";

export const PortugueseDescription = () => {
  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.p
      variants={item}
      className="py-4 font-thin leading-7 xl:text-lg text-white/70"
    >
      <strong className="font-semibold">Marcelino Gutiérrez</strong>, bacharel
      em <strong className="font-semibold"> Sistemas de Informação</strong> pela
      <strong className="font-semibold"> UTFPR</strong>. Com experiência em
      <strong className="font-semibold"> JavaScript</strong>,
      <strong className="font-semibold"> Java</strong> e
      <strong className="font-semibold"> Python</strong>, eu me especializo em
      desenvolver aplicações web full-stack.
    </motion.p>
  );
};
