import Button from "@/components/atoms/Button";
import Avatar from "@/components/molecules/Avatar";
import StarVote from "@/components/molecules/StarVote";
import Image from "next/image";
import React from "react";
import IconSocial from "./IconSocial";

const TopProduct = () => {
  return (
    <section className="top-product mt-[-362px] bg-[#f2f3f3] pt-[362px] dark:bg-[#141821]">
      <div className="nft-container nft-offset-x relative flex items-stretch gap-[80px]">
        <div className="flex w-[578px] shrink-0 flex-col py-[73px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[13px] rounded-[90px] bg-[#e0e2e2] p-[6px] pr-[26px] dark:bg-main-gray">
              <Avatar
                src="/images/monkey.png"
                size={60}
                ticked={false}
                className="h-[60px] w-[60px]"
              />
              <p className="text-color-white text-[18px] font-semibold">@WalkerJhone</p>
            </div>

            <IconSocial />
          </div>

          <h3 className="text-color-white mt-[37px] text-[40px] font-semibold leading-[50px]">
            Irradiation of Fake Yellow
          </h3>
          <div className="mt-[20px] flex items-center gap-[28px]">
            <StarVote />
            <p className="text-color-white text-[18px] font-semibold leading-[21px]">
              Auction · 1 of 1 available · Highest bid
            </p>
          </div>

          <div className="mt-[50px] flex">
            <div className="flex flex-col">
              <p className="text-color-white text-[21px] leading-[23px]">Current Bid</p>
              <div className="text-color-white mb-[20px] mt-[32px] text-[32px] font-bold leading-[38px]">
                <span className="mr-5">0.70</span>
                <span>ETH</span>
              </div>
              <p className="text-color-white text-[15px] leading-[18px]">$245665</p>
            </div>

            <div className="divider mx-[45px] mt-auto h-[109px] w-[1px] bg-white" />

            <div className="flex w-full flex-col">
              <p className="text-[21px] leading-[23px]">Auction Ending In</p>

              <div className="mt-[32px] flex h-full justify-between text-center">
                <div className="flex flex-col justify-between">
                  <p className="text-color-white text-[32px] font-bold leading-[38px]">02</p>
                  <p className="text-color-white text-[15px] leading-[18px]">Days</p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-color-white text-[32px] font-bold leading-[38px]">09</p>
                  <p className="text-color-white text-[15px] leading-[18px]">Hours</p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-color-white text-[32px] font-bold leading-[38px]">12</p>
                  <p className="text-color-white text-[15px] leading-[18px]">Minutes</p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-color-white text-[32px] font-bold leading-[38px]">02</p>
                  <p className="text-color-white text-[15px] leading-[18px]">Seconds</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[64px] flex items-center gap-[20px]">
            <Button color="outline">View product</Button>
            <Button>Place a Bid</Button>
          </div>
        </div>
        <div className="relative grow overflow-hidden rounded-tl-[60px]">
          <Image src="/images/image-4.png" alt="img" fill className="object-cover" />
        </div>
        <div className="dust absolute left-1/3 top-28 h-[287px] w-[292px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
      </div>
    </section>
  );
};

export default TopProduct;
