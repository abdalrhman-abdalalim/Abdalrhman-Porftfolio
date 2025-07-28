interface IProps {}

const TextSection = ({}: IProps) => {
  return (
    <div className="h-[calc(100vh-4.5rem)] text-lg md:text-8xl flex justify-center text-center items-center">
      My work
    </div>
  );
};

export default TextSection;
