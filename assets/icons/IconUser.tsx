import React from "react";

type PropsIconUser = {
  fill?: string;
};

const IconUser = ({ fill = "#130F26" }: PropsIconUser) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7654 9.70301C17.7654 13.0077 15.0612 15.656 11.6867 15.656C8.31337 15.656 5.60788 13.0077 5.60788 9.70301C5.60788 6.39831 8.31337 3.75 11.6867 3.75C15.0612 3.75 17.7654 6.39831 17.7654 9.70301ZM2.5 22.3967C2.5 19.3376 6.73191 18.5722 11.6867 18.5722C16.6683 18.5722 20.8733 19.3639 20.8733 22.4255C20.8733 25.4846 16.6414 26.25 11.6867 26.25C6.705 26.25 2.5 25.4583 2.5 22.3967ZM20.2168 9.81094C20.2168 11.4938 19.7006 13.0641 18.7955 14.3685C18.7014 14.5027 18.7845 14.6835 18.9484 14.7123C19.1759 14.7494 19.4095 14.7722 19.648 14.777C22.0208 14.8381 24.1502 13.342 24.7386 11.089C25.6106 7.74595 23.0519 4.74429 19.7924 4.74429C19.4389 4.74429 19.1001 4.78022 18.7699 4.8461C18.7246 4.85568 18.6757 4.87724 18.6512 4.91557C18.6194 4.96468 18.6427 5.02816 18.6745 5.07008C19.6542 6.4152 20.2168 8.05258 20.2168 9.81094ZM24.1466 17.1279C25.7415 17.4333 26.7897 18.055 27.2239 18.9617C27.592 19.7043 27.592 20.5667 27.2239 21.3094C26.5597 22.7132 24.4169 23.1647 23.584 23.2809C23.4115 23.3049 23.2733 23.1611 23.2916 22.9911C23.7173 19.1006 20.333 17.256 19.4572 16.832C19.4205 16.8117 19.412 16.7829 19.4156 16.7637C19.4181 16.7518 19.434 16.7326 19.4621 16.729C21.3567 16.6931 23.3944 16.9482 24.1466 17.1279Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconUser;
