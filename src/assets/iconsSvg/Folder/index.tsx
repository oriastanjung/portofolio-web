interface IFFolderProps{
    className : string
}
function Folder(props : IFFolderProps) {

  return (
    <svg
      className={props.className}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 14.5834V35.4167C6.25 36.5218 6.68899 37.5816 7.47039 38.363C8.25179 39.1444 9.3116 39.5834 10.4167 39.5834H39.5833C40.6884 39.5834 41.7482 39.1444 42.5296 38.363C43.311 37.5816 43.75 36.5218 43.75 35.4167V18.7501C43.75 17.645 43.311 16.5852 42.5296 15.8038C41.7482 15.0224 40.6884 14.5834 39.5833 14.5834H27.0833L22.9167 10.4167H10.4167C9.3116 10.4167 8.25179 10.8557 7.47039 11.6371C6.68899 12.4185 6.25 13.4783 6.25 14.5834Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Folder;
