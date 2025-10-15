interface IProps {}

const DecorativeLines = ({}: IProps) => {
  return (
    <div className="absolute top-8 right-8 opacity-10">
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        fill="none"
        stroke="white"
      >
        <path
          d="M10 10l80 80M90 10L10 90M50 0v100M0 50h100"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
};

export default DecorativeLines;
