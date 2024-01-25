import clsx from "clsx";
import React, { HTMLAttributes, PropsWithChildren } from "react";

type PropsButton = {
  color?: "primary" | "outline";
} & HTMLAttributes<HTMLButtonElement>;

const CONFIG_BTN = {
  primary: "bg-main-primary text-black",
  outline: "border dark:border-main-primary border-main-secondary text-color-white"
};

const BASE_BTN =
  "px-[42px] py-[21px] text-[20px] leading-[24px] font-normal rounded-[78px] hover:brightness-90";

const Button = (props: PropsWithChildren<PropsButton>) => {
  const { children, color = "primary", className } = props;

  return <button className={clsx(BASE_BTN, CONFIG_BTN[color], className)}>{children}</button>;
};

export default Button;
