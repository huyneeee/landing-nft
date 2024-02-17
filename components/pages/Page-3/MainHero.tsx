import Button from "@/components/atoms/Button";
import CategoryItem from "@/components/organisms/CategoryItem";
import React from "react";

const MainHero = () => {
  return (
    <section className="main-hero pt-[215px]">
      <div className="nft-container nft-offset-x flex justify-between">
        <div className="max-w-[520px] flex-1">
          <h3 className="title-hero text-color-white max-w-[459px]">
            Create, Explore & Collect Digital Art NFTs
          </h3>
          <p className="text-color-white mb-[56px] mt-[30px] text-[20px] leading-[30px]">
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
        <div className="grid grid-cols-2 content-start gap-[30px]">
          <CategoryItem
            className="mt-[-105px] !h-[320px] !w-[220px]"
            image="/images/image-1.png"
            title="Photography"
          />
          <CategoryItem
            className="!h-[320px] !w-[220px]"
            image="/images/image-2.png"
            title="Photography"
          />
          <CategoryItem
            className="mt-[-105px] !h-[320px] !w-[220px]"
            image="/images/image-2.1.png"
            title="Photography"
          />
          <CategoryItem
            className="!h-[320px] !w-[220px]"
            image="/images/image-2.2.png"
            title="Photography"
          />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
