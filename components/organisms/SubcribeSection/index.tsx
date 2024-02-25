import Avatar from "@/components/molecules/Avatar";
import InputMail from "@/components/molecules/InputMail";
import Image from "next/image";
import React from "react";

const SubscribeImage = () => {
  return (
    <>
      <div className="max-sm:hidden">
        <Image src="/images/subcribe.png" alt="img" width={682} height={529} />
      </div>
      <div className="min-sm:hidden">
        <Image src="/images/subcribe-mobile.png" alt="img" width={361} height={377} />
      </div>
    </>
  );
};

const SubscribeSection = () => {
  return (
    <section className="subscribe-section bg-[#f2f3f3] pb-[64px] dark:bg-[#0e131d] min-sm:pt-[108px]">
      <div className="nft-container nft-offset-left flex items-center gap-[60px]">
        <div className="left flex flex-col pt-[54px]">
          <div className="absolute h-[371px] w-[371px] rounded-[371px] bg-dust-subcribe blur-[197px]"></div>
          <div className="relative flex items-center gap-[11px]">
            <Avatar src="/images/user-1.png" ticked={false} />
            <Avatar src="/images/user-2.png" ticked={false} />
            <Avatar src="/images/user-3.png" ticked={false} />
            <Avatar src="/images/user-4.png" ticked={false} />
          </div>
          <h4 className="mb-[23px] mt-[33px] text-[40px] font-normal leading-[48px] text-main-secondary dark:text-white max-sm:text-[30px] max-sm:font-light max-sm:leading-[36px]">
            News letter
          </h4>
          <h3 className="mb-[63px] text-[50px] font-bold leading-[60px] text-main-secondary dark:text-white max-sm:mb-[30px] max-sm:text-[40px] max-sm:font-semibold max-sm:leading-[48px]">
            Subscribe Our Newsletter
          </h3>
          <div className="mb-6 min-sm:hidden">
            <Image src="/images/subcribe-mobile.png" alt="img" width={361} height={377} />
          </div>
          <InputMail />
        </div>
        <SubscribeImage />
      </div>
    </section>
  );
};

export default SubscribeSection;
