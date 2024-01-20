import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MainContext } from "../provider/MainContext";
import { useContext } from "react";

export const ReturnButton = () => {
  const { translation } = useContext(MainContext);

  return (
    <Link
      to="/"
      className="flex items-center gap-3 span hover:span-hover hover:text-primary uppercase tracking-widest absolute top-[5%] left-0 transition-colors duration-300"
    >
      <BiArrowBack className="text-2xl span-default" />
      {translation ? <span>Voltar</span> : <span>Return</span>}
    </Link>
  );
};
