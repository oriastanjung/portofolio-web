
interface buttonProps{
  className : string
}
function ChevronDown(props : buttonProps) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className={`${props.className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.5 22.5L30 40L12.5 22.5"
        stroke="currentColor"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ChevronDown;
