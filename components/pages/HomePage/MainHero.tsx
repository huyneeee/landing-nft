import Button from "@/components/atoms/Button";
import Image from "next/image";
import React from "react";

const Title = () => {
  return (
    <h3 className="title-hero max-lg:title-hero-mobile text-color-white max-lg:nft-offset-right max-w-[450px] max-lg:max-w-full max-lg:pb-4">
      Create, Explore & Collect Digital Art NFTs
    </h3>
  );
};

const Describe = () => {
  return (
    <p className="text-color-white max-lg:nft-offset-right mb-[56px] mt-[30px] text-[20px] font-light leading-[30px] max-lg:text-[16px] max-lg:leading-7">
      Buy and sell NETs from the world’s artists. More than 1000 premium digital artworks are
      aviable to be your’s
    </p>
  );
};

const ArtworkTotal = () => {
  return (
    <div className="max-lg:nft-offset-right flex items-center gap-[60px] max-lg:justify-center max-lg:gap-3">
      <div className="flex flex-col max-lg:rounded-lg max-lg:bg-[#E0E7F3] max-lg:px-3 max-lg:py-2 dark:max-lg:bg-[#17253D] min-lg:gap-[20px]">
        <h4 className="text-color-white text-[48px] font-bold leading-[46px] max-lg:text-[30px]">
          290K+
        </h4>
        <p className="text-color-white max-lg:[18px] text-[20px] font-normal">Artwork</p>
      </div>

      <div className="flex flex-col max-lg:rounded-lg max-lg:bg-[#E0E7F3] max-lg:px-3 max-lg:py-2 dark:max-lg:bg-[#17253D] min-lg:gap-[20px]">
        <h4 className="text-color-white text-[48px] font-bold leading-[46px] max-lg:text-[30px]">
          110K+
        </h4>
        <p className="text-color-white max-lg:[18px] text-[20px] font-normal">Artwork</p>
      </div>

      <div className="flex flex-col max-lg:rounded-lg max-lg:bg-[#E0E7F3] max-lg:px-3 max-lg:py-2 dark:max-lg:bg-[#17253D] min-lg:gap-[20px]">
        <h4 className="text-color-white text-[48px] font-bold leading-[46px] max-lg:text-[30px]">
          99K+
        </h4>
        <p className="text-color-white max-lg:[18px] text-[20px] font-normal">Creatores</p>
      </div>
    </div>
  );
};

const ButtonGroup = () => {
  return (
    <div className="max-lg:nft-offset-right mt-[132px] flex items-center gap-[20px] max-lg:mt-10 max-lg:justify-center">
      <Button className="!font-medium max-lg:whitespace-nowrap max-lg:px-[22px] max-lg:text-[18px] max-lg:leading-5 min-lg:!font-bold">
        Start Collecting
      </Button>
      <Button
        color="outline"
        className="px-[52px] !font-medium max-lg:whitespace-nowrap max-lg:px-[22px] max-lg:text-[18px] max-lg:leading-5 min-lg:!font-bold"
      >
        Create NFTs
      </Button>
    </div>
  );
};

const LeftSide = () => {
  return (
    <div className="left-side max-lg:overflow-hidden min-lg:w-[527px] min-lg:shrink-0 min-lg:pt-[47px]">
      <Title />
      <div className="min-lg:hidden">
        <ImageGroup width={205} height={208} />
      </div>
      <Describe />
      <ArtworkTotal />
      <ButtonGroup />
    </div>
  );
};

const ImageGroup = ({ width = 355, height = 360 }: { width?: number; height?: number }) => {
  return (
    <div className="right-side flex w-full flex-col gap-[20px] overflow-hidden">
      <div className="row-1 flex items-center gap-[20px]">
        <Image
          src="/images/image-1.png"
          alt="img"
          width={width}
          height={height}
          style={{ height, width }}
          className="rounded-2xl"
        />
        <Image
          src="/images/image-2.png"
          alt="img"
          width={width}
          height={height}
          style={{ height, width }}
          className=" rounded-2xl"
        />
        <Image
          src="/images/image-3.png"
          alt="img"
          width={width}
          height={height}
          style={{ height, width }}
          className="rounded-2xl"
        />
      </div>
      <div className="row-2 flex items-center gap-[20px] pl-[83px]">
        <Image
          src="/images/image-2.1.png"
          alt="img"
          width={width}
          height={height}
          style={{ height, width }}
          className="rounded-2xl"
        />
        <Image
          src="/images/image-2.2.png"
          alt="img"
          width={width}
          height={height}
          style={{ height, width }}
          className="rounded-2xl"
        />
        <Image
          src="/images/image-2.3.png"
          alt="img"
          width={width}
          height={height}
          style={{ height, width }}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

const MainHero = () => {
  return (
    <section className="main-hero bg-white pb-[360px] dark:bg-main-secondary min-lg:pt-[115px]">
      <div className="nft-container nft-offset-left relative flex gap-[60px] max-lg:flex-col">
        <LeftSide />
        <div className="max-lg:hidden">
          <ImageGroup />
        </div>

        <div className="dust absolute -left-20 top-20 h-[287px] w-[292px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
      </div>
    </section>
  );
};

export default MainHero;
