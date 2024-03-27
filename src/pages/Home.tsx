import { useEffect } from "react";
import { HomeHero } from "../components/HomeHero";
import { ServiceSection } from "../components/ServiceSection";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex flex-col w-5/6 py-10 mx-auto xl:w-2/3">
      <HomeHero />
      <ServiceSection />
    </div>
  );
};
