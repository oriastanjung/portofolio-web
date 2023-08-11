import ButtonArrowDown from "../../../components/ButtonArrowDown";
import CardAchievement from "../../../components/CardAchievement";
// import imgDummy from "../../../assets/achievements/dicoding-1.png";
import { Link } from "react-router-dom";
import ChevronRight from "../../../assets/iconsSvg/ChveronRight";
import useThemes from "../../../utils/Themes/useThemes";
import { Fade } from "react-awesome-reveal";
import useAchievements from "../../../utils/Achievements";
function AchievementsSection() {
  const { currentTheme } = useThemes();
  const { dataAllAchievements } = useAchievements();
  return (
    <section
      className={`mt-16 md:mt-24  ${
        currentTheme === "dark"
          ? "bg-bgBlack text-white "
          : "bg-bgWhite text-black "
      } flex flex-col`}
    >
      <Fade triggerOnce delay={2000}>
        <div className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-0 md:gap-10">
          <p className="text-base md:text-xl font-light md:font-normal md:w-3/4">
            This is some of my achievements
          </p>
          {/* carousel starts in here */}

          <div className=" snap-x overflow-x-scroll flex h-[35rem] w-full overflow-y-hidden md:py-10 gap-2 md:gap-6 justify-start items-center md:justify-start md:items-start ">
            {dataAllAchievements.map((item, i) => (
              <CardAchievement
                key={i}
                websiteUrl={item.websiteUrl}
                img={item.srcThumbnail}
                title={item.title}
                credential={item.credential}
                stack={item.stack}
              />
            ))}

           
          </div>
          <Link
            className="mt-5 flex items-center hover:underline font-semibold md:font-bold text-sm md:text-base"
            target="_blank"
            to={"https://www.linkedin.com/in/oriastanjung/"}
          >
            See Other in Linkedin{" "}
            <ChevronRight className="-ms-1 w-7" strokeWidth="3" />
          </Link>
        </div>
      </Fade>
      <Fade triggerOnce delay={3000} direction="up">
        <div className="mt-16 md:mt-28">
          <ButtonArrowDown title={"Contact"} to={"#contact"} />
        </div>
      </Fade>
    </section>
  );
}

export default AchievementsSection;
