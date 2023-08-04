interface IFCardAchievementProps {
  title?: string;
  credential?: string;
  img?: string;
  stack?: Array<string>;
}

function CardAchievement(props: IFCardAchievementProps) {
  return (
    <div className="snap-center md:w-[20rem]  h-4/5 md:h-full rounded-2xl  transform transition-transform duration-500 cursor-pointer  hover:border-customGreen hover:duration-300 bg-bgWhite backdrop-blur-[0.5px] bg-opacity-[8%] border-[1px] border-bgWhite  flex flex-col items-end">
      <img className="object-cover w-full rounded-ss-2xl rounded-se-2xl" src={props.img} alt={props.title} />
      <div className="w-full px-4 py-6 flex flex-col ">
        <h6 className="text-base text-left md:text-xl font-semibold mb-3 mt-1">
          {props.title}
        </h6>
        <p className="text-sm text-left md:text-lg font-medium mb-5">
          {props.credential}
        </p>
        {props.stack && (
          <ul
            className={`flex flex-row flex-wrap md:flex-nowrap gap-3 md:gap-6 w-[18rem] pb-4 ${
              props.stack.length > 4 ? "md:overflow-x-scroll" : ""
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
    </div>
  );
}

export default CardAchievement;
