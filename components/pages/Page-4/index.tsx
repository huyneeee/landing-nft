import PopularCollections from "@/components/organisms/PopularCollections";
import TopCreator from "@/components/organisms/TopCreator";
import TopSeller from "@/components/organisms/TopSeller";
import AdvancSection from "./AdvancSection";
import ExploreCategories from "./ExploreCategories";
import MainHero from "./MainHero";
import SectionJoinCommunity from "@/components/organisms/SectionJoinCommunity";

const Page4 = () => {
  return (
    <main className="home-page-4">
      <MainHero />
      <AdvancSection />
      <TopCreator />
      <TopSeller />
      <ExploreCategories />
      <PopularCollections total={6} />
      <SectionJoinCommunity />
    </main>
  );
};
export default Page4;
