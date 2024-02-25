"use client";
import { IconStar, IconStarInActive } from "@/assets/icons/IconStar";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import { useWindowSize } from "@/utils/helper";

type PropsIconStarMode = {
  active: boolean;
  persitFill?: string;
};

const IconStarMode = ({ active = false, persitFill }: PropsIconStarMode) => {
  const { mode } = useThemeCTX();
  const { width } = useWindowSize();
  const maxSm = width < 639;
  if (!active)
    return <IconStarInActive fill={persitFill || (mode === "dark" ? "#D3F85A" : "#FEB705")} />;
  return (
    <IconStar
      width={maxSm ? 10 : 19}
      height={maxSm ? 10 : 18}
      fill={persitFill || (mode === "dark" ? "#D3F85A" : "#FEB705")}
    />
  );
};

export default IconStarMode;
