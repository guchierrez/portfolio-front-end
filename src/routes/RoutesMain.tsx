import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Technologies } from "../pages/Technologies";
import { Contact } from "../pages/Contact";
import { Projects } from "../pages/Projects";
import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MainContext } from "../provider/MainContext";

export const RoutesMain = () => {
  const { NavbarDrawerRef, NavbarElementRef } = useContext(MainContext);
  const location = useLocation();

  useEffect(() => {
    if (NavbarDrawerRef.current) {
      NavbarDrawerRef.current.checked = false;
    }
    NavbarElementRef.current?.classList.toggle(
      "hidden",
      location.pathname === "/contact"
    );
  }, [location]);

  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Navbar>
  );
};
