import Avatar from "@/components/molecules/Avatar";
import StarVote from "@/components/molecules/StarVote";
import { exo2Nd } from "@/utils/fonts";
import clsx from "clsx";
import Image from "next/image";
import IconButtonPlus from "./IconPlus";
import ListIconSocial from "./ListIconSocial";

const OurAPP = () => {
  return (
    <div className="our-app relative z-10 mt-auto flex gap-[10px] max-sm:mt-4">
      <div className="flex h-[170px] w-[140px] flex-col items-center justify-center gap-[15px] rounded-t-full bg-white px-[28px] max-sm:h-[145px] max-sm:w-[145px] max-sm:rounded-full max-sm:border-[5px]">
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
      <div className="flex h-[170px] w-[140px] flex-col items-center justify-center gap-[15px] rounded-t-full bg-white px-[28px] max-sm:h-[145px] max-sm:w-[145px] max-sm:rounded-full max-sm:border-[5px]">
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
    <div className="qr-code h-full w-[270px] translate-y-5 rounded-[24px] border-b-0 border-[#dadadc] px-[37px] py-[40px] dark:border-main-primary max-sm:mt-4 max-sm:border-[5px]">
      <div className="relative h-[180px] w-full overflow-hidden rounded-2xl shadow-creator-light">
        <Image src="/icons/qrcode.svg" alt="qr-code" fill className="aspect-square " />
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

const DowloadOurApp = () => {
  return (
    <div className="ml-[87px] flex flex-col pt-[30px] max-sm:ml-0">
      <h5 className="text-color-white text-[37px] leading-[44px]">Download</h5>
      <h6 className="text-color-white text-[34px] leading-[44px]">Our Mobile App</h6>
      <div className="mt-[40px] flex gap-[10px]">
        <Avatar src="/images/user-1.png" ticked={false} className="h-[54px] w-[54px]" size={54} />
        <Avatar src="/images/user-2.png" ticked={false} className="h-[54px] w-[54px]" size={54} />
        <Avatar src="/images/user-3.png" ticked={false} className="h-[54px] w-[54px]" size={54} />
        <Avatar src="/images/user-4.png" ticked={false} className="h-[54px] w-[54px]" size={54} />
        <IconButtonPlus />
      </div>
    </div>
  );
};

const FooterMobile = () => {
  return (
    <div className="nft-container nft-offset-x absolute bottom-[67%] z-10 dark:bg-[#050913] max-sm:w-[-webkit-fill-available] min-sm:hidden">
      <DowloadOurApp />
      <div className="mt-4 flex justify-center">
        <OurAPP />
      </div>

      <div className="mt-4 flex justify-center">
        <QRCode />
      </div>
    </div>
  );
};

const Community = () => {
  return (
    <div className="col-2 flex flex-col">
      <h4 className="mb-[18px] text-[25px] font-semibold leading-[29px] text-main-secondary dark:text-white">
        Community
      </h4>

      <ul>
        <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">About</li>
        <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">Blog</li>
        <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
          RARI Token
        </li>
        <li className="text-[20px] leading-[48px] text-main-secondary dark:text-white">
          Suggest Features
        </li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="footer-nft flex flex-col max-sm:relative">
      <FooterMobile />
      <div className="top-footer relative h-[350px] w-full overflow-hidden">
        <div className="absolute left-0 top-0 h-[350px] w-full translate-y-[60px] skew-y-[-2deg] overflow-hidden rounded-[40px] bg-[#edeeee] dark:bg-[#0f0f0f]">
          <div className="dust absolute right-0 top-0 h-[287px] w-[292px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
        </div>
        <div className="nft-container nft-offset-x relative z-10 flex h-full items-center justify-between max-sm:hidden">
          <QRCode />
          <DowloadOurApp />
          <OurAPP />
        </div>
      </div>

      <footer className="footer overflow-hidden bg-[#f2f3f3] py-[70px] dark:bg-[#0e131d] max-sm:z-[11]">
        <div className="nft-container nft-offset-x flex gap-[20%] max-sm:flex-col">
          <div className="col-1 relative flex flex-col">
            <div className="logo flex items-center gap-[13px]">
              <Image src="/icons/logo.svg" alt="logo" width={70} height={70} />
              <p className="text-[43px] font-bold text-main-secondary dark:text-white">NFTs</p>
            </div>

            <h5 className="mb-[22px] mt-[45px] text-[24px] font-semibold text-main-secondary dark:text-white">
              Join NFTs Community
            </h5>
            <ListIconSocial className="max-sm:h-[50px] max-sm:w-[50px]" />
            <div className="dust absolute right-0 top-0 h-[219px] w-[232px] rounded-[292px] bg-dust-main-hero blur-[197px]" />
          </div>
          <div className="flex gap-20 max-sm:mt-6">
            <Community />
            <Community />
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
