import Button from "@/components/atoms/Button";
import TextCircle from "@/components/molecules/TextCircle";
import PopularCollection from "@/components/molecules/PopularColection";
import React from "react";

const PopularCollections = () => {
  return (
    <section className="popular-collections relative bg-white py-[100px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x relative z-[2]">
        <div className="mb-[50px] flex items-center justify-between">
          <h4 className="text-[50px] font-semibold leading-[60px] text-main-secondary dark:text-white">
            Popular Collections
          </h4>
          <Button>See all</Button>
        </div>

        <div className="grid grid-cols-3 gap-[30px]">
          {new Array(6).fill(1).map((item, key) => (
            <React.Fragment key={key}>
              <PopularCollection />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="absolute -left-10 top-1/2 z-[1]">
        <TextCircle />
      </div>
    </section>
  );
};

export default PopularCollections;
