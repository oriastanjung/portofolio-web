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
          I am an undergraduate Computer Science student, but I am highly
          motivated to work, with 3 years of experience in Fullstack Web
          Development, but more speacilizing in Frontend Development. I am
          proficient in modern technologies such as MERN tech, Tailwind CSS,
          JEST, and React Testing Library. I am enthusiastic about contributing
          with my skills, collaborating effectively within teams, and
          continuously learning and adapting to new technologies. I am seeking a
          job opportunity to further enhance my abilities and support the
          company's goals.{" "}
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
