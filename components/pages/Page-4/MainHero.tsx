import { IconArrowRight } from "@/assets/icons/IconArrowRight";
import IconButton from "@/components/atoms/IconButton";
import TextCircle from "@/components/molecules/TextCircle";
import Image from "next/image";

const DustBackground = () => {
  return (
    <div className="dust absolute -left-20 top-20 h-[287px] w-[292px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
  );
};

const LeftSide = () => {
  return (
    <div className="left-side w-[690px] shrink-0 pt-[47px]">
      <h3 className="title-hero text-color-white  max-w-[600px]">
        Discover Digital Art Collect and Sell your Specifice NFTs
      </h3>
      <p className="text-color-white mb-[140px] mt-[30px] text-[20px] font-light leading-[30px]">
        Buy and sell NETs from the world’s artists. More than 1000 premium digital artworks are
        aviable to be your’s
      </p>

      <div className="nft-offset-x flex items-center gap-[150px]">
        <TextCircle size={80} outerClass="!text-[20px] !leading-[100px]" innerClass="!text-[14px]">
          <IconButton className="h-[80px] w-[80px] !bg-main-primary">
            <IconArrowRight className="rotate-90 transform" />
          </IconButton>
        </TextCircle>
        <div className="flex-1 flex-col gap-9">
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
        </div>
      </div>
    </div>
  );
};

const RightSide = () => {
  return (
    <Image
      src="/images/bird.png"
      alt="img"
      height={600}
      width={500}
      className="h-[600px] w-[500px] rounded-2xl"
    />
  );
};

const MainHero = () => {
  return (
    <section className="main-hero bg-white pb-4 pt-[115px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x relative flex justify-between">
        <LeftSide />
        <RightSide />
        <DustBackground />
      </div>
    </section>
  );
};

export default MainHero;
