import { useContext } from "react";
import { ITechCardProps } from "../interface";
import { motion } from "framer-motion";
import { MainContext } from "../provider/MainContext";

export const TechCard = ({
  Icon,
  name,
  years_oe,
  months_oe,
}: ITechCardProps) => {
  const { translation } = useContext(MainContext);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="w-full p-8 transition-transform duration-500 shadow bg-base-200/50 lg:w-96"
    >
      <div className="flex items-center gap-3">
        <Icon className="text-5xl fill-primary" />
        <h2 className="w-2/3 text-lg font-marlinge">{name}</h2>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <p className="font-thin text-white/70">
          {translation
            ? `${years_oe} anos e ${months_oe} mêses de experiência`
            : `${years_oe} years and ${months_oe} months of experience`}
        </p>
      </div>
    </motion.div>
  );
};
