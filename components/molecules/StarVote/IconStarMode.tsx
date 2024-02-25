"use client";
import { IconStar, IconStarInActive } from "@/assets/icons/IconStar";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import { isClient } from "@/utils/contants";
import { useEffect, useState } from "react";

type PropsIconStarMode = {
  active: boolean;
  persitFill?: string;
};

const IconStarMode = ({ active = false, persitFill }: PropsIconStarMode) => {
  const { mode } = useThemeCTX();
  const [maxSm, setMaxSm] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (isClient()) {
        setMaxSm(window.innerWidth < 639);
      }
    };
    handleResize();
    if (isClient()) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
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
