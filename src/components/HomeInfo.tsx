import { HomeDescription } from "./HomeDescription";
import { HomeTitle } from "./HomeTitle";

export const HomeInfo = () => {
  return (
    <div className="flex flex-col gap-4 md:order-first">
      <HomeTitle />
      <HomeDescription />
    </div>
  );
};
