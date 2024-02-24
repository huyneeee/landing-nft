"use client";
import IconX from "@/assets/icons/IconX";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import React from "react";

const CloseDropdown = () => {
  const { mode } = useThemeCTX();
  return (
    <div className="h-[60px] w-[60px] cursor-pointer">
      <IconX color={mode === "dark" ? "white" : "#040914"} />
    </div>
  );
};

export default CloseDropdown;
