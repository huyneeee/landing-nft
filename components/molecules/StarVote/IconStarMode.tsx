"use client";
import { IconStar, IconStarInActive } from "@/assets/icons/IconStar";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import React from "react";

type PropsIconStarMode = {
  active: boolean;
  persitFill?: string;
};

const IconStarMode = ({ active = false, persitFill }: PropsIconStarMode) => {
  const { mode } = useThemeCTX();
  if (!active)
    return <IconStarInActive fill={persitFill || (mode === "dark" ? "#D3F85A" : "#FEB705")} />;
  return <IconStar fill={persitFill || (mode === "dark" ? "#D3F85A" : "#FEB705")} />;
};

export default IconStarMode;
