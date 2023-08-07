import ChevronDown from "../../assets/iconsSvg/ChevronDown";
import useThemes from "../../utils/Themes/useThemes";
interface ButtonArrowDownProps {
  title: String;
  to: String;
}
function ButtonArrowDown(props: ButtonArrowDownProps) {
  const { currentTheme } = useThemes();
  return (
    <a
      className="hover:-mt-2 hover:duration-300 hover:ease-in-out text-md md:text-xl font-medium flex flex-col items-center justify-center"
      href={`${props.to}`}
    >
      {props.title}
      <ChevronDown
        className={`w-8 h-8 md:w-12 md:h-12 ${
          currentTheme === "dark" ? "text-white" : "text-black"
        }`}
      />
    </a>
  );
}

export default ButtonArrowDown;
