import { ReactNode } from "react";
import useThemes from "../../utils/Themes/useThemes";
interface IFCardTechProps {
  children?: ReactNode;
  className?: string;
  title?: string;
}


function CardTech(props: IFCardTechProps) {
  const {currentTheme} = useThemes()
  return (
    <div className={`w-full md:w-auto md:h-full  hover:duration-300   border-[1px] ${currentTheme === "dark" ? "border-bgWhite backdrop-blur-[0.5px] bg-opacity-[8%] hover:border-customGreen bg-bgWhite" : "border-bgBlack hover:border-customGreen bg-bgBlack text-white"} rounded-2xl py-5 px-20 flex flex-col items-center`}>
      <h6 className="text-lg md:text-xl font-medium mb-8">{props.title}</h6>
      {props.children}
    </div>
  );
}

export default CardTech;
