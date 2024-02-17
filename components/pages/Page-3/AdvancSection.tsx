import { IconStarRounded } from "@/assets/icons/IconStar";
import IconUser from "@/assets/icons/IconUser";
import IconWallet from "@/assets/icons/IconWallet";
import TextCircle from "@/components/molecules/TextCircle";
import CategoryItem from "@/components/organisms/CategoryItem";
import { exo2Nd } from "@/utils/fonts";
import clsx from "clsx";
import React from "react";

const DATA = [
  {
    title: "Connect your wallet",
    description: "One you’ve set up your wallet of choice, connect it to wallet",
    icon: <IconWallet />
  },
  {
    title: "Create your NFT",
    description: "One you’ve set up your wallet of choice, connect it to wallet",
    icon: <IconUser />
  },
  {
    title: "List Theme Of Sale",
    description: "you’ve set up connect it to by clicking the wallet icon",
    icon: <IconStarRounded />
  }
];

const AdvancSection = () => {
  return (
    <section className="advance pb-[100px]">
      <div className="nft-container nft-offset-x mb-[100px] flex justify-center">
        <div className="relative mt-[300px] flex-1 pl-[150px]">
          <TextCircle size={180} />
        </div>
        <div className="mt-[150px] flex flex-1 flex-col gap-[35px]">
          <h4 className="title-section text-color-white mb-[15px] font-bold">
            We are advanc to building Digital art work
          </h4>
          {DATA.map((item, idx) => (
            <div className={clsx("flex items-center gap-[18px]", exo2Nd.className)} key={idx}>
              <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-main-primary">
                {item.icon}
              </div>
              <div>
                <h6
                  className={clsx(
                    "text-color-white mb-[8px] text-[23px] font-semibold leading-[27px]"
                  )}
                >
                  {item.title}
                </h6>
                <p className="text-color-white text-[18px] font-light leading-[21px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="nft-container nft-offset-x flex items-center justify-between gap-[20px]">
        <CategoryItem image="/images/image-1.png" title="Photography" />
        <CategoryItem image="/images/image-2.png" title="Trading Cards" />
        <CategoryItem image="/images/image-3.png" title="Utility" />
        <CategoryItem image="/images/image-2.1.png" title="Vitual Wolds" />
        <CategoryItem image="/images/image-2.2.png" title="Music" />
        <CategoryItem image="/images/image-2.3.png" title="Others " />
      </div>
    </section>
  );
};

export default AdvancSection;
