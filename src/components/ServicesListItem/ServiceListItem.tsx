import { useState } from "react";

const ServiceListItem = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="border-b flex flex-col">
      <div className="toggle flex justify-between h-24 items-center">
        <strong className="text-4xl font-light">{props.title}</strong>
        <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={`body overflow-y-hidden max-h-0 transition-all ${isOpen ? 'max-h-[300px]' : ''}`}>
        <div className="flex gap-10 mb-4">
          {props.tags.map((tag: string, index: number) => (
            <div key={tag} className="border rounded-full py-1 px-4">
              {tag}
            </div>
          ))}
        </div>
        <p className="mb-8 text-xl font-light">{props.description}</p>
      </div>
    </li>
  );
};

const Toggle = (props: any) => {
  const toggleIsOpen = () => {
    props.setIsOpen(!props.isOpen);
  };

  return (
    <div className="toggle relative h-8 w-8" onClick={toggleIsOpen}>
      <div className={`h-[1px] w-full bg-white absolute top-[50%]`} />
      <div className={`h-[1px] w-full bg-white absolute top-[50%] transition-transform ${!props.isOpen ? 'rotate-90' : ''}`} />
    </div>
  );
};

export default ServiceListItem;
