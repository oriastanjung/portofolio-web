import imgDummy from "../../../assets/projects/alvacation.png";
import Github from "../../../assets/iconsSvg/Github";
import ExternalLink from "../../../assets/iconsSvg/ExternalLink";
import ChevronLeft from "../../../assets/iconsSvg/ChevronLeft";
import ChevronRight from "../../../assets/iconsSvg/ChveronRight";
import { Fade } from "react-awesome-reveal";

function PortofolioSection() {
  return (
    <section
      id="portofolio"
      className="mt-24 md:mt-48 md:pt-48 py-12 md:pb-48  bg-bgBlack text-white flex flex-col"
    >
      <Fade delay={1000} triggerOnce className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-8 md:gap-10">
        <h3 className="font-semibold text-xl md:text-2xl">
          <Fade delay={1000} triggerOnce>
            My Portofolio
          </Fade>
        </h3>
        <p className="text-base md:text-xl font-light md:font-normal md:w-3/4">
          <Fade delay={2000} triggerOnce>
            Best Featured Projects
          </Fade>
        </p>
        <div className="flex justify-center md:justify-evenly md:gap-20 items-center">
          <div className="absolute left-0 md:static  rounded-full p-1 cursor-pointer hover:bg-black">
            <ChevronLeft className="text-white w-11" />
          </div>

          <div className="relative top-0 flex flex-col-reverse md:flex-row justify-center gap-0 items-center">
            <div
              className={` md:w-1/3 w-full flex flex-col items-center md:items-start`}
            >
              <Fade delay={2000} direction="left" triggerOnce>
                <p className="text-customGreen font-medium text-lg mb-3">
                  Featured Projects{" "}
                </p>
              </Fade>
              <Fade delay={2000} direction="left" triggerOnce>
                <h6 className="font-semibold text-xl px-4 md:px-0 md:text-2xl mb-4 md:w-4/5 md:text-left">
                  Alvacation : Vacation anytime anywhere
                </h6>
              </Fade>
              <Fade
                delay={2000}
                direction="left"
                triggerOnce
                className="bg-black relative mb-7 px-4 md:px-10 py-8 md:py-12 md:w-[35rem] z-10 flex items-center justify-start  rounded-2xl"
              >
                <p className="text-customGray text-center md:text-left text-sm md:text-base font-light w-full">
                  This Website is based on my learning course at BuildWithAngga.
                  This Website contain some places to go for vacation.
                </p>
              </Fade>
              <ul className="mb-2 flex flex-row flex-wrap items-center gap-8 justify-center">
                <Fade delay={2000} direction="left" triggerOnce>
                  <li className="text-xs md:text-base text-customGray font-semibold">
                    ReactJS
                  </li>
                  <li className="text-xs md:text-base text-customGray font-semibold">
                    BootstrapCSS
                  </li>
                  <li className="text-xs md:text-base text-customGray font-semibold">
                    SASS
                  </li>
                </Fade>
              </ul>

              <Fade delay={2000} direction="left" triggerOnce>
                <div className="flex  items-center gap-3 mt-4">
                  <span>
                    <Github className="hover:text-customGreen cursor-pointer text-white w-7 md:w-8" />
                  </span>
                  <span>
                    <ExternalLink className="hover:text-customGreen cursor-pointer text-white w-7 md:w-8" />
                  </span>
                </div>
              </Fade>
            </div>

            <Fade delay={2500} direction="right" triggerOnce className="overflow-hidden rounded-2xl mb-10 md:mb-0 md:w-2/3  w-full relative top-0 z-0 ">
              <img
                className="w-full rounded-2xl transform hover:scale-110 hover:opacity-95 transition-transform duration-500 ease-in-out"
                src={imgDummy}
                alt="projects-1"
              />
            </Fade>
          </div>

          <div className="absolute right-0 md:static  rounded-full p-1 cursor-pointer hover:bg-black">
            <ChevronRight className="text-white w-11" />
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default PortofolioSection;
