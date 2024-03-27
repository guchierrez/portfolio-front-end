import { ContactFooter } from "./ContactFooter";
import { ContactForm } from "./ContactForm";
import { ReturnButton } from "./ReturnButton";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="relative flex justify-center w-5/6 h-screen m-auto"
    >
      <ReturnButton />
      <ContactForm />
      <ContactFooter />
    </motion.section>
  );
};
