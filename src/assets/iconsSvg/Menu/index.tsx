interface IFMenuProps{
    className : string
}
function Menu(props : IFMenuProps) {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      className={`${props.className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.53427 6.37404H20.5343M4.53427 12.374H20.5343M13.5343 18.374H20.5343"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Menu;
