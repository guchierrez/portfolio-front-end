import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FooterIcon } from "./FooterIcon";
import { motion } from "framer-motion";

export const ContactFooter = () => {
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.ul
      variants={item}
      className="absolute flex gap-10 translate-x-1/2 bottom-20 md:bottom-10 right-1/2"
    >
      <FooterIcon link="https://wa.me/5541991012722">
        <SiWhatsapp className="text-2xl" />
      </FooterIcon>
      <FooterIcon link="https://www.linkedin.com/in/guchierrez/">
        <SiLinkedin className="text-2xl" />
      </FooterIcon>
      <FooterIcon link="https://github.com/guchierrez">
        <SiGithub className="text-2xl" />
      </FooterIcon>
    </motion.ul>
  );
};
