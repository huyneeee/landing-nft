"use client";
import clsx from "clsx";
import React, { Dispatch } from "react";
interface Props {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

const CloseDropdown = ({ open, setOpen }: Props) => {
  return (
    <button className="group relative" onClick={() => setOpen(!open)}>
      <div
        className={clsx(
          "relative flex h-[60px] w-[60px] transform items-center justify-center overflow-hidden rounded-full shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8  dark:bg-slate-700",
          open ? "ring-4" : "ring-0"
        )}
      >
        <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
          <div
            className={clsx(
              "h-[2px] w-7 origin-left transform bg-black transition-all duration-300 dark:bg-white",
              open ? "translate-x-10" : ""
            )}
          ></div>
          <div
            className={clsx(
              "h-[2px] w-7 transform rounded bg-black transition-all delay-75 duration-300 dark:bg-white",
              open ? "translate-x-10" : ""
            )}
          ></div>
          <div
            className={clsx(
              "h-[2px] w-7 origin-left transform bg-black transition-all delay-150 duration-300  dark:bg-white",
              open ? "translate-x-10" : ""
            )}
          ></div>
          <div
            className={clsx(
              "absolute top-2.5 flex transform items-center justify-between transition-all duration-500 ",
              open ? "w-12 translate-x-0" : "w-0 -translate-x-10"
            )}
          >
            <div
              className={clsx(
                "absolute h-[2px] w-5 transform bg-black transition-all delay-300 duration-500 dark:bg-white",
                open ? "rotate-45" : "rotate-0"
              )}
            ></div>
            <div
              className={clsx(
                "absolute h-[2px] w-5 transform bg-black transition-all delay-300 duration-500  dark:bg-white",
                open ? "-rotate-45" : "-rotate-0"
              )}
            ></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CloseDropdown;
