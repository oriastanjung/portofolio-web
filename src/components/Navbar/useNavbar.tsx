import { useState } from "react";
import useThemes from "../../utils/Themes/useThemes"

function useNavbar() {
    const {currentTheme , toggleTheme} = useThemes()

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

    
  return {
    currentTheme, toggleTheme,
    scrollToSection,
    showMenuHandler,
    showMenu
  }
}

export default useNavbar