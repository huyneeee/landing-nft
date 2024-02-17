"use client";
import React from "react";
import SwiperComponent from "@/components/organisms/Swiper";
import Image from "next/image";
import clsx from "clsx";

const SliderPeople = () => {
  return (
    <div className="h-[450px]">
      <SwiperComponent
        data={[1, 2, 3, 4, 5, 6]}
        loop
        centeredSlides
        itemRender={(item: any, isActive: boolean) => {
          console.log("item", isActive);
          return (
            <div className={clsx("bg-red-300", !isActive && "-rotate-45")}>
              <Image src="/images/image-1.png" width={210} height={270} alt="img" />
            </div>
          );
        }}
      />
    </div>
  );
};

export default SliderPeople;
