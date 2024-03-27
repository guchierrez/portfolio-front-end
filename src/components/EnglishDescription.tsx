import { motion } from "framer-motion";

export const EnglishDescription = () => {
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
      <strong className="font-semibold">Marcelino Gutiérrez</strong>, an
      <strong className="font-semibold"> Information Systems</strong> Bachelor
      from
      <strong className="font-semibold"> UTFPR</strong>. With expertise in
      <strong className="font-semibold"> JavaScript</strong>,
      <strong className="font-semibold"> Java</strong> and
      <strong className="font-semibold"> Python</strong>, I specialize in
      building high-performing full-stack web applications.
    </motion.p>
  );
};
