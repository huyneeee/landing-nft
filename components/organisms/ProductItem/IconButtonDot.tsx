"use client";
import { IconDot } from "@/assets/icons/IconDot";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import React from "react";

const IconButtonDot = () => {
  const { mode } = useThemeCTX();
  return (
    <IconButton className="!bg-transparent">
      <IconDot fill={mode === "dark" ? "#fff" : "#040914"} />
    </IconButton>
  );
};

export default IconButtonDot;
