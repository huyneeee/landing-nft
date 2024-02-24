import TextCircle from "@/components/molecules/TextCircle";
import Image from "next/image";
import React from "react";

const ImageGroup = ({ width = 400, height = 530 }: { width?: number; height?: number }) => {
  return (
    <div className="list-image flex gap-4 min-sm:-translate-x-[25%] min-sm:gap-[40px]">
      <Image
        width={width}
        height={height}
        alt="img"
        src="/images/bottom-hero-1.png"
        className="overflow-hidden rounded-[30px]"
      />
      <Image
        width={width}
        height={height}
        alt="img"
        src="/images/bottom-hero-2.png"
        className="overflow-hidden rounded-[30px]"
      />
      <Image
        width={width}
        height={height}
        alt="img"
        src="/images/bottom-hero-3.png"
        className="overflow-hidden rounded-[30px]"
      />
    </div>
  );
};

const BottomMainHero = () => {
  return (
    <section className="bottom-main-hero mt-[-260px] overflow-hidden bg-transparent pb-[92px]">
      <div className="flex justify-center min-sm:hidden">
        <ImageGroup width={113} height={150} />
      </div>
      <div className="nft-container flex items-center justify-between max-sm:hidden">
        <ImageGroup />
        <TextCircle />
      </div>
    </section>
  );
};

export default BottomMainHero;
