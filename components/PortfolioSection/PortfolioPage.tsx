import LastSection from "./components/LastSection";
import TextSection from "./components/TextSection";
import WorkSection from "./components/WorkSection";

const PortfolioPage = () => {
  return (
    <div className={`relative h-[200vh]`}>
      <TextSection />
      <WorkSection />
      {/* <LastSection /> */}
    </div>
  );
};

export default PortfolioPage;
