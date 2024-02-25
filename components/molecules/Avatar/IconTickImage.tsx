"use client";
import { IconTick } from "@/assets/icons/IconTick";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import { PropsWithChildren } from "react";

type Props = {
  size?: "small" | "large";
};
const IconTickImage = (props: PropsWithChildren<Props>) => {
  const { mode } = useThemeCTX();
  const { size = "large" } = props;
  return (
    <IconTick
      width={size == "small" ? 4 : 11}
      height={size == "small" ? 3 : 8}
      fill={mode === "dark" ? "#040914" : "#fff"}
    />
  );
};

export default IconTickImage;
