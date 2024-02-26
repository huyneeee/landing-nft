"use client";
import { IconPlus } from "@/assets/icons/IconPlus";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";

const IconButtonPlus = () => {
  const { mode } = useThemeCTX();
  return (
    <IconButton className="!bg-transparent max-lg:w-auto max-lg:justify-end">
      <IconPlus color={mode === "dark" ? "#fff" : "#040914"} />
    </IconButton>
  );
};

export default IconButtonPlus;
