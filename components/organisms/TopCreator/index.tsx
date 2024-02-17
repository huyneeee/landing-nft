import Button from "@/components/atoms/Button";
import TopCreatorItem from "@/components/organisms/TopCreatorItem";
import React from "react";

const TopCreator = () => {
  return (
    <section className="top-creator bg-[#f1f2f2] py-[100px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x">
        <div className="mb-[50px] flex items-center justify-between">
          <h4 className="text-color-white text-[50px] font-semibold leading-[60px]">Top Creator</h4>
          <Button className="!font-bold">See all</Button>
        </div>

        <div className="grid grid-cols-4 gap-x-[30px] gap-y-[20px]">
          {new Array(8).fill(1).map((item, key) => (
            <React.Fragment key={key}>
              <TopCreatorItem />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCreator;
