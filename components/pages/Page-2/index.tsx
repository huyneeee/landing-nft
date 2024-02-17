import BestBidPeople from "@/components/organisms/BestBidPeople";
import SubscribeSection from "@/components/organisms/SubcribeSection";
import TopCreator from "@/components/organisms/TopCreator";
import React from "react";
import ExploreCategories from "./ExploreCategories";
import HowCanWeHelp from "./HowCanWeHelp";
import MainHero from "./MainHero";
import PopularCollections from "./PopularCollections";

const Page2 = () => {
  return (
    <main className="home-page-2">
      <MainHero />
      <HowCanWeHelp />
      <ExploreCategories />
      <TopCreator />
      <PopularCollections />
      <SubscribeSection />
      <BestBidPeople />
    </main>
  );
};

export default Page2;
