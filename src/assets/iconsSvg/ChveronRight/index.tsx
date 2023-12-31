interface IFChevronRight {
  className: string,
  strokeWidth? : string
}
function ChevronRight(props: IFChevronRight) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 50 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 8.33325L33.3333 19.9999L18.75 31.6666"
        stroke="currentColor"
        stroke-width={props.strokeWidth ? props.strokeWidth : "2"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ChevronRight;
