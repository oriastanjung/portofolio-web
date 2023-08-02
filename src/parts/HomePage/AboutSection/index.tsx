import ButtonArrowDown from "../../../components/ButtonArrowDown";
function AboutSection() {
  return (
    <section
      id="about-me"
      className="mt-28  bg-bgBlack text-white flex flex-col"
    >
      <div className="container mx-auto px-20 flex flex-col text-center items-center justify-center gap-10">
        <h3 className="font-semibold text-2xl">Hi, {"I'm"} Orias. Nice to meet you.</h3>
        <p className="text-xl font-normal w-3/4">
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
      </div>
      <div className="mt-48 flex justify-center items-center">
        <ButtonArrowDown title={"Experience"} to={"/#experience"} />
      </div>
    </section>
  );
}

export default AboutSection;
