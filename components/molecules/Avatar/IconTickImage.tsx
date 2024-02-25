"use client";
import { IconTick } from "@/assets/icons/IconTick";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import { useWindowSize } from "@/utils/helper";
const IconTickImage = () => {
  const { mode } = useThemeCTX();
  const { width } = useWindowSize();
  const maxSm = (width as number) < 639;
  return (
    <IconTick
      width={maxSm ? 4 : 11}
      height={maxSm ? 3 : 8}
      fill={mode === "dark" ? "#040914" : "#fff"}
    />
  );
};

export default IconTickImage;
