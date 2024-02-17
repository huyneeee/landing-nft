import React from "react";
import Image from "next/image";
import clsx from "clsx";

type PropsCategoryItem = {
  image: string;
  title: string;
  className?: string;
};

const CategoryItem = ({ image, title, className }: PropsCategoryItem) => {
  return (
    <div
      className={clsx(
        "cate-item flex h-[260px] w-[178px] flex-col rounded-[16px] p-[15px] shadow-creator-light",
        className
      )}
    >
      <div className="relative h-full w-full rounded-[12px]">
        <Image src={image} alt="img-cate" fill className="object-cover" />
      </div>
      <p className="text-color-white mb-[25px] mt-[35px] text-center text-[20px] font-bold leading-[20px]">
        {title}
      </p>
    </div>
  );
};

export default CategoryItem;
