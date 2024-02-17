import PopularCollections from "@/components/organisms/PopularCollections";
import SectionJoinCommunity from "@/components/organisms/SectionJoinCommunity";
import SubscribeSection from "@/components/organisms/SubcribeSection";
import TopCreator from "@/components/organisms/TopCreator";
import TopSeller from "@/components/organisms/TopSeller";
import React from "react";
import AdvancSection from "./AdvancSection";
import ExploreCategories from "./ExploreCategories";
import MainHero from "./MainHero";

const Page3 = () => {
  return (
    <main className="home-page-3">
      <MainHero />
      <AdvancSection />
      <TopCreator />
      <TopSeller />
      <ExploreCategories />
      <PopularCollections total={6} />
      <SubscribeSection />
      <SectionJoinCommunity />
    </main>
  );
};

export default Page3;
