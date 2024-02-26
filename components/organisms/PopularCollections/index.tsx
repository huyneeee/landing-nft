"use client";
import Button from "@/components/atoms/Button";
import PopularCollection from "@/components/molecules/PopularColection";
import React, { useMemo } from "react";
import SwiperComponent from "../Swiper";
import { useMedia } from "use-media";

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
  const maxSm = useMedia({ maxWidth: 767 });
  const CardList = useMemo(() => {
    return (
      <>
        <div className="grid grid-cols-3 gap-[30px] max-lg:hidden">
          {DATA.map((item, key) => (
            <React.Fragment key={key}>
              <PopularCollection data={item} />
            </React.Fragment>
          ))}
        </div>

        <div className="nft-offset-x hidden max-md:block">
          <PopularCollection data={DATA[0]} />
        </div>
      </>
    );
  }, []);

  return (
    <section className="popular-collections bg-white py-[50px] dark:bg-main-secondary sm:py-[100px]">
      <div className="nft-container min-lg:nft-offset-x">
        <div className="max-lg:nft-offset-x mb-[50px] flex items-center justify-between">
          <h4 className="text-color-white text-[50px] font-semibold leading-[60px] max-lg:text-[26px] max-lg:leading-8">
            Popular Collections
          </h4>
          <Button className="max-lg:px-[22px] max-lg:py-2 max-lg:font-semibold min-lg:!font-bold">
            See all
          </Button>
        </div>
        {CardList}
        <div className="mt-4 min-lg:hidden">
          <SwiperComponent
            className="!px-4"
            data={DATA}
            watchSlidesProgress={true}
            slidesPerView={maxSm ? 1.7 : 2}
            itemRender={(item) => (
              <PopularCollection data={item} isSwiperMode={maxSm ? true : false} />
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCollections;
