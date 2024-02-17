import Avatar from "@/components/molecules/Avatar";
import { RubikFont } from "@/utils/fonts";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const TopCreatorItem = () => {
  return (
    <div className="flex w-[270px] flex-col rounded-[12px] bg-white shadow-creator-light dark:bg-[#1d212a] dark:shadow-none">
      <Image
        src="/images/image-1.png"
        alt="img"
        width={270}
        height={110}
        className="h-[110px] w-[270px] rounded-[12px] object-cover"
      />

      <div className="mx-auto flex -translate-y-[42px] flex-col items-center gap-[10px]">
        <Avatar src="/images/image-3.png" size={68} className="h-[68px] w-[68px]" />
        <h4
          className={clsx(
            "text-center text-[20px] font-normal leading-[23px] text-main-secondary dark:text-white",
            RubikFont.className
          )}
        >
          Kristin Watson
        </h4>
        <h4
          className={clsx(
            RubikFont.className,
            "text-[18px] font-normal leading-[21px] text-main-secondary dark:text-main-primary"
          )}
        >
          $58,985
        </h4>
      </div>
    </div>
  );
};

export default TopCreatorItem;
