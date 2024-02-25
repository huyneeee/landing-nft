"use client";
import Button from "@/components/atoms/Button";
import PopularCollection from "@/components/molecules/PopularColection";
import React, { useMemo } from "react";
import SwiperComponent from "../Swiper";

type PropsPopularCollections = {
  total?: number;
};

const PopularCollections = ({ total = 3 }: PropsPopularCollections) => {
  const CardList = useMemo(() => {
    return (
      <>
        <div className="grid grid-cols-3 gap-[30px] max-sm:hidden">
          {new Array(total).fill(1).map((item, key) => (
            <React.Fragment key={key}>
              <PopularCollection />
            </React.Fragment>
          ))}
        </div>
        <div className="min-sm:hidden">
          <PopularCollection />
        </div>
      </>
    );
  }, [total]);

  return (
    <section className="popular-collections bg-white py-[100px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x">
        <div className="mb-[50px] flex items-center justify-between">
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
            data={[1, 2, 3]}
            watchSlidesProgress={true}
            slidesPerView={1.8}
            itemRender={() => <PopularCollection isSwiperMode={true} />}
          />
        </div>
      </div>
    </section>
  );
};

export default PopularCollections;
