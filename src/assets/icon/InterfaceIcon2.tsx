import React from "react";

export const InterfaceSecondIcon = ({
  width = "16",
  height = "16",
  stroke = "#313037",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 10L8 6L4 10"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};