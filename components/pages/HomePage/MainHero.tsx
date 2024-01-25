import Button from "@/components/atoms/Button";
import Image from "next/image";
import React from "react";

const MainHero = () => {
  return (
    <section className="main-hero bg-white pb-[360px] pt-[115px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-left relative flex gap-[60px]">
        <div className="left-side w-[527px] shrink-0 pt-[47px]">
          <h3 className="title-hero text-color-white max-w-[450px]">
            Create, Explore & Collect Digital Art NFTs
          </h3>
          <p className="text-color-white mb-[56px] mt-[30px] text-[20px] font-light leading-[30px]">
            Buy and sell NETs from the world’s artists. More than 1000 premium digital artworks are
            aviable to be your’s
          </p>

          <div className="flex items-center gap-[60px]">
            <div className="flex flex-col gap-[20px]">
              <h4 className="text-color-white text-[48px] font-bold leading-[46px]">290K+</h4>
              <p className="text-color-white text-[20px] font-normal">Artwork</p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h4 className="text-color-white text-[48px] font-bold leading-[46px]">110K+</h4>
              <p className="text-color-white text-[20px] font-normal">Artwork</p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h4 className="text-color-white text-[48px] font-bold leading-[46px]">99K+</h4>
              <p className="text-color-white text-[20px] font-normal">Artwork</p>
            </div>
          </div>

          <div className="mt-[132px] flex items-center gap-[20px]">
            <Button className="!font-bold">Start Collecting</Button>
            <Button color="outline" className="px-[52px]">
              Create NFTs
            </Button>
          </div>
        </div>

        <div className="right-side flex w-full flex-col gap-[20px] overflow-hidden">
          <div className="row-1 flex items-center gap-[20px]">
            <Image
              src="/images/image-1.png"
              alt="img"
              width={355}
              height={360}
              className="h-[360px] w-[355px] rounded-2xl"
            />
            <Image
              src="/images/image-2.png"
              alt="img"
              width={355}
              height={360}
              className="h-[360px] w-[355px] rounded-2xl"
            />
            <Image
              src="/images/image-3.png"
              alt="img"
              width={355}
              height={360}
              className="h-[360px] w-[355px] rounded-2xl"
            />
          </div>
          <div className="row-2 flex items-center gap-[20px] pl-[83px]">
            <Image
              src="/images/image-2.1.png"
              alt="img"
              width={355}
              height={360}
              className="h-[360px] w-[355px] rounded-2xl"
            />
            <Image
              src="/images/image-2.2.png"
              alt="img"
              width={355}
              height={360}
              className="h-[360px] w-[355px] rounded-2xl"
            />
            <Image
              src="/images/image-2.3.png"
              alt="img"
              width={355}
              height={360}
              className="h-[360px] w-[355px] rounded-2xl"
            />
          </div>
        </div>

        <div className="dust absolute -left-20 top-20 h-[287px] w-[292px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
      </div>
    </section>
  );
};

export default MainHero;
