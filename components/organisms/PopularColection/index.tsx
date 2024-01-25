import Avatar from "@/components/molecules/Avatar";
import StarVote from "@/components/molecules/StarVote";
import Image from "next/image";
import React from "react";

const PopularCollection = () => {
  return (
    <div className="popular-collection w-[370px] rounded-[4px] bg-white shadow-popular-collection-light dark:bg-[#11161f] dark:shadow-popular-collection-dark">
      <div className="flex gap-[20px]">
        <Image
          src="/images/image-1.png"
          width={230}
          height={280}
          alt="img"
          className="rounded-[4px] object-cover"
        />
        <div className="flex flex-col gap-[10px]">
          <Image
            src="/images/image-2.png"
            width={120}
            height={135}
            alt="img"
            className="rounded-[4px] object-cover"
          />
          <Image
            src="/images/image-3.png"
            width={120}
            height={135}
            alt="img"
            className="rounded-[4px] object-cover"
          />
        </div>
      </div>

      <div className="flex items-center gap-[13px] px-[20px] py-[23px]">
        <Avatar
          src="/images/image-1.png"
          className="h-[80px] w-[80px] border-[2px] border-white"
          size={80}
        />
        <div className="flex flex-col">
          <h5 className="text-[20px] font-semibold text-main-secondary dark:text-white">
            Kristin Watson
            <span className="pl-5 text-[12px] font-normal">(294)</span>
          </h5>
          <div className="mt-[9px]">
            <StarVote number={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCollection;
