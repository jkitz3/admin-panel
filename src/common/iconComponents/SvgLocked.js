import * as React from "react";

export const SvgLocked = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 5a4 4 0 1 1 8 0v2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V5Zm6 0v2H6V5a2 2 0 1 1 4 0Z"
    />
    <path d="M12 5c0-2.2-1.8-4-4-4S4 2.8 4 5v4h2V5c0-1.25 1-2 2-2s2 .75 2 2v4h2V5Z" />
  </svg>
);
