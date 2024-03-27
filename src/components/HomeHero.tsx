import { motion } from "framer-motion";
import { HomeInfo } from "../components/HomeInfo";
import { HomePicture } from "../components/HomePicture";

export const HomeHero = () => {
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

  return (
    <motion.main
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="grid items-center gap-10 pb-10 translate-y-3 md:grid-cols-2"
    >
      <HomePicture />
      <HomeInfo />
    </motion.main>
  );
};
