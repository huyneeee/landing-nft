import CategoryItem from "@/components/organisms/CategoryItem";
import Image from "next/image";
import React from "react";

const HowCanWeHelp = () => {
  return (
    <section className="how-can-we-help nft-container nft-offset-x pt-[100px]">
      <div className="flex flex-col gap-[80px]">
        <div className="row-1 flex items-center justify-between">
          <Image
            src="/images/image-2.png"
            alt="img"
            width={267}
            height={185}
            className="h-[185px] w-[267px] rounded-[120px] object-cover"
          />
          <div className="flex max-w-[462px] flex-col gap-[7px] text-center">
            <p className="text-color-white text-[30px] leading-[36px]">How can we help</p>
            <p className="text-color-white text-[40px] font-medium leading-[50px]">
              Create, Explore & Collect Digital Art NFTs
            </p>
          </div>
          <Image
            alt="img"
            src="/images/image-3.png"
            width={170}
            height={170}
            className="h-[170px] w-[170px] rounded-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between gap-[20px]">
          <CategoryItem image="/images/image-1.png" title="Photography" />
          <CategoryItem image="/images/image-2.png" title="Trading Cards" />
          <CategoryItem image="/images/image-3.png" title="Utility" />
          <CategoryItem image="/images/image-2.1.png" title="Vitual Wolds" />
          <CategoryItem image="/images/image-2.2.png" title="Music" />
          <CategoryItem image="/images/image-2.3.png" title="Others " />
        </div>
      </div>
    </section>
  );
};

export default HowCanWeHelp;
