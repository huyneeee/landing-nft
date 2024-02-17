"use client";
import StarVote from "@/components/molecules/StarVote";
import { RobotoFont, SairaFont } from "@/utils/fonts";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import SwiperComponent from "../Swiper";

const ItemFeedback = () => {
  return (
    <div className="item-feedback flex flex-col gap-[24px] rounded-[16px] p-[40px] shadow-feedback-item">
      <div className="flex items-center gap-[12px]">
        <Image
          src="/images/image-2.1.png"
          alt="img"
          width={58}
          height={58}
          className="h-[58px] w-[58px] rounded-full object-cover"
        />
        <div className={SairaFont.className}>
          <p className="text-color-white text-[24px] font-semibold leading-[26px]">
            Ronald Richards
          </p>
          <p className="text-[13px] leading-[20px]">Product designer</p>
        </div>
      </div>
      <p
        className={clsx("text-color-white text-[24px] italic leading-[30px]", RobotoFont.className)}
      >
        Friendly service and health service, always care and nice. keep up”
      </p>
      <StarVote />
    </div>
  );
};

const UserFeedback = () => {
  return (
    <div className="nft-offset-left mt-[80px] flex flex-col">
      <h4 className="text-color-white text-[50px] font-semibold leading-[60px]">User Feedback</h4>
      <div>
        <SwiperComponent
          data={[1, 2, 3, 4, 5, 6]}
          spaceBetween={30}
          autoWidth
          slidesPerView="auto"
          classNameSlider="!w-[567px]"
          wrapperClass="!py-[60px]"
          itemRender={() => <ItemFeedback />}
        />
      </div>
    </div>
  );
};

export default UserFeedback;
