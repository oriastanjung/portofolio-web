interface IFChevronLeftProps {
  className: string;
}
function ChevronLeft(props: IFChevronLeftProps) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 50 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.25 31.6666L16.6667 19.9999L31.25 8.33325"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ChevronLeft;
