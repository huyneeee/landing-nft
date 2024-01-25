import Avatar from "@/components/molecules/Avatar";
import InputMail from "@/components/molecules/InputMail";
import Image from "next/image";
import React from "react";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section bg-[#f2f3f3] pb-[64px] pt-[108px] dark:bg-[#0e131d]">
      <div className="nft-container nft-offset-left flex items-center gap-[60px]">
        <div className="left flex flex-col pt-[54px]">
          <div className="absolute h-[371px] w-[371px] rounded-[371px] bg-dust-subcribe blur-[197px]"></div>
          <div className="relative flex items-center gap-[11px]">
            <Avatar src="/images/image-1.png" ticked={false} />
            <Avatar src="/images/image-1.png" ticked={false} />
            <Avatar src="/images/image-1.png" ticked={false} />
            <Avatar src="/images/image-1.png" ticked={false} />
          </div>
          <h4 className="mb-[23px] mt-[33px] text-[40px] font-normal leading-[48px] text-main-secondary dark:text-white">
            News letter
          </h4>
          <h3 className="mb-[63px] text-[50px] font-bold leading-[60px] text-main-secondary dark:text-white">
            Subscribe Our Newsletter
          </h3>

          <InputMail />
        </div>
        <Image src="/images/subcribe.png" alt="img" width={682} height={529} />
      </div>
    </section>
  );
};

export default SubscribeSection;
