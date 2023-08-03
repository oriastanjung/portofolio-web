import { MouseEventHandler, ReactNode } from "react";
import ChevronRight from "../../assets/iconsSvg/ChveronRight";

interface IFButtonWithArrowProps {
  children: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>
}
function ButtonWithArrow(props: IFButtonWithArrowProps) {
  return (
    <button onClick={props.onClick} className="flex items-center justify-center border-[1px] text-sm md:text-base font-bold text-center border-white bg-customGreen md:px-4 px-2 md:py-2 py-2 rounded-xl hover:bg-customDarkGreen hover:duration-300 hover:ease-in-out">
      {props.children}
      <ChevronRight strokeWidth="4" className="w-5 h-5  md:w-7 md:h-7 text-white"/>
    </button>
  );
}

export default ButtonWithArrow;
