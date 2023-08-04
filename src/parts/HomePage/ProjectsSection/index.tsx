import ButtonWithArrow from "../../../components/ButtonWithArrow";
import CardProject from "../../../components/CardProject";

function ProjectsSection() {
  return (
    <section className="mt-16 md:mt-24  bg-bgBlack text-white flex flex-col">
      <div className="container mx-auto px-5 md:px-20 flex flex-col text-center items-center justify-center gap-8 md:gap-10">
        <p className="text-base md:text-xl font-light md:font-normal md:w-3/4">
          Check out some of my latest Projects i works on.
        </p>
        
        <div className="md:h-auto h-[30rem] snap-y overflow-y-scroll md:overflow-y-auto flex md:px-0 px-5 flex-wrap gap-4 justify-center items-center">
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS", "Sass","Bootstrap CSS", "SASS", "Sass"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS", "Sass","Bootstrap CSS", "SASS", "Sass"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS", "Sass","Bootstrap CSS", "SASS", "Sass"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS", "Sass","Bootstrap CSS", "SASS", "Sass"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
          <CardProject
            stack={["ReactJS", "Bootstrap CSS", "SASS"]}
            description="This Website is based on my learning course at BuildWithAngga. This Website contain some places to go for vacation."
            title="Alvacation : Vacation anytime anywhere"
          />
        </div>
        <p className="text-customGreen italic md:hidden text-sm md:text-xl font-light md:font-normal md:w-3/4">
          *You can scroll in there to see the projects.
        </p>
        <ButtonWithArrow>
            Discover All
        </ButtonWithArrow>
      </div>
    </section>
  );
}

export default ProjectsSection;
