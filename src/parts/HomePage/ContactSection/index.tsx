import { Link } from "react-router-dom";
import Github from "../../../assets/iconsSvg/Github";
import Instagram from "../../../assets/iconsSvg/Instagram";
import Linkedin from "../../../assets/iconsSvg/Linkedin";
import ChevronDown from "../../../assets/iconsSvg/ChevronDown";
import useThemes from "../../../utils/Themes/useThemes";
import { Fade } from "react-awesome-reveal";
function ContactSection() {
  const { currentTheme } = useThemes();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section
        id="contact"
        className={`mt-16 md:mt-64 pb-24  ${
          currentTheme === "dark"
            ? "bg-bgBlack text-white"
            : "bg-bgWhite text-black"
        } flex flex-col`}
      >
        <div className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-8 md:gap-10">
          <Fade delay={100} triggerOnce>
            <h3 className="font-semibold text-xl md:text-2xl">
              What’s Next ?{" "}
            </h3>
          </Fade>
          <p className="text-base md:text-xl font-light md:font-normal md:w-2/4">
            <Fade delay={3000} triggerOnce>
              I’m currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I’ll try my best to get back to you!
            </Fade>
          </p>
          <div className="mt-8 md:mt-0 md:fixed left-0 bottom-0 px-16 flex md:flex-col gap-4 items-center justify-center">
            <div className="flex flex-row md:flex-col justify-center items-center gap-8">
              <Link className="" to={"https://www.linkedin.com/in/oriastanjung/"} target="_blank">
                <Linkedin className={`w-6 md:w-10 hover:text-customGreen ${currentTheme === "dark" ? "text-white" : "text-black"}`} />
              </Link>
              <Link className="" to={"https://github.com/oriastanjung"} target="_blank">
                <Github className={`w-6 md:w-10 hover:text-customGreen ${currentTheme === "dark" ? "text-white" : "text-black"}`} />
              </Link>
              <Link className="" to={"https://www.instagram.com/o.rias_/"} target="_blank">
                <Instagram className={`w-6 md:w-10 hover:text-customGreen ${currentTheme === "dark" ? "text-white" : "text-black"}`} />
              </Link>
            </div>
            <div className={`hidden md:block mx-8 h-[200px] border-l-4 ${currentTheme === "dark" ? "border-white" : "border-black"}`}>
              {" "}
            </div>
          </div>
          <Link
            to={"mailto:oriastan999@gmail.com"}
            className={`mt-8 md:mt-24 text-base font-bold ${
              currentTheme === "dark"
                ? "bg-bgBlack text-white border-white"
                : "bg-bgWhite text-black border-black"
            } rounded-2xl px-4 py-2 hover:border-2 transform transition-transform duration-500 hover:scale-105 border-b-2 border-white`}
          >
            <Fade delay={3500} triggerOnce>Say Hello</Fade>
          </Link>
        </div>
      </section>
      <button
        onClick={scrollToTop}
        className="fixed rounded-full p-2 md:p-3 bg-customGreen bottom-10 right-5 md:right-10 text-white transform rotate-180"
      >
        <ChevronDown className="md:w-6 w-3 md:h-6 h-3" />
      </button>
    </>
  );
}

export default ContactSection;
