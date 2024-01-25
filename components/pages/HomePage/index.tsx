import BottomMainHero from "./BottomMainHero";
import MainHero from "./MainHero";
import TopProduct from "./TopProduct/TopProduct";
import ExploreCategories from "./ExploreCategories";
import PopularCollections from "./PopularCollections";
import SubscribeSection from "@/components/organisms/SubcribeSection";

const HomePage = () => {
  return (
    <main className="home-page">
      <MainHero />
      <BottomMainHero />
      <TopProduct />
      <ExploreCategories />
      <PopularCollections />
      <SubscribeSection />
    </main>
  );
};

export default HomePage;
