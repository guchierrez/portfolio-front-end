import { useContext } from "react";
import { HomeButtons } from "./HomeButtons";
import { MainContext } from "../provider/MainContext";
import { PortugueseDescription } from "./PortugueseDescription";
import { EnglishDescription } from "./EnglishDescription";

export const HomeDescription = () => {
  const { translation } = useContext(MainContext);

  return (
    <div className="flex flex-col gap-2">
      {translation ? <PortugueseDescription /> : <EnglishDescription />}
      <HomeButtons />
    </div>
  );
};
