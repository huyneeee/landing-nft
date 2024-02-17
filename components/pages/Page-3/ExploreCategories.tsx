import Button from "@/components/atoms/Button";
import ProductItem from "@/components/organisms/ProductItem";
import React from "react";

const ExploreCategories = () => {
  return (
    <section className="explore-categories relative overflow-hidden bg-white py-[100px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x">
        <div className="mb-[50px] flex items-center justify-between">
          <h4 className="text-color-white text-[50px] font-semibold leading-[60px]">
            Explore Categories
          </h4>
          <Button className="!font-bold">See all</Button>
        </div>

        <div className="grid grid-cols-3 gap-[30px]">
          {new Array(3).fill(1).map((item, key) => (
            <React.Fragment key={key}>
              <ProductItem />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
