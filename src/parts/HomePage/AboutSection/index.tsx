// import ButtonArrowDown from "../../../components/ButtonArrowDown";
import ButtonWithArrow from "../../../components/ButtonWithArrow";
function AboutSection() {
  const downloadCVhandler = () => {
    const file = "/cv.pdf";
    window.open(file, "_blank");
  };
  return (
    <section
      id="about-me"
      className="mt-24 md:mt-48 md:pt-48 pt-24 bg-bgBlack text-white flex flex-col"
    >
      <div className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-8">
        <h3 className="font-semibold text-xl md:text-2xl">
          Hi, {"I'm"} Orias. Nice to meet you.
        </h3>
        <p className="text-md md:text-xl font-light md:font-normal md:w-3/4">
          Energetic CS undergraduate with 3 years of experience in Fullstack Web
          Development, specializing in Frontend Development. Proficient in MERN,
          Bootstrap CSS, Tailwind CSS, Redux, Jest, and RTL. Enthusiastic team
          player eager to learn and grow. Seeking job opportunities to make
          impactful contributions and support company goals.
        </p>
        <div className=" md:mt-12 mt-6 flex justify-center items-center">
          <ButtonWithArrow onClick={downloadCVhandler}>
            My Resume
          </ButtonWithArrow>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
