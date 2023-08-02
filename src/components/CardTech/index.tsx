import { ReactNode } from "react";

interface IFCardTechProps {
  children?: ReactNode;
  className?: string;
  title?: string;
}

function CardTech(props: IFCardTechProps) {
  return (
    <div className="w-full md:w-auto md:h-full hover:border-customGreen hover:duration-300 bg-bgWhite backdrop-blur-[0.5px] bg-opacity-[8%] border-[1px] border-bgWhite rounded-2xl py-5 px-20 flex flex-col items-center">
      <h6 className="text-lg md:text-xl font-medium mb-8">{props.title}</h6>
      {props.children}
    </div>
  );
}

export default CardTech;
