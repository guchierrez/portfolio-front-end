import { IAccordionProps } from "../interface";
import { useState } from 'react';

export const Accordion = ({ children, title, project }: IAccordionProps) => {
    const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="collapse collapse-arrow md:justify-start join-item">
      <input
        defaultChecked={isChecked}
        onChange={()=> setIsChecked(state => !state)}
        type="checkbox"
        name={`my-accordion-${project}`}
      />
      <div className={`${isChecked ? "text-primary" : ""} text-lg  font-medium tracking-widest uppercase collapse-title md:w-fit`}>
        {title}
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};
