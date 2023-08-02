// import ButtonWithArrow from "../../../components/ButtonWithArrow";
import CardTech from "../../../components/CardTech";
import TechStack from "../../../components/TechStack";
import useStacks from "../../../utils/Stacks";

function TechStacksSection() {
  const { backend, frontend, database } = useStacks();
  return (
    <section className="mt-12 md:mt-28  bg-bgBlack text-white flex flex-col">
      <div className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-8 md:gap-20">
        <h4 className="text-xl md:text-2xl font-semibold">Tech Stacks</h4>
        <div className="flex flex-row flex-wrap gap-8 md:gap-11 ">
          <CardTech title="Frontend">
            <ul className="flex flex-col gap-5 items-start">
              {frontend.map((item, idx) => {
                return (
                  <TechStack key={idx} title={item.title} img={item.img} />
                );
              })}
            </ul>
          </CardTech>
          <CardTech title="Backend">
            <ul className="flex flex-col gap-5 items-start">
              {backend.map((item, idx) => {
                return (
                  <TechStack key={idx} title={item.title} img={item.img} />
                );
              })}
            </ul>
          </CardTech>
          <CardTech title="Database">
            <ul className="flex flex-col gap-5 items-start">
              {database.map((item, idx) => {
                return (
                  <TechStack key={idx} title={item.title} img={item.img} />
                );
              })}
            </ul>
          </CardTech>
        </div>
      </div>
    </section>
  );
}

export default TechStacksSection;
