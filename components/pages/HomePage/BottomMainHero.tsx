import TextCircle from "@/components/molecules/TextCircle";
import Image from "next/image";
import React from "react";

const BottomMainHero = () => {
  return (
    <section className="bottom-main-hero mt-[-260px] overflow-hidden bg-transparent pb-[92px]">
      <div className="nft-container flex items-center justify-between">
        <div className="list-image flex -translate-x-[25%] gap-[40px]">
          <Image
            width={400}
            height={530}
            alt="img"
            src="/images/bottom-hero-1.png"
            className="overflow-hidden rounded-[30px]"
          />
          <Image
            width={400}
            height={530}
            alt="img"
            src="/images/bottom-hero-2.png"
            className="overflow-hidden rounded-[30px]"
          />
          <Image
            width={400}
            height={530}
            alt="img"
            src="/images/bottom-hero-3.png"
            className="overflow-hidden rounded-[30px]"
          />
        </div>
        <TextCircle />
      </div>
    </section>
  );
};

export default BottomMainHero;
