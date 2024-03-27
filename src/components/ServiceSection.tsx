import { ServiceCard } from "./ServiceCard";
import { MainContext } from "../provider/MainContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ServiceContext } from "../provider/ServiceContext";

export const ServiceSection = () => {
  const { translation } = useContext(MainContext);
  const { services } = useContext(ServiceContext);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const text = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible" variants={container}>
      <motion.h2 variants={text} className="pt-10 pb-8 text-3xl">
        {translation ? "Serviços" : "Services"}
      </motion.h2>
      <div className="grid gap-10 select-none md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-nowrap">
        {services.map(
          ({ description_en, Icon, id, name, name_en, description }) => {
            return (
              <ServiceCard
                key={id}
                Icon={Icon}
                title={translation ? name : name_en}
                description={translation ? description : description_en}
              />
            );
          }
        )}
      </div>
    </motion.div>
  );
};
