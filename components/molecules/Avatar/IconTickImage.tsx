"use client";
import { IconTick } from "@/assets/icons/IconTick";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import React from "react";

const IconTickImage = () => {
  const { mode } = useThemeCTX();
  return <IconTick fill={mode === "dark" ? "#040914" : "#fff"} />;
};

export default IconTickImage;
