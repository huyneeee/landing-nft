import TextCircle from "@/components/molecules/TextCircle";
import SectionJoinCommunity from "@/components/organisms/SectionJoinCommunity";
import DustBackground from "./DustBackground";

const JoinCommunity = () => {
  return (
    <section className="relative overflow-x-clip">
      <div className="absolute left-0 right-0 z-20 translate-x-[40%]">
        <DustBackground />
      </div>
      <SectionJoinCommunity />
      <div className="absolute -right-10 top-1/3">
        <TextCircle />
      </div>
    </section>
  );
};

export default JoinCommunity;
