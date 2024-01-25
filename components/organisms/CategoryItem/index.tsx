import Button from "@/components/atoms/Button";
import Avatar from "@/components/molecules/Avatar";
import Image from "next/image";
import React from "react";
import IconButtonDot from "./IconButtonDot";

const CategoryItem = () => {
  return (
    <div className="category-item flex w-full flex-col rounded-[12px] border border-[#CCC] bg-white px-[20px] py-[25px] dark:border-none dark:bg-[#121721CC]">
      <div className="flex items-center justify-between">
        <div className="wrapper-title flex items-center gap-[10px]">
          <Avatar src="/images/image-2.1.png" size={50} />
          <p className="text-[18px] font-semibold leading-[20px] text-main-secondary dark:text-white">
            The Salvaro
          </p>
        </div>
        <IconButtonDot />
      </div>

      <div className="relative mt-[38px] h-[262px] w-full">
        <Image
          src="/images/image-3.png"
          alt="img"
          fill
          className="overflow-hidden rounded-[12px] object-cover"
        />
      </div>
      <div className="time-auction mt-[15px] w-fit rounded-[30px] bg-[#e5e6e7] px-[16px] py-[8px] text-[18px] font-normal dark:bg-[#55585e] dark:text-white">
        13 : 06 : 20
      </div>

      <h4 className="mt-[12px] text-[26px] font-bold leading-normal text-main-secondary dark:text-white">
        Metaverse Game
        <span className="ml-3 text-[18px] font-bold leading-normal">1/1</span>
      </h4>

      <p className="text-[18px] text-main-secondary dark:text-white">Highest bid</p>

      <div className="bottom mt-[6px] flex items-center justify-between">
        <p className="w-fit text-[20px] font-semibold text-main-secondary dark:text-main-primary">
          Bid 2.079 ETH
        </p>
        <Button className="px-[22px] py-[12px]">Place a Bid</Button>
      </div>
    </div>
  );
};

export default CategoryItem;
