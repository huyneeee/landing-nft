import React from "react";

type PropsIconSearch = {
  color?: string;
};

export const IconSearch = ({ color = "#fff" }: PropsIconSearch) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11.0664 19.7074C16.3574 19.7074 20.6465 15.5196 20.6465 10.3537C20.6465 5.18779 16.3574 1 11.0664 1C5.77548 1 1.48633 5.18779 1.48633 10.3537C1.48633 15.5196 5.77548 19.7074 11.0664 19.7074Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.73 17.3418L21.4859 20.9994"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
