import ButtonSection from "./ButtonSection";

interface IProps {}
//px-2  max-h-[calc((100vh-4.5rem)/2)]
const TextSection = ({}: IProps) => {
  return (
    <div className="h-fit flex flex-col gap-2 justify-center items-center  lg:h-full lg:w-1/2 py-1">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl w-full ">
        Clean code, sleek design, forward vision.
      </h1>
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl">
        Welcome to my digital canvas—where cutting-edge code meets captivating
        design. With a passion for pixel-perfect UIs and robust React solutions,
        I craft seamless experiences that blend aesthetics with technical
        precision. Every project reflects my commitment to innovation,
        performance, and clean architecture. Let's build something extraordinary
        together.
      </p>
      <ButtonSection />
    </div>
  );
};

export default TextSection;
