import NavTitle from "../NavTitle";
import moonSvg from "../../assets/iconsSvg/moon.svg";
import Menu from "../../assets/iconsSvg/Menu";
import { useState } from "react";
import Close from "../../assets/iconsSvg/Close";

function Navbar() {
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="sticky border-b-2 border-b-bgWhite top-0 z-50 bg-bgBlack w-full text-white py-3 ">
      <nav className="container mx-auto md:px-0 flex  justify-between items-center">
        <NavTitle />
        <button className="px-5 md:px-0" onClick={showMenuHandler}>
          <Menu className="block md:hidden cursor-pointer text-white w-8" />
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
          <li className="cursor-pointer font-semibold p-2 rounded-full hover:bg-gray-800">
            <img className="w-5" src={moonSvg} alt="moon" />
          </li>
        </ul>
        {showMenu && (
          <ul className=" md:hidden h-screen flex justify-center items-center gap-16 flex-col fixed top-0 z-100 bg-bgBlack w-full">
            <li className="flex items-center justify-end px-5 w-full">
              <button onClick={showMenuHandler}>
                <Close className="w-8 text-white" />
              </button>
            </li>
            <li className="flex items-center justify-center w-full">
              <div className="flex flex-col items-center">
                <NavTitle />
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
            <li className="cursor-pointer font-normal p-2 rounded-full hover:bg-gray-800">
              <img className="w-5" src={moonSvg} alt="moon" />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
