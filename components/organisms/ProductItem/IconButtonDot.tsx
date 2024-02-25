"use client";
import { IconDot } from "@/assets/icons/IconDot";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import { PropsWithChildren } from "react";

type Props = {
  size?: "small" | "large";
};

const IconButtonDot = (props: PropsWithChildren<Props>) => {
  const { size } = props;
  const { mode } = useThemeCTX();
  return (
    <IconButton className="!bg-transparent max-sm:w-auto max-sm:justify-end">
      <IconDot
        width={size == "small" ? 12 : 25}
        height={size == "small" ? 3 : 5}
        fill={mode === "dark" ? "#fff" : "#040914"}
      />
    </IconButton>
  );
};

export default IconButtonDot;
