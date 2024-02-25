"use client";
import { IconDot } from "@/assets/icons/IconDot";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import { useWindowSize } from "@/utils/helper";

const IconButtonDot = () => {
  const { mode } = useThemeCTX();
  const { width } = useWindowSize();
  const maxSm = (width as number) < 639;
  return (
    <IconButton className="!bg-transparent max-sm:w-auto max-sm:justify-end">
      <IconDot
        width={maxSm ? 12 : 25}
        height={maxSm ? 3 : 5}
        fill={mode === "dark" ? "#fff" : "#040914"}
      />
    </IconButton>
  );
};

export default IconButtonDot;
