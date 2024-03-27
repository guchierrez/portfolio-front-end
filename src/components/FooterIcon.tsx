import { IFooterIcons } from "../interface";

export function FooterIcon({ children, link }: IFooterIcons) {
  return (
    <li className="transition-all duration-300 border-none rounded-full hover:opacity-50 text-primary">
      <a href={link} target="_blank">
        {children}
      </a>
    </li>
  );
}
