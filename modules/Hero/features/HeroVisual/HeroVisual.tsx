import DecorativeCircle from "./components/DecorativeCircle";
import ProfileImage from "./components/ProfileImage";
import WavyLine from "./components/WavyLine";

interface IProps {}

const HeroVisual = ({}: IProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <ProfileImage />
      {/* <DecorativeCircle /> */}
      <WavyLine />
    </div>
  );
};

export default HeroVisual;
