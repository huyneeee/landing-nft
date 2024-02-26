"use client";
import Button from "@/components/atoms/Button";
import PopularCollection from "@/components/molecules/PopularColection";
import React, { useMemo } from "react";
import SwiperComponent from "../Swiper";

type PropsPopularCollections = {
  total?: number;
};

const DATA = [
  {
    avatar: "/images/user-6.png",
    name: "Kristin Watson",
    urls: {
      1: "/images/col-1.1.png",
      2: "/images/col-1.2.png",
      3: "/images/col-1.3.png"
    }
  },
  {
    avatar: "/images/user-9.png",
    name: "Kristin Watson",
    urls: {
      1: "/images/col-2.1.png",
      2: "/images/col-2.2.png",
      3: "/images/col-2.3.png"
    }
  },
  {
    avatar: "/images/user-12.png",
    name: "Kristin Watson",
    urls: {
      1: "/images/col-3.1.png",
      2: "/images/col-3.2.png",
      3: "/images/col-3.3.png"
    }
  }
];

const PopularCollections = ({}: PropsPopularCollections) => {
  const CardList = useMemo(() => {
    return (
      <>
        <div className="grid grid-cols-3 gap-[30px] max-sm:hidden">
          {DATA.map((item, key) => (
            <React.Fragment key={key}>
              <PopularCollection data={item} />
            </React.Fragment>
          ))}
        </div>
        <div className="nft-offset-x min-sm:hidden">
          <PopularCollection data={DATA[0]} />
        </div>
      </>
    );
  }, []);

  return (
    <section className="popular-collections bg-white py-[50px] dark:bg-main-secondary sm:py-[100px] max-sm:pt-0">
      <div className="nft-container min-sm:nft-offset-x">
        <div className="max-sm:nft-offset-x mb-[50px] flex items-center justify-between">
          <h4 className="text-color-white text-[50px] font-semibold leading-[60px] max-sm:text-[26px] max-sm:leading-8">
            Popular Collections
          </h4>
          <Button className="max-sm:px-[22px] max-sm:py-2 max-sm:font-semibold min-sm:!font-bold">
            See all
          </Button>
        </div>
        {CardList}
        <div className="mt-4 min-sm:hidden">
          <SwiperComponent
            className="!px-4"
            data={DATA}
            watchSlidesProgress={true}
            slidesPerView={1.7}
            itemRender={(item) => <PopularCollection data={item} isSwiperMode={true} />}
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCollections;
