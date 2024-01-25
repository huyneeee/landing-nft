"use client";
import { IconInsta } from "@/assets/icons/IconInsta";
import { IconGoogle, IconLinked } from "@/assets/icons/IconSocials";
import IconTwitter from "@/assets/icons/IconTwitter";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import React, { useMemo } from "react";

const ListIconSocial = () => {
  const { mode } = useThemeCTX();
  const fillIcon = useMemo(() => (mode === "dark" ? "#fff" : "#040914"), [mode]);
  return (
    <div className="flex items-center gap-[20px]">
      <IconButton className="bg-[#e7e8e8] dark:bg-[#141821]">
        <IconGoogle fill={fillIcon} />
      </IconButton>
      <IconButton className="bg-[#e7e8e8] dark:bg-[#141821]">
        <IconTwitter fill={fillIcon} />
      </IconButton>
      <IconButton className="bg-[#e7e8e8] dark:bg-[#141821]">
        <IconInsta fill={fillIcon} />
      </IconButton>
      <IconButton className="bg-[#e7e8e8] dark:bg-[#141821]">
        <IconLinked fill={fillIcon} />
      </IconButton>
      <IconButton className="bg-[#e7e8e8] dark:bg-[#141821]">
        <IconLinked fill={fillIcon} />
      </IconButton>
    </div>
  );
};

export default ListIconSocial;
