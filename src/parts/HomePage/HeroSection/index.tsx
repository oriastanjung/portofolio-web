import heroImgDark from "../../../assets/orias-about.png";
import ButtonArrowDown from "../../../components/ButtonArrowDown";
function HeroSection() {
  return (
    <section id="about" className="mt-28 bg-bgBlack text-white flex flex-col">
      <div className="container mx-auto px-20 flex items-center justify-between gap-10">
        <img className="w-[27rem]" src={heroImgDark} alt="orias-about" />
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-6xl font-bold">O. RIASTANJUNG</h2>
          <h3 className="text-5xl font-medium">FULLSTACK DEVELOPER</h3>
          <p className=" text-2xl font-medium italic w-3/5 text-center">
            "Challenges are mere illusions until shattered by determination."
          </p>
        </div>
      </div>
      <div className="mt-48 flex justify-center items-center">
        <ButtonArrowDown title={"See More"} to={"/#about-me"}/>
      </div>
    </section>
  );
}

export default HeroSection;
