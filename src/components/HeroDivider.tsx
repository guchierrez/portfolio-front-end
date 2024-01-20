import { ReactNode } from "react";

interface IHeroDividerProps {
  children: ReactNode;
}

export const HeroDivider = ({ children }: IHeroDividerProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
