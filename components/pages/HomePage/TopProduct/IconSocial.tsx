"use client";
import { IconHeart } from "@/assets/icons/IconHeart";
import { IconInsta } from "@/assets/icons/IconInsta";
import IconTwitter from "@/assets/icons/IconTwitter";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import { PropsWithChildren } from "react";

type Props = {
  className?: string;
  isMobile?: boolean;
};

const IconSocial = (props: PropsWithChildren<Props>) => {
  const { className, isMobile = false } = props;
  const { mode } = useThemeCTX();
  const fill = mode === "dark" ? "#D3F85A" : "#040914";
  return (
    <div className="flex items-center gap-2 min-lg:gap-[20px]">
      <IconButton className={className}>
        <IconHeart width={isMobile ? 15 : 28} height={isMobile ? 15 : 27} fill={fill} />
      </IconButton>
      <IconButton className={className}>
        <IconTwitter width={isMobile ? 18 : 34} height={isMobile ? 18 : 35} fill={fill} />
      </IconButton>
      <IconButton className={className}>
        <IconInsta width={isMobile ? 15 : 25} height={isMobile ? 15 : 26} fill={fill} />
      </IconButton>
    </div>
  );
};

export default IconSocial;
