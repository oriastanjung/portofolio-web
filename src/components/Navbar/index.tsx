import NavTitle from "../NavTitle";
import moonSvg from "../../assets/iconsSvg/moon.svg";
import sunSvg from "../../assets/iconsSvg/sun.svg";
import Menu from "../../assets/iconsSvg/Menu";
import Close from "../../assets/iconsSvg/Close";
import {Fade} from "react-awesome-reveal"
import useNavbar from "./useNavbar";
function Navbar() {
  const {showMenuHandler, showMenu, scrollToSection, toggleTheme, currentTheme} = useNavbar()
  return (
    <header  className={`sticky border-b-2 ${currentTheme === "dark" ? "bg-bgBlack text-white border-b-bgWhite" : "bg-bgWhite text-black border-b-bgBlack" } top-0 z-50  py-3  w-full`}>
      <Fade>
      <nav className="container mx-auto md:px-0 flex  justify-between items-center">
        <NavTitle theme={currentTheme}/>
        <button className="px-5 md:px-0" onClick={showMenuHandler}>
          <Menu className={`block md:hidden cursor-pointer  w-8`} />
        </button>
        <ul className="hidden md:flex gap-11  items-center">
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer font-semibold hover:text-customGreen"
          >
            ABOUT
          </li>
          <li
            onClick={() => scrollToSection("experience")}
            className="cursor-pointer font-semibold hover:text-customGreen"
          >
            EXPERIENCE
          </li>
          <li
            onClick={() => scrollToSection("portofolio")}
            className="cursor-pointer font-semibold hover:text-customGreen"
          >
            PORTOFOLIO
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer font-semibold hover:text-customGreen"
          >
            CONTACT
          </li>
          <li onClick={toggleTheme} className={`cursor-pointer font-semibold p-2 rounded-full ${currentTheme === "dark" ? "hover:bg-gray-800" : "hover:bg-slate-200"}`}>
            <img className="w-5" src={currentTheme === "dark" ? moonSvg : sunSvg} alt="moon" />
          </li>
        </ul>
        {showMenu && (
          <ul className={` md:hidden h-screen flex justify-center items-center gap-16 flex-col fixed top-0 z-100 ${currentTheme === "dark" ? "bg-bgBlack" : "bg-bgWhite"} w-full`}>
            <li className="flex items-center justify-end px-5 w-full">
              <button onClick={showMenuHandler}>
                <Close className="w-8 " />
              </button>
            </li>
            <li className="flex items-center justify-center w-full">
              <div className="flex flex-col items-center">
                <NavTitle theme={currentTheme}/>
                <h1 className="font-bold">ORIASTANJUNG</h1>
              </div>
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer font-normal hover:text-customGreen"
            >
              ABOUT
            </li>
            <li
              onClick={() => scrollToSection("experience")}
              className="cursor-pointer font-normal hover:text-customGreen"
            >
              EXPERIENCE
            </li>
            <li
              onClick={() => scrollToSection("portofolio")}
              className="cursor-pointer font-normal hover:text-customGreen"
            >
              PORTOFOLIO
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer font-normal hover:text-customGreen"
            >
              CONTACT
            </li>
            <li onClick={toggleTheme} className="cursor-pointer font-normal p-2 rounded-full ">
              <img className="w-5" src={currentTheme === "dark" ? moonSvg : sunSvg} alt="moon" />
            </li>
          </ul>
        )}
      </nav>
      </Fade>
    </header>
  );
}

export default Navbar;
