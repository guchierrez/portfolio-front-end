import { useContext } from "react";
import { PageTitle } from "../components/PageTitle";
import { MainContext } from "../provider/MainContext";
import { TechCard } from "../components/TechCard";
import { motion } from "framer-motion";
import { TechnologyContext } from "../provider/TechnologiesContext";

export const Technologies = () => {
  const { translation } = useContext(MainContext);
  const { technologies } = useContext(TechnologyContext);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.main
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col w-5/6 gap-12 py-10 mx-auto xl:w-2/3"
    >
      <PageTitle title={translation ? "Tecnologias" : "Technologies"} />
      <div className="flex flex-wrap gap-5 mx-auto sm:gap-10">
        {technologies.map(({ Icon, months_oe, name, years_oe, id }) => (
          <TechCard
            key={id}
            Icon={Icon}
            name={name}
            years_oe={years_oe}
            months_oe={months_oe}
          />
        ))}
      </div>
    </motion.main>
  );
};
