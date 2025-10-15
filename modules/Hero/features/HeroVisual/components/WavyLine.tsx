interface IProps {}

const WavyLine = ({}: IProps) => {
  return (
    <div className="absolute top-20 right-10 w-32 h-32">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M10,50 Q30,20 50,50 T90,50"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default WavyLine;
