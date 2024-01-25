"use client";
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type PropsIconButton = {
  className?: string;
  onClick?: VoidFunction;
};

const IconButton = (props: PropsWithChildren<PropsIconButton>) => {
  const { children, className, onClick } = props;
  return (
    <div
      onClick={() => onClick && onClick()}
      className={clsx(
        "flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-[#e0e2e2] dark:bg-[#1d222c]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default IconButton;
