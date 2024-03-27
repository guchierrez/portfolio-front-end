import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../provider/MainContext";
import { motion } from "framer-motion";

export const HomeButtons = () => {
  const { translation } = useContext(MainContext);

  const item = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className="flex gap-4">
      <motion.div variants={item}>
        <Link
          to="/contact"
          className="tracking-widest transition-all duration-300 rounded-none btn btn-primary w-fit"
        >
          {translation ? "Contato" : "Contact"}
        </Link>
      </motion.div>
      <motion.a
        variants={item}
        target="_blank"
        href={
          translation
            ? "https://drive.google.com/file/d/1GaO3vxTRBT2-ROKLYQRjXUyRdLHm3K27/view?usp=sharing"
            : "https://drive.google.com/file/d/1t3fzR-pV0FMBRi1BzNYaFHZdF7k5k9M2/view?usp=sharing"
        }
        className="inline-flex tracking-widest transition-all duration-300 rounded-none btn btn-outline w-fit"
      >
        {translation ? "Currículo" : "Resumee"}
      </motion.a>
    </div>
  );
};
