import Image from "next/image";
import HeroImage from "@/public/Hero Images/sticker.png";
interface IProps {}

const ImageSection = ({}: IProps) => {
  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image
        src={HeroImage}
        alt="Hero image"
        fill
        className="object-contain mx-auto"
      />
    </div>
  );
};

export default ImageSection;
