import React from "react";
import SliderPeople from "./SliderPeople";
import UserFeedback from "./UserFeedback";

const BestBidPeople = () => {
  return (
    <section className="best-bid-people py-[80px]">
      <div className="nft-container nft-offset-x flex flex-col gap-[50px]">
        <h4 className="text-color-white text-[50px] font-semibold leading-[60px]">
          Best Bid People
        </h4>

        <SliderPeople />
      </div>
      <UserFeedback />
    </section>
  );
};

export default BestBidPeople;
