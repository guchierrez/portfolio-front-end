import { useState, useEffect, useContext } from "react";
import { PageTitle } from "../components/PageTitle";
import { MainContext } from "../provider/MainContext";
import { StackCard } from "../components/StackCard";

export const Stack = () => {
  const { translation, stacks } = useContext(MainContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`${
        loading
          ? "opacity-0 translate-y-3 select-none "
          : "transition-all duration-1000"
      } mx-auto w-5/6 flex flex-col gap-12 py-10`}
    >
      <PageTitle title={translation ? "Tecnologias" : "Technologies"} />
      <main>
        <div className="flex flex-wrap justify-center gap-5 mx-auto sm:gap-10">
          {stacks.map((stack) => (
            <StackCard
              key={crypto.randomUUID()}
              Icon={stack.Icon}
              name={stack.name}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
