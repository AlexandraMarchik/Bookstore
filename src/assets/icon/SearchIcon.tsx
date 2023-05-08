import React from "react";

export const SearchIcon = ({
  width = "21",
  height = "20",
  fill = "#313037",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8.5C2 4.92 4.92 2 8.5 2C12.08 2 15 4.92 15 8.5C15 10.29 14.27 11.92 13.09 13.09C11.92 14.27 10.29 15 8.5 15C4.92 15 2 12.08 2 8.5ZM19.71 18.29L15.18 13.76C16.32 12.31 17 10.48 17 8.5C17 3.81 13.19 0 8.5 0C3.81 0 0 3.81 0 8.5C0 13.19 3.81 17 8.5 17C10.48 17 12.31 16.32 13.76 15.18L18.29 19.71C18.49 19.9 18.74 20 19 20C19.26 20 19.51 19.9 19.71 19.71C20.1 19.32 20.1 18.68 19.71 18.29Z"
        fill={fill}
      />
    </svg>
  );
};