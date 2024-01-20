import { IPageTitleProps } from "../interface";

export const PageTitle = ({ title }: IPageTitleProps) => {
  return (
    <span className="md:text-5xl sm:text-3xl text-xl w-fit font-marlinge text-primary-content bg-primary p-4 uppercase">
      {title}
    </span>
  );
};
