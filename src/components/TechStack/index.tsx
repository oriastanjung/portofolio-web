
interface IFTechStackProps {
  img: string;
  title: string;
}
function TechStack(props: IFTechStackProps) {
  return (
    <li className="flex text-left md:text-base text-sm items-center gap-3 cursor-default">
      <img className="w-6 md:w-8 object-cover object-center" src={props.img} alt={props.title} />
      {props.title}
    </li>
  );
}

export default TechStack;
