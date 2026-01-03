import ProfileImage from "./components/ProfileImage";
import WavyLine from "./components/WavyLine";

interface IProps {}

const HeroVisual = ({}: IProps) => {
  return (
    <div className="relative flex items-center justify-center mt-8 lg:mt-0 px-4 sm:px-0 order-1">
      <ProfileImage />
      <WavyLine />

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-linear-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default HeroVisual;
