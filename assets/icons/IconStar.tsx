import React from "react";

type PropsIconStar = {
  fill?: string;
};

export const IconStar = ({ fill = "#D3F85A" }: PropsIconStar) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
      <path
        d="M9.29262 0.449219L12.0221 5.9822L18.1273 6.86958L13.7093 11.1785L14.7515 17.2596L9.29262 14.3847L3.831 17.2555L4.87458 11.1745L0.456543 6.86823L6.56181 5.98085L9.29262 0.449219Z"
        fill={fill}
      />
    </svg>
  );
};

export const IconStarInActive = ({ fill = "#D3F85A" }: PropsIconStar) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M7.93016 2.00195L9.95716 6.11095L14.4912 6.76995L11.2102 9.96995L11.9842 14.486L7.93016 12.351L3.87416 14.483L4.64916 9.96695L1.36816 6.76895L5.90216 6.10995L7.93016 2.00195Z"
        stroke={fill}
      />
    </svg>
  );
};
