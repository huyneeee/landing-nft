"use client";
import { IconHeart } from "@/assets/icons/IconHeart";
import { IconInsta } from "@/assets/icons/IconInsta";
import IconTwitter from "@/assets/icons/IconTwitter";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import React from "react";

const IconSocial = () => {
  const { mode } = useThemeCTX();
  const fill = mode === "dark" ? "#D3F85A" : "#040914";
  return (
    <div className="flex items-center gap-[20px]">
      <IconButton>
        <IconHeart fill={fill} />
      </IconButton>
      <IconButton>
        <IconTwitter fill={fill} />
      </IconButton>
      <IconButton>
        <IconInsta fill={fill} />
      </IconButton>
    </div>
  );
};

export default IconSocial;
