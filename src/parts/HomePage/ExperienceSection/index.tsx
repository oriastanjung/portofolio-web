import { useState } from "react";
import Play from "../../../assets/iconsSvg/Play";
import ButtonArrowDown from "../../../components/ButtonArrowDown";
import useExperience, { IFexperienceData } from "../../../utils/Experience";
import useThemes from "../../../utils/Themes/useThemes";
import {Fade} from "react-awesome-reveal"
function ExperienceSection() {
  const {currentTheme} = useThemes()
  const { experienceData } = useExperience();
  const fromLatestData = experienceData.reverse();
  const [activeData, setActiveData] = useState<IFexperienceData | null>(
    fromLatestData[0]
  );
  const [activeExperience, setActiveExperience] = useState(activeData?.id || null);
  const onClick = (id: number): void => {
    const newData: IFexperienceData | undefined = experienceData.find(
      (item) => item.id === id
    );
    setActiveExperience(id);

    newData && setActiveData(newData);
  };

  return (
    <section
      id="experience"
      className={`mt-24 md:mt-48 md:pt-48 pt-24 ${currentTheme === "dark" ? " bg-bgBlack text-white " : " bg-bgWhite text-black "} flex flex-col`} 
    >
      <Fade  delay={1000} triggerOnce>
      <div className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-8 md:gap-10">
        <h3 className="font-semibold text-xl md:text-2xl">
          Experience I've Gained
        </h3>
        <p className="text-md md:text-xl font-light md:font-normal md:w-3/4">
          Best place I works on to improve myself at work.
        </p>
        <div className="flex flex-col md:flex-row gap-10">
          {/* check here */}
          <div className="flex flex-col md:w-1/3">

            {fromLatestData.map((item, key) => {
              return (
                <button
                  onClick={() => onClick(item.id)}
                  key={key}
                  className={`${currentTheme === "dark" ? "text-white" : activeExperience === item.id && "bg-customGray text-white "} ${
                    activeExperience === item.id && currentTheme === "dark" ?
                    "bg-black  border-s-customGreen" : activeExperience === item.id && currentTheme === "light" && "border-s-white"
                  } border-s-[3px]  px-8 py-4 hover:border-s-customGreen ${currentTheme === "dark" ? "hover:bg-black" : "hover:bg-customGray"} hover:text-white`}
                >
                  {item.company}
                </button>
              );
            })}
          </div>
          <div className="md:w-[40rem] flex flex-col items-start justify-start">
            <h6 className="mb-3 text-xl font-semibold text-left">
              {activeData?.position}
              <span className="text-customGreen">@{activeData?.company}</span>
            </h6>
            <p className="text-base font-normal mb-8">
              {activeData?.startDate} - {activeData?.endDate}
            </p>
            <ul className="flex flex-col gap-4">
              {activeData?.keypoint.map((item, key) => {
                return (
                  <li
                    key={key}
                    className="flex flex-row items-start justify-start text-left gap-1"
                  >
                    <span>
                      <Play className="mt-1 w-5 h-5 text-customGreen" />
                    </span>
                    <p className="font-light text-base">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      </Fade>
      <Fade delay={1500} triggerOnce direction="up">
      <div className="mt-16 md:mt-28">
        <ButtonArrowDown title={"Portofolio"} to={"#portofolio"} />
      </div>
      </Fade>
    </section>
  );
}

export default ExperienceSection;
