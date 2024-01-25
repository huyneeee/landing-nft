import React from "react";
import Image from "next/image";
import ListIconSocial from "./ListIconSocial";
import clsx from "clsx";
import { exo2Nd } from "@/utils/fonts";
import Avatar from "@/components/molecules/Avatar";
import StarVote from "@/components/molecules/StarVote";

const OurAPP = () => {
  return (
    <div className="our-app mt-auto flex gap-[10px]">
      <div className="flex h-[170px] w-[140px] flex-col items-center justify-center gap-[15px] rounded-t-full bg-white px-[28px]">
        <Image src="/images/apple-store.png" alt="img" width={68} height={38} />
        <StarVote number={4} persitFill="#FEB705" />
        <p
          className={clsx(
            exo2Nd.className,
            "text-[16px] font-extrabold leading-[15px] text-main-secondary"
          )}
        >
          4.7/5
        </p>
      </div>
      <div className="flex h-[170px] w-[140px] flex-col items-center justify-center gap-[15px] rounded-t-full bg-white px-[28px]">
        <Image src="/images/ch-play.png" alt="img" width={34} height={37} />
        <StarVote number={4} persitFill="#FEB705" />
        <p
          className={clsx(
            exo2Nd.className,
            "text-[16px] font-extrabold leading-[15px] text-main-secondary"
          )}
        >
          4.7/5
        </p>
      </div>
    </div>
  );
};

const QRCode = () => {
  return (
    <div className="qr-code h-full w-[270px] translate-y-5 rounded-[24px] border-[5px] border-b-0 border-[#dadadc] px-[37px] py-[40px] dark:border-main-primary">
      <div className="relative h-[180px] w-full rounded-2xl">
        <Image src="/icons/qrcode.svg" alt="qr-code" fill className="aspect-square" />
      </div>
      <h4
        className={clsx(
          exo2Nd.className,
          "text-color-white mt-[30px] text-center text-[26px] font-semibold"
        )}
      >
        Scan Here
      </h4>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="footer-nft flex flex-col">
      <div className="top-footer relative h-[350px] w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-[350px] w-full translate-y-[60px] skew-y-[-2deg] rounded-[40px] bg-[#edeeee] dark:bg-[#0f0f0f]"></div>
        <div className="nft-container nft-offset-x relative z-10 flex h-full items-center justify-between">
          <QRCode />
          <div className="ml-[87px] flex flex-col pt-[30px]">
            <h5 className="text-color-white text-[37px] leading-[44px]">Download</h5>
            <h6 className="text-color-white text-[34px] leading-[44px]">Our Mobile App</h6>
            <div className="mt-[40px] flex gap-[10px]">
              <Avatar
                src="/images/image-1.png"
                ticked={false}
                className="h-[54px] w-[54px]"
                size={54}
              />
              <Avatar
                src="/images/image-1.png"
                ticked={false}
                className="h-[54px] w-[54px]"
                size={54}
              />
              <Avatar
                src="/images/image-1.png"
                ticked={false}
                className="h-[54px] w-[54px]"
                size={54}
              />
              <Avatar
                src="/images/image-1.png"
                ticked={false}
                className="h-[54px] w-[54px]"
                size={54}
              />
            </div>
          </div>

          <OurAPP />
          <div className="dust absolute right-0 top-0 h-[287px] w-[292px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
        </div>
      </div>

      <footer className="footer bg-[#f2f3f3] py-[70px] dark:bg-[#0e131d]">
        <div className="nft-container nft-offset-x flex justify-between">
          <div className="col-1 flex flex-col">
            <div className="logo flex items-center gap-[13px]">
              <Image src="/icons/logo.svg" alt="logo" width={70} height={70} />
              <p className="text-[43px] font-bold text-main-secondary dark:text-white">NFTs</p>
            </div>

            <h5 className="mb-[22px] mt-[45px] text-[24px] font-semibold text-main-secondary dark:text-white">
              Join NFTs Community
            </h5>
            <ListIconSocial />
          </div>

          <div className="col-2 flex flex-col">
            <h4 className="mb-[18px] text-[25px] font-semibold leading-[29px] text-main-secondary dark:text-white">
              Community
            </h4>

            <ul>
              <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
                About
              </li>
              <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
                Blog
              </li>
              <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
                RARI Token
              </li>
              <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
                Suggest Features
              </li>
            </ul>
          </div>

          <div className="col-3 flex flex-col">
            <h4 className="mb-[18px] text-[25px] font-semibold leading-[29px] text-main-secondary dark:text-white">
              Community
            </h4>

            <ul>
              <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
                About
              </li>
              <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
                Blog
              </li>
              <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
                RARI Token
              </li>
              <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
                Suggest Features
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bottom-footer bg-main-primary py-[17px] text-center text-[18px] font-medium leading-[21px]">
        © 2024 NFTs @ All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
