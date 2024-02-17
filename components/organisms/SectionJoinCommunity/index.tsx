import Button from "@/components/atoms/Button";
import Avatar from "@/components/molecules/Avatar";
import { exo2Nd } from "@/utils/fonts";
import clsx from "clsx";
import React from "react";

const size = 1000;

const SectionJoinCommunity = () => {
  const configSizeDivOverplay = {
    big: {
      width: size / 2,
      left: size / 4
    },
    medium: {
      width: size / 3.5,
      left: size / 3.7
    },
    small: {
      width: size / 4,
      left: size / 5.3
    }
  };

  return (
    <section className="join-community bg-white dark:bg-[#050913]">
      <div className="nft-container nft-offset-x flex items-center justify-center py-[100px]">
        <div
          style={{
            width: size,
            height: size
          }}
          className="relative rounded-full border border-[#212A4D] p-[80px] dark:border-[4px] dark:border-[#121721]"
        >
          <div
            style={configSizeDivOverplay["big"]}
            className="absolute -top-1 z-10 flex flex-col items-center justify-center"
          >
            <div className="h-[80px] w-full bg-white dark:bg-[#050913]"></div>
            <div className="h-[80px] w-3/5 bg-white dark:bg-[#050913]"></div>
            <div className="h-[80px] w-2/3 bg-white dark:bg-[#050913]"></div>
          </div>
          <div
            style={configSizeDivOverplay["big"]}
            className="absolute -bottom-2 z-10 flex flex-col-reverse items-center justify-center"
          >
            <div className="h-[80px] w-full bg-white dark:bg-[#050913]"></div>
            <div className="h-[80px] w-2/5 bg-white dark:bg-[#050913]"></div>
            <div className="h-[80px] w-2/3 bg-white dark:bg-[#050913]"></div>
          </div>
          <div className="absolute left-[440px] top-[110px] z-[11]">
            <Avatar
              src="/images/image-1.png"
              ticked={false}
              size={100}
              className="h-[100px] w-[100px]"
            />
          </div>
          <div className="absolute bottom-[110px] left-[440px] z-[11]">
            <Avatar
              src="/images/image-1.png"
              ticked={false}
              size={100}
              className="h-[100px] w-[100px]"
            />
          </div>
          <div className="absolute left-[-20px] top-[300px] z-[11]">
            <Avatar
              src="/images/image-1.png"
              ticked={false}
              size={100}
              className="h-[100px] w-[100px]"
            />
          </div>
          <div className="absolute right-[140px] top-[50px] z-[11]">
            <Avatar
              src="/images/image-1.png"
              ticked={false}
              size={100}
              className="h-[100px] w-[100px]"
            />
          </div>
          <div className="absolute bottom-[290px] right-[70px] z-[11]">
            <Avatar
              src="/images/image-1.png"
              ticked={false}
              size={100}
              className="h-[100px] w-[100px]"
            />
          </div>
          <div className="absolute bottom-[320px] left-[70px] z-[11]">
            <Avatar
              src="/images/image-1.png"
              ticked={false}
              size={100}
              className="h-[100px] w-[100px]"
            />
          </div>

          <div className="relative h-full w-full rounded-full border border-[#212A4D] p-[100px] dark:border-[4px] dark:border-[#121721]">
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full border border-[#212A4D] text-center dark:border-[4px] dark:border-[#121721]">
              <h4 className="text-color-white text-[46px] font-semibold leading-[51px]">
                Join the Community
              </h4>
              <p
                className={clsx(
                  exo2Nd.className,
                  "text-color-white mb-[33px] mt-[8px] max-w-[568px] text-[20px] leading-[28px]"
                )}
              >
                We have a large scale group to support easth other in this game. Join ua to get the
                news as soon as possible and follow our latest announcements
              </p>
              <Button className="!font-bold">Join Our Community</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionJoinCommunity;
