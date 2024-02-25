"use client";
import Button from "@/components/atoms/Button";
import Avatar from "@/components/molecules/Avatar";
import { useWindowSize } from "@/utils/helper";
import Image from "next/image";
import IconButtonDot from "./IconButtonDot";

const ProductItem = () => {
  const { width } = useWindowSize();
  const maxSm = (width as number) < 639;
  return (
    <div className="category-item flex w-full flex-col rounded-[12px] border border-[#CCC] bg-white px-[20px] py-[25px] dark:border-none dark:bg-[#121721CC] max-sm:px-[12px] max-sm:py-0">
      <div className="flex items-center justify-between">
        <div className="wrapper-title flex items-center gap-[10px]">
          <Avatar
            tickSize={maxSm ? "small" : "large"}
            src="/images/image-2.1.png"
            size={!maxSm ? 50 : 25}
          />
          <p className="text-[18px] font-semibold leading-[20px] text-main-secondary dark:text-white max-sm:text-nowrap max-sm:text-[10px]">
            The Salvaro
          </p>
        </div>
        <IconButtonDot size={maxSm ? "small" : "large"} />
      </div>

      <div className="relative mt-[38px] h-[262px] w-full max-sm:mt-0 max-sm:h-[153px]">
        <Image
          src="/images/image-3.png"
          alt="img"
          fill
          className="overflow-hidden rounded-[12px] object-cover"
        />
      </div>
      <div className="time-auction text-color-white mt-[15px] w-fit rounded-[30px] bg-[#e5e6e7] px-[16px] py-[8px] text-[18px] font-normal dark:bg-[#55585e] max-sm:text-[8px]">
        13 : 06 : 20
      </div>

      <h4 className="mt-[12px] text-[26px] font-bold leading-normal text-main-secondary dark:text-white max-sm:text-[12px]">
        Metaverse Game
        <span className="ml-3 text-[18px] font-bold leading-normal max-sm:text-[12px]">1/1</span>
      </h4>

      <p className="text-[18px] text-main-secondary dark:text-white max-sm:text-[8px]">
        Highest bid
      </p>

      <div className="bottom mt-[6px] flex items-center justify-between max-sm:pb-6">
        <p className="w-fit text-[20px] font-semibold text-main-secondary dark:text-main-primary max-sm:text-[10px]">
          Bid 2.079 ETH
        </p>
        <Button className="px-[22px] py-[12px] max-sm:px-[12px] max-sm:py-[8px] max-sm:text-[8px] max-sm:leading-[9px]">
          Place a Bid
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
