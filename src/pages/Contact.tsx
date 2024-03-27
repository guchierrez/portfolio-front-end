import { useEffect } from "react";
import { ContactArt } from "../components/ContactArt";
import { ContactSection } from "../components/ContactSection";
import { motion } from "framer-motion";

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen grid md:grid-cols-2 grid-cols-1 bg-[#1c1c1c] rounded-sm w-full relative"
    >
      <ContactArt />
      <ContactSection />
    </motion.main>
  );
}
