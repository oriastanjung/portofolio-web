import heroImgDark from "../../../assets/orias-about.png";
import heroImgLight from "../../../assets/orias-about-light.png";
import ButtonArrowDown from "../../../components/ButtonArrowDown";
import useThemes from "../../../utils/Themes/useThemes";
import { Slide, Fade } from "react-awesome-reveal";
function HeroSection() {
  const { currentTheme } = useThemes();
  return (
    <section
      id="about"
      className={`mt-12 md:mt-28 ${
        currentTheme === "dark"
          ? "bg-bgBlack text-white"
          : "bg-bgWhite text-black"
      } flex flex-col`}
    >
      <div className="container mx-auto px-10 flex flex-wrap items-center justify-between gap-10">
        <Fade delay={1000} triggerOnce>
          <img
            className="w-[27rem]"
            src={currentTheme === "dark" ? heroImgDark : heroImgLight}
            alt="orias-about"
          />
        </Fade>
        <Fade delay={2000} triggerOnce direction="right">
          <div className="flex flex-col gap-5 md:gap-8 items-center">
            <h2 className="text-xl md:text-6xl font-bold">O. RIASTANJUNG</h2>
            <h3 className="text-lg md:text-5xl font-medium">
              FULLSTACK DEVELOPER
            </h3>
            <p className=" text-md md:text-2xl font-medium italic md:w-3/5 text-center">
              "Challenges are mere illusions until shattered by determination."
            </p>
          </div>
        </Fade>
      </div>
      <Slide triggerOnce direction="up" delay={2500}>
        <div className="mt-24 md:mt-48 flex justify-center items-center">
          <ButtonArrowDown title={"See More"} to={"/#about-me"} />
        </div>
      </Slide>
    </section>
  );
}

export default HeroSection;
