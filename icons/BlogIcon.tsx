import React from "react";

export const BlogIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 30,
  height = 30,
}) => {
  return (
    <a href="https://blog.0x63problems.dev">
      <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26.5" cy="26.5" r="26.5" fill="#D9D9D9" />
        <path
          d="M29.1968 19.5524L35.4478 25.8033L21.8741 39.3771L16.3008 39.9923C15.5547 40.0748 14.9244 39.444 15.0074 38.6979L15.6275 33.1207L29.1968 19.5524V19.5524ZM39.314 18.6217L36.3789 15.6866C35.4634 14.7711 33.9786 14.7711 33.063 15.6866L30.3018 18.4479L36.5528 24.6989L39.314 21.9376C40.2295 21.0216 40.2295 19.5372 39.314 18.6217V18.6217Z"
          fill="black"
        />
      </svg>
    </a>
  );
};
