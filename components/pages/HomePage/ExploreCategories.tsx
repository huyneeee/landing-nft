import Button from "@/components/atoms/Button";
import ProductItem from "@/components/organisms/ProductItem";
import React from "react";

const DATA = [
  {
    imageUrl: "/images/image-3.png",
    avatar: "/images/user-11.png",
    name: "The Salvaro",
    title: "Metaverse Game",
    desc: "Highest bid"
  },
  {
    imageUrl: "/images/user-10.1.png",
    avatar: "/images/user-10.png",
    name: "The Salvaro",
    title: "Metaverse Game",
    desc: "Highest bid"
  },
  {
    imageUrl: "/images/image-5.png",
    avatar: "/images/user-9.png",
    name: "The Salvaro",
    title: "Metaverse Game",
    desc: "Highest bid"
  },
  {
    imageUrl: "/images/image-2.png",
    avatar: "/images/user-11.png",
    name: "The Salvaro",
    title: "Metaverse Game",
    desc: "Highest bid"
  },
  {
    imageUrl: "/images/image-6.png",
    avatar: "/images/user-10.png",
    name: "The Salvaro",
    title: "Metaverse Game",
    desc: "Highest bid"
  },
  {
    imageUrl: "/images/image-2.2.png",
    avatar: "/images/user-9.png",
    name: "The Salvaro",
    title: "Metaverse Game",
    desc: "Highest bid"
  }
];

const ExploreCategories = () => {
  return (
    <section className="explore-categories bg-white py-[70px] dark:bg-main-secondary sm:py-[100px]">
      <div className="nft-container nft-offset-x">
        <div className="mb-[50px] flex items-center justify-between">
          <h4 className="text-color-white text-[50px] font-semibold leading-[60px] max-lg:text-[26px] max-lg:leading-8">
            Explore Categories
          </h4>
          <Button className="max-lg:px-[22px] max-lg:py-2 max-lg:font-semibold min-lg:!font-bold">
            See all
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-[30px] max-lg:grid-cols-2 max-lg:gap-4">
          {DATA.map((item, key) => (
            <React.Fragment key={key}>
              <ProductItem {...item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
