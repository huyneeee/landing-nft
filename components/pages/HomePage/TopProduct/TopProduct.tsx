"use client";
import Button from "@/components/atoms/Button";
import Avatar from "@/components/molecules/Avatar";
import StarVote from "@/components/molecules/StarVote";

import Image from "next/image";
import IconSocial from "./IconSocial";
import { useMedia } from "use-media";
const TopProduct = () => {
  const maxSm = useMedia({ maxWidth: 1023 });
  return (
    <section className="top-product mt-[-362px] bg-[#f2f3f3] pt-[362px] dark:bg-[#141821] max-lg:mt-[-165px] max-lg:overflow-hidden max-lg:pt-[40px]">
      <div className="nft-container nft-offset-x relative flex items-stretch gap-[80px]">
        <div className="min:sm:w-[578px] flex shrink-0 flex-col py-[73px] max-lg:relative max-lg:w-[-webkit-fill-available] max-lg:items-center  max-lg:pb-[300px] max-md:items-start">
          <div className="flex items-center max-lg:gap-6 min-lg:justify-between">
            <div className="flex items-center gap-[13px] rounded-[90px] bg-[#e0e2e2] p-[6px] pr-[26px] dark:bg-main-gray">
              <Avatar
                src="/images/monkey.png"
                size={!maxSm ? 60 : 27}
                ticked={false}
                className="h-[60px] w-[60px] max-lg:h-[27px] max-lg:w-[27px]"
              />
              <p className="text-color-white text-[18px] font-semibold max-lg:text-[16px]">
                @WalkerJhone
              </p>
            </div>

            <IconSocial isMobile={maxSm} className="max-lg:h-[39px] max-lg:w-[39px]" />
          </div>

          <h3 className="text-color-white mt-[37px] text-[40px] font-semibold leading-[50px] max-lg:mt-4 max-lg:text-[25px]">
            Irradiation of Fake Yellow
          </h3>
          <div className="gap-[28px mt-[20px] flex items-center max-lg:mt-0 max-lg:gap-3">
            <StarVote size={maxSm ? "small" : "large"} />
            <p className="text-color-white text-[18px] font-semibold leading-[21px] max-lg:text-xs">
              Auction · 1 of 1 available · Highest bid
            </p>
          </div>

          <div className="mt-[50px] flex">
            <div className="flex flex-col">
              <p className="text-color-white text-[21px] leading-[23px] max-lg:text-[14px] max-lg:leading-4">
                Current Bid
              </p>
              <div className="text-color-white mb-[20px] mt-[32px] text-[32px] font-bold leading-[38px] max-lg:text-[22px] max-lg:leading-[26px]">
                <span className="mr-5">0.70</span>
                <span>ETH</span>
              </div>
              <p className="text-color-white text-[15px] leading-[18px] max-lg:text-[12px] max-lg:leading-[14px]">
                $245665
              </p>
            </div>

            <div className="divider mx-[45px] mt-auto h-[109px] w-[1px] bg-white max-lg:mx-[24px]" />

            <div className="flex w-full flex-col">
              <p className="text-color-white text-[21px] leading-[23px] max-lg:text-[14px] max-lg:leading-4">
                Auction Ending In
              </p>

              <div className="mt-[32px] flex h-full text-center max-lg:mt-6 max-lg:gap-6 min-lg:justify-between">
                <div className="flex flex-col justify-between">
                  <p className="text-color-white text-[32px] font-bold leading-[38px] max-lg:text-[22px] max-lg:leading-[26px]">
                    02
                  </p>
                  <p className="text-color-white text-[15px] leading-[18px] max-lg:text-[11px] max-lg:leading-[13px]">
                    Days
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-color-white text-[32px] font-bold leading-[38px] max-lg:text-[22px] max-lg:leading-[26px]">
                    09
                  </p>
                  <p className="text-color-white text-[15px] leading-[18px] max-lg:text-[11px] max-lg:leading-[13px]">
                    Hours
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-color-white text-[32px] font-bold leading-[38px] max-lg:text-[22px] max-lg:leading-[26px]">
                    12
                  </p>
                  <p className="text-color-white text-[15px] leading-[18px] max-lg:text-[11px] max-lg:leading-[13px]">
                    Minutes
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-color-white text-[32px] font-bold leading-[38px] max-lg:text-[22px] max-lg:leading-[26px]">
                    44
                  </p>
                  <p className="text-color-white text-[15px] leading-[18px] max-lg:text-[11px] max-lg:leading-[13px]">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[64px] flex items-center gap-[20px] max-lg:justify-center">
            <Button
              color="outline"
              className="px-[52px] !font-medium max-lg:text-nowrap max-lg:px-[35px] max-lg:py-2 max-lg:text-[18px] max-lg:leading-5 min-lg:!font-bold"
            >
              View product
            </Button>
            <Button className="!font-medium max-lg:text-nowrap max-lg:px-[35px] max-lg:py-2 max-lg:text-[18px] max-lg:leading-5 min-lg:!font-bold">
              Place a Bid
            </Button>
          </div>
          <div className="absolute -right-[80px] bottom-0 grow overflow-hidden rounded-tl-[60px] max-md:-right-[15px] min-lg:hidden">
            <Image
              src="/images/image-4.png"
              width={297}
              height={230}
              alt="img"
              className="object-cover"
            />
          </div>
        </div>
        <div className="max:md-right-[15px] relative -right-[80px] grow overflow-hidden rounded-tl-[60px]">
          <Image src="/images/image-4.png" alt="img" fill className="object-cover" />
        </div>
        <div className="dust absolute left-1/3 top-28 h-[287px] w-[292px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
      </div>
    </section>
  );
};

export default TopProduct;
