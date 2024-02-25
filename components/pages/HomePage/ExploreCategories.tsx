import Button from "@/components/atoms/Button";
import ProductItem from "@/components/organisms/ProductItem";
import React from "react";

const ExploreCategories = () => {
  return (
    <section className="explore-categories bg-white py-[100px] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x">
        <div className="mb-[50px] flex items-center justify-between">
          <h4 className="text-color-white text-[50px] font-semibold leading-[60px] max-sm:text-[26px] max-sm:leading-8">
            Explore Categories
          </h4>
          <Button className="max-sm:px-[22px] max-sm:py-2 max-sm:font-semibold min-sm:!font-bold">
            See all
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-[30px] max-sm:grid-cols-2 max-sm:gap-4">
          {new Array(6).fill(1).map((item, key) => (
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
