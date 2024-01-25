import clsx from "clsx";
import Image from "next/image";
import React from "react";
import IconTickImage from "./IconTickImage";

type PropsAvatar = {
  size?: number;
  src: string;
  className?: string;
  classNameIcon?: string;
  ticked?: boolean;
};

const Avatar = (props: PropsAvatar) => {
  const { src, size = 50, className, classNameIcon, ticked = true } = props;
  return (
    <div className="avatar relative w-fit">
      <Image
        src={src}
        width={size}
        height={size}
        alt="img"
        className={clsx("shrink-0 grow-0 rounded-full", className)}
      />
      <div
        style={{
          width: size,
          height: size
        }}
        className="absolute left-0 top-0 rounded-full border border-white/50"
      />
      {ticked && (
        <div
          className={clsx(
            "absolute bottom-0 right-0 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#4CAF50] dark:bg-main-primary",
            classNameIcon
          )}
        >
          <IconTickImage />
        </div>
      )}
    </div>
  );
};

export default Avatar;
