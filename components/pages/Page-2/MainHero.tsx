"use client";
import Button from "@/components/atoms/Button";
import Avatar from "@/components/molecules/Avatar";
import StarVote from "@/components/molecules/StarVote";
import SwiperComponent from "@/components/organisms/Swiper";
import { exo2Nd } from "@/utils/fonts";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { EffectCoverflow } from "swiper/modules";

type IDataItem = {
  title: string;
  description: string;
  image: string;
};

const data = [
  {
    title: "CloneX #2404",
    description: `20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸
    If you own a clone without any Murakami trait please read the terms regarding RTFKT - Owned Content here: https://rtfkt.com/legal-2A
    You are also entitled to a commercial license, please read the terms to that here: https://rtfkt.com/legal-2C`,
    image: "/images/image-1.png"
  },
  {
    title: "CloneX #2404",
    description: `20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸
    If you own a clone without any Murakami trait please read the terms regarding RTFKT - Owned Content here: https://rtfkt.com/legal-2A
    You are also entitled to a commercial license, please read the terms to that here: https://rtfkt.com/legal-2C`,
    image: "/images/image-1.png"
  },
  {
    title: "CloneX #2404",
    description: `20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸
    If you own a clone without any Murakami trait please read the terms regarding RTFKT - Owned Content here: https://rtfkt.com/legal-2A
    You are also entitled to a commercial license, please read the terms to that here: https://rtfkt.com/legal-2C`,
    image: "/images/image-1.png"
  },
  {
    title: "CloneX #2404",
    description: `20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸
    If you own a clone without any Murakami trait please read the terms regarding RTFKT - Owned Content here: https://rtfkt.com/legal-2A
    You are also entitled to a commercial license, please read the terms to that here: https://rtfkt.com/legal-2C`,
    image: "/images/image-1.png"
  },
  {
    title: "CloneX #2404",
    description: `20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸
    If you own a clone without any Murakami trait please read the terms regarding RTFKT - Owned Content here: https://rtfkt.com/legal-2A
    You are also entitled to a commercial license, please read the terms to that here: https://rtfkt.com/legal-2C`,
    image: "/images/image-1.png"
  }
];

const ItemCard = ({ item, isActive }: { item: IDataItem; isActive: boolean }) => {
  return (
    <div
      className={clsx(
        "item-card relative z-10 mx-auto mt-[100px]",
        !isActive && "shadow-feedback-item"
      )}
    >
      <div
        className={clsx(
          "flex gap-[50px] rounded-[20px] p-[50px] pb-[40px]",
          isActive ? "bg-[#edefee]" : "bg-white"
        )}
      >
        <div className="relative z-10 flex w-2/5">
          <Image
            src={item.image}
            alt="img"
            fill
            className="mt-[-25%] !h-[120%] rounded-[20px] object-cover"
          />
        </div>
        <div className="flex w-3/5 flex-col gap-[12px]">
          <h4
            className={clsx(
              "text-color-white text-[36px] font-bold leading-[43px]",
              exo2Nd.className
            )}
          >
            {item.title}
          </h4>
          <div className="flex items-center gap-[28px]">
            <StarVote size="large" />
            <p
              className={clsx(
                exo2Nd.className,
                "text-color-white text-[18px] font-semibold leading-[21px]"
              )}
            >
              Auction · 1 of 1 available · Highest bid
            </p>
          </div>
          <p
            className={clsx(
              exo2Nd.className,
              "text-color-white mt-[26px] text-[20px] leading-[34px]"
            )}
          >
            {item.description}
          </p>
          <div className="mt-[12px] flex flex-col">
            <p className="text-color-white text-[28px] font-normal leading-[33px]">Bids People:</p>
            <div className="mt-[22px] flex items-center gap-[10px]">
              <Avatar src="/images/image-1.png" ticked={false} />
              <Avatar src="/images/image-1.png" ticked={false} />
              <Avatar src="/images/image-1.png" ticked={false} />
              <Avatar src="/images/image-1.png" ticked={false} />
              <Avatar src="/images/image-1.png" ticked={false} />
            </div>
          </div>

          <div className="mt-[45px] flex items-center gap-[23px]">
            <Button color="outline">View Product</Button>
            <Button>Bid a Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainHero = () => {
  return (
    <section className="main-hero relative bg-white pt-[80px]">
      <div className="dust absolute left-[160px] top-[150px] z-[1] h-[287px] w-[292px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
      <SwiperComponent
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: -50,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        className="mySwiper"
        data={data}
        rewind={true}
        loop={true}
        classNameSlider="!max-w-[1170px]"
        itemRender={(item: IDataItem, isActive: boolean) => {
          return <ItemCard item={item} isActive={isActive} />;
        }}
      />
    </section>
  );
};

export default MainHero;
