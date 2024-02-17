import BottomMainHero from "./BottomMainHero";
import MainHero from "./MainHero";
import TopProduct from "./TopProduct/TopProduct";
import ExploreCategories from "./ExploreCategories";
import SubscribeSection from "@/components/organisms/SubcribeSection";
import SectionJoinCommunity from "@/components/organisms/SectionJoinCommunity";
import React from "react";
import PopularCollections from "@/components/organisms/PopularCollections";

const HomePage = () => {
  return (
    <main className="home-page">
      <MainHero />
      <BottomMainHero />
      <TopProduct />
      <ExploreCategories />
      <PopularCollections />
      <SubscribeSection />
      <SectionJoinCommunity />
    </main>
  );
};

export default HomePage;
