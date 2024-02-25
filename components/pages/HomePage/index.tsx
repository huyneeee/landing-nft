import PopularCollections from "@/components/organisms/PopularCollections";
import SectionJoinCommunity from "@/components/organisms/SectionJoinCommunity";
import SubscribeSection from "@/components/organisms/SubcribeSection";
import BottomMainHero from "./BottomMainHero";
import ExploreCategories from "./ExploreCategories";
import MainHero from "./MainHero";
import TopProduct from "./TopProduct/TopProduct";

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
