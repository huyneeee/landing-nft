"use client";
import { IconArrowRight } from "@/assets/icons/IconArrowRight";
import IconButton from "@/components/atoms/IconButton";
import React, { useRef } from "react";

const InputMail = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      onClick={() => {
        ref.current?.focus();
      }}
      className="relative z-10 flex w-full items-center justify-between overflow-hidden rounded-[60px] bg-[#cbd1d1] dark:bg-[#3f494e]"
    >
      <input
        ref={ref}
        placeholder="Enter Your Mail"
        className="grow bg-[#cbd1d1] py-[42px] pl-[57px] text-[30px] leading-[36px] text-main-secondary outline-none dark:bg-[#3f494e]"
      />
      <IconButton className="m-[20px] h-[80px] w-[80px] bg-main-primary">
        <IconArrowRight />
      </IconButton>
    </div>
  );
};

export default InputMail;
