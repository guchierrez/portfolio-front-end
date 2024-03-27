import { IProjectCardButtonsProps } from "../interface";

export const ProjectCardButtons = ({
  liveDemo,
  repositories,
  translation,
}: IProjectCardButtonsProps) => {
  return (
    <div className="flex gap-5 my-4">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="rounded-none btn btn-primary"
        >
          {translation ? "Ver código" : "See code"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-200 w-52"
        >
          <li className="tracking-widest uppercase">
            <a target="_blank" href={repositories[0]}>
              Front end
            </a>
          </li>
          <li
            className={`tracking-widest uppercase ${
              repositories[1] ? "" : "hidden"
            }`}
          >
            <a target="_blank" href={repositories[1] ? repositories[1] : "#"}>
              Back end
            </a>
          </li>
        </ul>
      </div>

      <a
        className="tracking-widest rounded-none btn btn-outline"
        target="_blank"
        href={liveDemo}
      >
        {translation ? "Ao vivo" : "Live demo"}
      </a>
    </div>
  );
};
