// import imgDummy from "../../../assets/projects/alvacation.png";
import Github from "../../../assets/iconsSvg/Github";
import ExternalLink from "../../../assets/iconsSvg/ExternalLink";
import ChevronLeft from "../../../assets/iconsSvg/ChevronLeft";
import ChevronRight from "../../../assets/iconsSvg/ChveronRight";
import { Fade } from "react-awesome-reveal";
import useProjects from "../../../utils/Projects";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function PortofolioSection() {
  const { featuredProjects } = useProjects();
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentData, setCurrentData] = useState(featuredProjects[activeIndex]);

  const handleNext = () => {
    if (activeIndex === featuredProjects.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };
  const handlePrevious = () => {
    if (activeIndex === 0) {
      setActiveIndex(featuredProjects.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    // Update currentData whenever activeIndex changes
    setCurrentData(featuredProjects[activeIndex]);
  }, [activeIndex, featuredProjects]);

  return (
    <section
      id="portofolio"
      className="mt-24 md:mt-48 md:pt-48 py-12 md:pb-48  bg-bgBlack text-white flex flex-col"
    >
      <Fade
        delay={1000}
        triggerOnce
        className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-8 md:gap-10"
      >
        <h3 className="font-semibold text-xl md:text-2xl mb-4 text-center">
          <Fade delay={1000} triggerOnce>
            My Portofolio
          </Fade>
        </h3>
        <p className="text-base md:text-xl font-light md:font-normal md:w-3/4 mb-8 text-center">
          <Fade delay={2000} triggerOnce>
            Best Featured Projects
          </Fade>
        </p>
        <div className="flex justify-center md:justify-evenly md:gap-20 items-center">
          <div
            onClick={handlePrevious}
            className="absolute left-0 z-[11] md:static  rounded-full p-1 cursor-pointer hover:bg-black"
          >
            <ChevronLeft className="text-white w-11 " />
          </div>

          {currentData && (
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
                    {currentData.title}
                  </h6>
                </Fade>
                <Fade
                  delay={2000}
                  direction="left"
                  triggerOnce
                  className="bg-black relative mb-7 px-4 md:px-10 py-8 md:py-12 md:w-[35rem] z-10 flex items-center justify-start  rounded-2xl"
                >
                  <p className="text-customGray text-center md:text-left text-sm md:text-base font-light w-full">
                    {currentData.description}
                  </p>
                </Fade>
                <ul className="mb-2 flex flex-row flex-wrap items-center gap-8 justify-start">
                  <Fade delay={2000} direction="left" triggerOnce>
                    {currentData.stack.map((item, i) => {
                      return (
                        <li
                          key={i}
                          className="text-xs md:text-base text-customGray font-semibold"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </Fade>
                </ul>

                <Fade delay={2000} direction="left" triggerOnce>
                  <div className="flex  items-center gap-3 mt-4">
                    {currentData.githubLink && (
                      <Link to={currentData.githubLink} target="_blank">
                        <Github className="hover:text-customGreen cursor-pointer text-white w-7 md:w-8" />
                      </Link>
                    )}
                    {currentData.websiteUrl && (
                      <Link to={currentData.websiteUrl} target="_blank">
                        <ExternalLink className="hover:text-customGreen cursor-pointer text-white w-7 md:w-8" />
                      </Link>
                    )}
                  </div>
                </Fade>
              </div>

              <Fade
                delay={2500}
                direction="right"
                triggerOnce
                className="overflow-hidden rounded-2xl mb-10 md:mb-0 md:w-2/3  w-full relative top-0 z-0 "
              >
                <img
                  className="w-full md:w-[45rem] h-[14rem] md:h-[30rem] rounded-2xl transform hover:scale-110 hover:opacity-95 transition-transform duration-500 ease-in-out object-cover object-top"
                  src={currentData.srcThumbnail}
                  alt="projects-1"
                />
              </Fade>
            </div>
          )}
          <div
            onClick={handleNext}
            className="absolute right-0 z-10 md:static  rounded-full p-1 cursor-pointer hover:bg-black"
          >
            <ChevronRight className="text-white w-11" />
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default PortofolioSection;
