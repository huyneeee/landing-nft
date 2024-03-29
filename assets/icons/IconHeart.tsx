import React from "react";

type PropsIconHeart = {
  fill?: string;
};

export const IconHeart = ({ fill = "#D3F85A" }: PropsIconHeart) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1332 0.756072C19.9745 0.756072 20.8145 0.874739 21.6132 1.14274C26.5345 2.74274 28.3079 8.14274 26.8265 12.8627C25.9865 15.2747 24.6132 17.4761 22.8145 19.2747C20.2399 21.7681 17.4145 23.9814 14.3732 25.8881L14.0399 26.0894L13.6932 25.8747C10.6412 23.9814 7.79986 21.7681 5.20119 19.2614C3.41453 17.4627 2.03986 15.2747 1.18653 12.8627C-0.320141 8.14274 1.45319 2.74274 6.42786 1.11474C6.81453 0.981406 7.21319 0.888072 7.61319 0.836072H7.77319C8.14786 0.781406 8.51986 0.756072 8.89319 0.756072H9.03986C9.87986 0.781406 10.6932 0.928072 11.4812 1.19607H11.5599C11.6132 1.22141 11.6532 1.24941 11.6799 1.27474C11.9745 1.36941 12.2532 1.47607 12.5199 1.62274L13.0265 1.84941C13.149 1.9147 13.2864 2.01447 13.4051 2.1007C13.4804 2.15533 13.5481 2.20453 13.5999 2.23607C13.6216 2.24891 13.6437 2.26182 13.666 2.27483C13.7804 2.34157 13.8994 2.41109 13.9999 2.48807C15.4812 1.35607 17.2799 0.742739 19.1332 0.756072ZM22.6799 10.3561C23.2265 10.3414 23.6932 9.90274 23.7332 9.3414V9.18274C23.7732 7.31474 22.6412 5.62274 20.9199 4.96941C20.3732 4.78141 19.7732 5.07607 19.5732 5.63607C19.3865 6.19607 19.6799 6.80941 20.2399 7.00807C21.0945 7.32807 21.6665 8.16941 21.6665 9.10141V9.14274C21.6412 9.44807 21.7332 9.74274 21.9199 9.96941C22.1065 10.1961 22.3865 10.3281 22.6799 10.3561Z"
        fill={fill}
      />
    </svg>
  );
};
