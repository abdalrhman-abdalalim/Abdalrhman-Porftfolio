interface IProps {}

const DecorativeIcon = ({}: IProps) => {
  return (
    <div className="absolute top-8 right-8 opacity-20">
      <svg
        className="w-20 h-20"
        viewBox="0 0 80 80"
        fill="none"
        stroke="currentColor"
      >
        <circle
          cx="40"
          cy="40"
          r="30"
          strokeWidth="1"
          className="text-pink-500"
        />
        <circle
          cx="40"
          cy="40"
          r="20"
          strokeWidth="1"
          className="text-purple-500"
        />
        <circle
          cx="40"
          cy="40"
          r="10"
          strokeWidth="1"
          className="text-cyan-500"
        />
        <path
          d="M40 10v60M10 40h60"
          strokeWidth="1"
          className="text-white/30"
        />
      </svg>
    </div>
  );
};

export default DecorativeIcon;
