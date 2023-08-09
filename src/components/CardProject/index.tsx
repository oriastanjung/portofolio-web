import Github from "../../assets/iconsSvg/Github";
import ExternalLink from "../../assets/iconsSvg/ExternalLink";
import Folder from "../../assets/iconsSvg/Folder";
import useThemes from "../../utils/Themes/useThemes";
import { Link } from "react-router-dom";
interface IFCardProjectProps {
  id: string,
  img?: string;
  className?: string;
  title?: string;
  description?: string;
  stack?: Array<string>;
  githubLink?: string;
  websiteUrl?: string;
}

function CardProject(props: IFCardProjectProps) {
  const { currentTheme } = useThemes();
  return (
    <div
      className={`snap-center hover:scale-[103%] transform transition-transform duration-500 cursor-pointer w-[20rem] md:w-[25rem] px-4 py-6 hover:border-customGreen ${
        currentTheme === "dark"
          ? " border-bgWhite bg-bgWhite backdrop-blur-[0.5px] bg-opacity-[8%]"
          : "bg-bgBlack text-white "
      } hover:duration-300  border-[1px]  rounded-2xl flex flex-col items-start justify-start h-[18rem]`}
    >
      {/* <img className="w-3/4" src={props.img} alt="" /> */}
      <div className="flex items-start justify-between w-full">
        <div>
          <Folder className="cursor-pointer w-10 h-10 text-white hover:text-customGreen" />
        </div>
        <div className="flex flex-row gap-2 items-start">
          {props.githubLink && (
            <Link target="_blank" to={props.githubLink ? props.githubLink : "#"}>
              <Github className="cursor-pointer w-5 h-5 text-white hover:text-customGreen" />
            </Link>
          )}
          {props.websiteUrl && (
            <Link target="_blank" to={props.websiteUrl ? props.websiteUrl : "#"}>
              <ExternalLink className="cursor-pointer w-5 h-5 text-white hover:text-customGreen" />
            </Link>
          )}
        </div>
      </div>
      <h6 className="text-base text-left md:text-xl font-semibold mb-4 mt-5">
        {props.title}
      </h6>
      <p className="text-left text-sm text-light text-customGray mb-8 overflow-hidden line-clamp-2">
        {props.description}
      </p>
      {props.stack && (
        <ul
          className={`flex flex-row gap-6 w-full pb-4 ${
            props.stack.length > 4 ? "overflow-x-scroll" : "overflow-x-hidden"
          } snap-x overflow-y-auto max-h-16`}
        >
          {props.stack.map((item, i) => {
            return (
              <li
                className="snap-center whitespace-nowrap text-white font-semibold text-sm "
                key={i}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default CardProject;
