import ChevronDown from "../../assets/iconsSvg/ChevronDown";

interface ButtonArrowDownProps {
  title: String;
  to: String;
}
function ButtonArrowDown(props: ButtonArrowDownProps) {
  return (
    <a
      className="hover:-mt-2 hover:duration-300 hover:ease-in-out text-xl font-medium flex flex-col items-center justify-center"
      href={`${props.to}`}
    >
      {props.title}
      <ChevronDown className="w-12 text-white" />
    </a>
  );
}

export default ButtonArrowDown;
