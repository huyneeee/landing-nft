import clsx from "clsx";
import Image from "next/image";
import React from "react";

type PropsTextCircle = {
  size?: number;
};

const WIDTH_ITEM = 20;
const BONUS = 80;

const Circle = ({
  size,
  text,
  bonus,
  eccentricity,
  className
}: {
  size: number;
  text: string;
  bonus?: number;
  eccentricity?: number;
  className?: string;
}) => {
  const arrTxt = text.split("");
  const bonusSize = bonus ? bonus / 2 : 0;
  return (
    <div
      style={{
        width: size,
        height: size,
        top: -size / 2 - bonusSize,
        left: size / 2 - WIDTH_ITEM / 2 - bonusSize
      }}
      className="circle-1 absolute flex items-center justify-center"
    >
      {arrTxt.map((character, key) => {
        const rad = (key + 1) * (360 / arrTxt.length) + (eccentricity || 0);
        return (
          <span
            key={key}
            className={clsx(
              "text-color-white absolute left-0 top-0 text-center text-[24px] font-normal leading-[28px]",
              className
            )}
            style={{
              transformOrigin: "bottom center",
              transform: `rotate(${rad}deg)`,
              height: size,
              width: WIDTH_ITEM
            }}
          >
            {character}
          </span>
        );
      })}
    </div>
  );
};

const TextCircle = (props: PropsTextCircle) => {
  const { size = 150 } = props;
  const txtCircle1 = "LIVE AUCTIONS NFTS LIVE AUCTIONS NFTS ";
  return (
    <div className="relative flex w-fit items-center justify-center">
      <Circle size={size} text={txtCircle1} />
      <Circle
        size={size + BONUS}
        bonus={BONUS}
        text={txtCircle1}
        eccentricity={20}
        className="text-[45px] leading-[54px]"
      />
      <Image
        src="/images/monkey.png"
        alt="image"
        width={size}
        height={size}
        className="overflow-hidden rounded-full object-contain"
      />
    </div>
  );
};

export default TextCircle;
