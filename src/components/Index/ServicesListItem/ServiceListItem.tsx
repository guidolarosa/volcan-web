import { useState } from "react";

const ServiceListItem = (props: any) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="border-b flex flex-col" >
      <div className="toggle flex justify-between h-20 md:h-24 items-center cursor-pointer" onClick={toggleIsOpen}>
        <strong className="text-2xl md:text-4xl font-light">{props.title}</strong>
        <Toggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={`body overflow-y-hidden max-h-0 transition-all ${isOpen ? 'max-h-[300px]' : ''}`}>
        <div className="flex gap-4 md:gap-10 mb-4 flex-wrap">
          {props.tags.map((tag: string, index: number) => (
            <div key={tag} className="border rounded-full py-1 px-4 whitespace-nowrap">
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

  return (
    <div className="toggle relative h-8 w-8">
      <div className={`h-[1px] w-full bg-white absolute top-[50%]`} />
      <div className={`h-[1px] w-full bg-white absolute top-[50%] transition-transform ${!props.isOpen ? 'rotate-90' : ''}`} />
    </div>
  );
};

export default ServiceListItem;
