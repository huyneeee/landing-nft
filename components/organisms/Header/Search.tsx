"use client";
import { IconSearch } from "@/assets/icons/IconSearch";
import IconButton from "@/components/atoms/IconButton";
import { useThemeCTX } from "@/contexts/ThemeCTX";
import React from "react";

const Search = () => {
  const { mode } = useThemeCTX();
  return (
    <IconButton className="ml-[50px] h-[55px] w-[55px]">
      <IconSearch color={mode === "dark" ? "#fff" : "#040914"} />
    </IconButton>
  );
};

export default Search;
