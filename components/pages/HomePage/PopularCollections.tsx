import Button from "@/components/atoms/Button";
import PopularCollection from "@/components/organisms/PopularColection";
import React from "react";

const PopularCollections = () => {
  return (
    <section className="popular-collections bg-white py-[100px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x">
        <div className="mb-[50px] flex items-center justify-between">
          <h4 className="text-[50px] font-semibold leading-[60px] text-main-secondary dark:text-white">
            Popular Collections
          </h4>
          <Button>See all</Button>
        </div>

        <div className="grid grid-cols-3 gap-[30px]">
          {new Array(3).fill(1).map((item, key) => (
            <React.Fragment key={key}>
              <PopularCollection />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCollections;
