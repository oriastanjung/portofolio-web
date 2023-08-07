import useThemes from "../../utils/Themes/useThemes";

function Footer() {
  const { currentTheme } = useThemes();
  return (
    <footer
      className={`flex ${currentTheme === "dark" ? "text-white" : "text-black"} p-4 text-center md:p-8 text-xs md:text-base font-medium justify-center items-center`}
    >
      Copyright©2023 | Designed and built by O. Riastanjung
    </footer>
  );
}

export default Footer;
