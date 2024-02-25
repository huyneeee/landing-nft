"use client";
import Avatar from "@/components/molecules/Avatar";
import StarVote from "@/components/molecules/StarVote";
import clsx from "clsx";
import Image from "next/image";
import { PropsWithChildren } from "react";

type Props = {
  isSwiperMode?: boolean;
};

const PopularCollection = (props: PropsWithChildren<Props>) => {
  const { isSwiperMode = false } = props;
  return (
    <div
      className={clsx(
        "popular-collection rounded-[4px] bg-white shadow-popular-collection-light dark:bg-[#11161f] dark:shadow-popular-collection-dark",
        isSwiperMode ? "mb-4 w-[215px]" : "w-[370px]"
      )}
    >
      <div className="flex gap-[20px]">
        <Image
          src="/images/image-1.png"
          width={!isSwiperMode ? 230 : 130}
          height={!isSwiperMode ? 280 : 160}
          alt="img"
          className="rounded-[4px] object-cover"
        />
        <div className="flex flex-col gap-[10px]">
          <Image
            src="/images/image-2.png"
            width={!isSwiperMode ? 120 : 66}
            height={!isSwiperMode ? 135 : 74}
            alt="img"
            className="rounded-[4px] object-cover"
          />
          <Image
            src="/images/image-3.png"
            width={!isSwiperMode ? 120 : 66}
            height={!isSwiperMode ? 135 : 74}
            alt="img"
            className="rounded-[4px] object-cover"
          />
        </div>
      </div>

      <div
        className={clsx(
          "flex items-center py-[23px]",
          isSwiperMode ? "gap-2 px-[12px]" : "gap-[13px] px-[20px]"
        )}
      >
        <Avatar
          tickSize={isSwiperMode ? "small" : "large"}
          src="/images/image-1.png"
          className={clsx(
            "border-[2px] border-white",
            isSwiperMode ? "h-[40px] w-[40px]" : "h-[80px] w-[80px]"
          )}
          size={isSwiperMode ? 40 : 80}
        />
        <div className="flex flex-col">
          <h5
            className={clsx(
              "font-semibold text-main-secondary dark:text-white",
              isSwiperMode ? "flex whitespace-nowrap text-[12px]" : "text-[20px]"
            )}
          >
            Kristin Watson
            {!isSwiperMode && <span className="pl-5 text-[12px] font-normal">(294)</span>}
          </h5>
          <div className="mt-[9px] max-sm:flex">
            <StarVote size={isSwiperMode ? "small" : "large"} />
            {isSwiperMode && <span className="pl-5 text-[12px] font-normal">(294)</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCollection;
