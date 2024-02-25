import React from "react";
import IconStarMode from "./IconStarMode";

type PropsStarVote = {
  total?: number;
  number?: number;
  persitFill?: string;
  size?: "small" | "large";
};

const StarVote = (props: PropsStarVote) => {
  const { total = 5, number = 5, persitFill, size } = props;
  return (
    <div className="flex items-center gap-[6px]">
      {new Array(total).fill(1).map((item, key) => (
        <React.Fragment key={item + key}>
          <IconStarMode size={size} active={key < number} persitFill={persitFill} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default StarVote;
