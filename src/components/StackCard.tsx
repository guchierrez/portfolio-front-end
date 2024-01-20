import Tilt from "react-parallax-tilt";

import { IStackCardProps } from "../interface";

export const StackCard = ({ Icon, name }: IStackCardProps) => {
  return (
    <Tilt>
      <div className="tracking-widest tooltip tooltip-primary" data-tip={name}>
        <div className="flex flex-col items-center justify-center gap-3 p-5 transition-all duration-300 border-2 rounded-none border-white/30 hover:bg-primary hover:text-primary-content hover:border-primary">
          <Icon className="w-24 h-24" />
        </div>
      </div>
    </Tilt>
  );
};
