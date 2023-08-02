import logoDarkTheme from "../../assets/logo-darktheme.png";
import { useNavigate } from "react-router-dom";

function NavTitle() {
  const navigation = useNavigate();
  return (
    <h1
      onClick={() => navigation("/")}
      className="flex px-5 md:px-0 gap-4 cursor-pointer items-center font-bold text-2xl"
    >
      <img className="w-10" src={logoDarkTheme} alt="logo-oriastanjung" />
      <span className="hidden md:block">O. RIASTANJUNG</span>
    </h1>
  );
}

export default NavTitle;
