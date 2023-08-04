import Github from "../../assets/iconsSvg/Github";
import ExternalLink from "../../assets/iconsSvg/ExternalLink";
import Folder from "../../assets/iconsSvg/Folder";
interface IFCardProjectProps {
  className?: string;
  title?: string;
  description?: string;
  stack?: Array<string>;
}

function CardProject(props: IFCardProjectProps) {
  return (
    <div className="snap-center hover:scale-[103%] transform transition-transform duration-500 cursor-pointer w-[20rem] md:w-[25rem] px-4 py-6 hover:border-customGreen hover:duration-300 bg-bgWhite backdrop-blur-[0.5px] bg-opacity-[8%] border-[1px] border-bgWhite rounded-2xl flex flex-col items-start justify-start">
      <div className="flex items-start justify-between w-full">
        <div>
          <Folder className="cursor-pointer w-10 h-10 text-white hover:text-customGreen" />
        </div>
        <div className="flex flex-row gap-2 items-start">
          <span>
            <Github className="cursor-pointer w-5 h-5 text-white hover:text-customGreen" />
          </span>
          <span>
            <ExternalLink className="cursor-pointer w-5 h-5 text-white hover:text-customGreen" />
          </span>
        </div>
      </div>
      <h6 className="text-base text-left md:text-xl font-semibold mb-4 mt-5">
        {props.title}
      </h6>
      <p className="text-left text-sm text-light text-customGray mb-8">
        {props.description}
      </p>
      {props.stack && (
        <ul
          className={`flex flex-row gap-6 w-full pb-4 ${
            props.stack.length > 4 ? "overflow-x-scroll" : "overflow-x-hidden"
          } snap-x`}
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
