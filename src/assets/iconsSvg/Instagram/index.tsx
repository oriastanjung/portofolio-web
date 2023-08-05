interface IFInstagramProps{
    className : string,
}

function Instagram(props : IFInstagramProps) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 29.8891C23.3575 29.8891 25.6184 28.9526 27.2854 27.2856C28.9524 25.6186 29.8889 23.3577 29.8889 21.0002C29.8889 18.6427 28.9524 16.3818 27.2854 14.7148C25.6184 13.0478 23.3575 12.1113 21 12.1113C18.6425 12.1113 16.3816 13.0478 14.7146 14.7148C13.0476 16.3818 12.1111 18.6427 12.1111 21.0002C12.1111 23.3577 13.0476 25.6186 14.7146 27.2856C16.3816 28.9526 18.6425 29.8891 21 29.8891Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 29.8889V12.1111C1 9.16426 2.17063 6.33811 4.25437 4.25437C6.33811 2.17063 9.16426 1 12.1111 1H29.8889C32.8357 1 35.6619 2.17063 37.7456 4.25437C39.8294 6.33811 41 9.16426 41 12.1111V29.8889C41 32.8357 39.8294 35.6619 37.7456 37.7456C35.6619 39.8294 32.8357 41 29.8889 41H12.1111C9.16426 41 6.33811 39.8294 4.25437 37.7456C2.17063 35.6619 1 32.8357 1 29.8889Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M33.2222 8.79984L33.2445 8.77539"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Instagram;
