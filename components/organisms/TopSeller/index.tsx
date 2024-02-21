"use client";
import IconChevronLeft from "@/assets/icons/IconChevronLeft";
import { exo2Nd } from "@/utils/fonts";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const DATA = [
  {
    name: "Highest Sale",
    value: "$443.4k"
  },
  {
    name: "Floor Price",
    value: "$443.4k"
  },
  {
    name: "Market Cap",
    value: "$37M"
  },
  {
    name: "Items",
    value: "$7.7k"
  },
  {
    name: "Owners",
    value: "$5.2"
  },
  {
    name: "TOTAL VOLUME",
    value: "$74M"
  }
];

const TopSeller = () => {
  const [expand, setExpand] = useState(true);
  return (
    <section className="top-seller py-[100px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x flex flex-col items-center justify-center">
        <div className="flex w-full justify-start">
          <h3 className={clsx(exo2Nd.className, "title-section text-color-white")}>Top Sellers</h3>
        </div>
        <div className="mt-[50px] flex w-full justify-between gap-[90px]">
          <div className="left-side relative flex h-[530px]">
            <div className="relative h-full w-[350px]">
              <Image
                src="/images/image-1.png"
                alt="img"
                fill
                className="z-[3] rounded-[12px] object-cover"
              />
            </div>
            <div
              className={clsx(
                "relative h-full w-[350px] transition-all duration-300 ease-linear",
                expand ? "ml-[-120px]" : "ml-[-300px]"
              )}
            >
              <Image
                src="/images/image-2.png"
                alt="img"
                fill
                className="z-[2] scale-[0.8] rounded-[12px] object-cover"
              />
            </div>
            <div
              className={clsx(
                "relative h-full w-[350px] transition-all duration-300 ease-linear",
                expand ? "ml-[-150px]" : "ml-[-300px]"
              )}
            >
              <Image
                src="/images/image-3.png"
                alt="img"
                fill
                className="z-[1] scale-[0.6] rounded-[12px] object-cover"
              />
            </div>
            <div
              onClick={() => setExpand(!expand)}
              className={clsx(
                "absolute right-[35px] top-[240px] z-[4] flex h-[63px] w-[63px] items-center justify-center rounded-full bg-[#30BF84] transition-all duration-300 ease-linear",
                expand && "rotate-180"
              )}
            >
              <IconChevronLeft />
            </div>
          </div>
          <div className="right-side flex w-[400px] flex-col gap-[23px]">
            {DATA.map((item, idx) => (
              <div
                key={idx}
                className={
                  (exo2Nd.className,
                  "text-color-white flex items-center justify-between border-b border-main-secondary pb-[23px] last:border-none dark:border-white")
                }
              >
                <p className="text-[24px] font-medium leading-[28px]">{item.name}</p>
                <p className="text-[28px] font-semibold leading-[33px]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSeller;
