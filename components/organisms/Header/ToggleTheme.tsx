"use client";
import IconButton from "@/components/atoms/IconButton";
import React from "react";
import Image from "next/image";
import { useThemeCTX } from "@/contexts/ThemeCTX";

const ToggleTheme = () => {
  const { mode, onChangeMode } = useThemeCTX();
  return (
    <IconButton
      onClick={() => {
        onChangeMode(mode === "dark" ? "light" : "dark");
      }}
    >
      <Image
        src={mode === "dark" ? "/icons/icon-sun.svg" : "/icons/icon-moon.svg"}
        alt="icon"
        width={30}
        height={30}
      />
    </IconButton>
  );
};

export default ToggleTheme;
