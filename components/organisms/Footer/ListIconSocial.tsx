"use client";
import { IconInsta } from "@/assets/icons/IconInsta";
import { IconGoogle, IconLinked, IconYoutube } from "@/assets/icons/IconSocials";
import IconTwitter from "@/assets/icons/IconTwitter";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import clsx from "clsx";
import React, { PropsWithChildren, useMemo } from "react";

type Props = {
  className?: string;
};
const ListIconSocial = (props: PropsWithChildren<Props>) => {
  const { className } = props;
  const { mode } = useThemeCTX();
  const fillIcon = useMemo(() => (mode === "dark" ? "#fff" : "#040914"), [mode]);
  return (
    <div className="flex items-center gap-[20px]">
      <IconButton className={clsx("bg-[#e7e8e8] dark:bg-[#141821]", className)}>
        <IconGoogle fill={fillIcon} />
      </IconButton>
      <IconButton className={clsx("bg-[#e7e8e8] dark:bg-[#141821]", className)}>
        <IconTwitter fill={fillIcon} />
      </IconButton>
      <IconButton className={clsx("bg-[#e7e8e8] dark:bg-[#141821]", className)}>
        <IconInsta fill={fillIcon} />
      </IconButton>
      <IconButton className={clsx("bg-[#e7e8e8] dark:bg-[#141821]", className)}>
        <IconLinked fill={fillIcon} />
      </IconButton>
      <IconButton className={clsx("bg-[#e7e8e8] dark:bg-[#141821]", className)}>
        <IconYoutube fill={fillIcon} color={mode === "dark" ? "#040914" : "#fff"} />
      </IconButton>
    </div>
  );
};

export default ListIconSocial;
