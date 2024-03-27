import { motion } from "framer-motion";

export const HomePicture = () => {
  const main = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: "100" },
    },
  };

  return (
    <motion.div variants={main} className="relative mx-auto">
      <div className="overflow-hidden rounded-full">
        <motion.img
          className="transition-all duration-1000 shadow-2xl w-96"
          src="https://i.ibb.co/GpMbgKz/IMG-0165.jpg"
          alt="Marcelino"
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <span className="absolute p-2 text-xl shadow-lg select-none font-marlinge text-primary-content -bottom-3 bg-primary px-14 sm:p-4 sm:text-3xl ">
        Marcelino
      </span>
    </motion.div>
  );
};
