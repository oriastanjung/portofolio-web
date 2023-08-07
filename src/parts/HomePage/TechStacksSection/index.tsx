// import ButtonWithArrow from "../../../components/ButtonWithArrow";
import ButtonArrowDown from "../../../components/ButtonArrowDown";
import CardTech from "../../../components/CardTech";
import TechStack from "../../../components/TechStack";
import useStacks from "../../../utils/Stacks";
import useThemes from "../../../utils/Themes/useThemes";
import { Fade } from "react-awesome-reveal";
function TechStacksSection() {
  const { backend, frontend, database } = useStacks();
  const { currentTheme } = useThemes();
  return (
    <section
      className={`mt-36 md:mt-48  ${
        currentTheme === "dark"
          ? "bg-bgBlack text-white"
          : "bg-bgWhite text-black"
      } flex flex-col`}
    >
      <div className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-8 md:gap-20">
        <Fade delay={1900} triggerOnce>
          <h4 className="text-xl md:text-2xl font-semibold">Tech Stacks</h4>
        </Fade>
        <div className="flex flex-row flex-wrap gap-8 md:gap-11 ">
          <Fade triggerOnce delay={2000} direction="left">
            <CardTech title="Frontend">
              <ul className="flex flex-col gap-5 items-start">
                {frontend.map((item, idx) => {
                  return (
                    <TechStack key={idx} title={item.title} img={item.img} />
                  );
                })}
              </ul>
            </CardTech>
          </Fade>
          <Fade className="w-full md:w-auto md:h-full h-auto" triggerOnce delay={2500} direction="up">
            <CardTech title="Backend">
              <ul className="flex flex-col gap-5 items-start">
                {backend.map((item, idx) => {
                  return (
                    <TechStack key={idx} title={item.title} img={item.img} />
                  );
                })}
              </ul>
            </CardTech>
          </Fade>
          <Fade className="w-full md:w-auto md:h-full h-auto" triggerOnce delay={3000} direction="right">
            <CardTech title="Database">
              <ul className="flex flex-col gap-5 items-start">
                {database.map((item, idx) => {
                  return (
                    <TechStack key={idx} title={item.title} img={item.img} />
                  );
                })}
              </ul>
            </CardTech>
          </Fade>
        </div>
      </div>
      <Fade delay={1200} triggerOnce direction="up">
        <div className="mt-12">
          <ButtonArrowDown title={"Experience"} to={"#experience"} />
        </div>
      </Fade>
    </section>
  );
}

export default TechStacksSection;
