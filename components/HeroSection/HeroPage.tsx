import ImageSection from "./components/ImageSection";
import TextSection from "./components/TextSection";

const HeroPage = () => {
  return (
    <div className="h-full flex flex-col gap-2 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <ImageSection />
      <TextSection />
    </div>
  );
};

export default HeroPage;
