import PopularCollections from "@/components/organisms/PopularCollections";
import TopCreator from "@/components/organisms/TopCreator";
import TopSeller from "@/components/organisms/TopSeller";
import AdvancSection from "./AdvancSection";
import ExploreCategories from "./ExploreCategories";
import JoinCommunity from "./JoinCommunity";
import MainHero from "./MainHero";

const Page4 = () => {
  return (
    <main className="home-page-4">
      <MainHero />
      <AdvancSection />
      <TopCreator />
      <TopSeller />
      <ExploreCategories />
      <PopularCollections total={6} />
      <JoinCommunity />
    </main>
  );
};
export default Page4;
