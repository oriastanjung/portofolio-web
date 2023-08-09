import ButtonWithArrow from "../../../components/ButtonWithArrow";
import CardProject from "../../../components/CardProject";
import useThemes from "../../../utils/Themes/useThemes";
import { Fade } from "react-awesome-reveal";
import useProjects from "../../../utils/Projects";
function ProjectsSection() {
  const { currentTheme } = useThemes();
  const { dataProjectsLandingPage } = useProjects();
  return (
    <section
      className={`mt-16 md:mt-24  ${
        currentTheme === "dark"
          ? "bg-bgBlack text-white"
          : "bg-bgWhite text-black"
      } flex flex-col`}
    >
      <div className="container mx-auto px-5 md:px-20  flex flex-col text-center items-center justify-center gap-8 md:gap-10">
        <p className="text-base md:text-xl font-light md:font-normal md:w-3/4">
          <Fade triggerOnce delay={2000} direction="right">
            Check out some of my latest Projects i works on.
          </Fade>
        </p>
        <Fade triggerOnce delay={2500} direction="left">
          <div className="md:h-auto h-[30rem] snap-y py-8 overflow-y-scroll md:overflow-y-auto flex md:px-0 px-5 flex-wrap gap-4 justify-center items-center">
            {dataProjectsLandingPage.map((item) => {
              return (
                <CardProject
                  id={item.id}
                  githubLink={item.githubLink}
                  websiteUrl={item.websiteUrl}
                  img={item.srcThumbnail}
                  key={item.id}
                  stack={item.stack}
                  description={item.description}
                  title={item.title}
                />
              );
            })}
          </div>
        </Fade>
        <Fade triggerOnce delay={3000} direction="up">
          <p className="text-customGreen italic md:hidden text-sm md:text-xl font-light md:font-normal md:w-3/4">
            *You can scroll in there to see the projects.
          </p>
          <ButtonWithArrow>Discover All</ButtonWithArrow>
        </Fade>
      </div>
    </section>
  );
}

export default ProjectsSection;
