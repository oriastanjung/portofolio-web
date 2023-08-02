import logoDarkTheme from "../../assets/logo-darktheme.png";
import { useNavigate } from "react-router-dom";

function NavTitle() {
  const navigation = useNavigate();
  return (
    <h1
      onClick={() => navigation("/")}
      className="flex gap-4 cursor-pointer items-center font-bold text-2xl"
    >
      <img className="w-10" src={logoDarkTheme} alt="logo-oriastanjung" />
      O. RIASTANJUNG
    </h1>
  );
}

export default NavTitle;
