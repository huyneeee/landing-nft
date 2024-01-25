import React from "react";

type PropsIconDot = {
  fill?: string;
};
export const IconDot = ({ fill = "#fff" }: PropsIconDot) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="5" viewBox="0 0 25 5" fill="none">
      <circle cx="22.5" cy="2.5" r="2.5" fill={fill} />
      <circle cx="12.5" cy="2.5" r="2.5" fill={fill} />
      <circle cx="2.5" cy="2.5" r="2.5" fill={fill} />
    </svg>
  );
};
