interface IProps {}

const ArrowDecoration = ({}: IProps) => {
  return (
    <div className="absolute top-24 left-12 hidden lg:block">
      <svg
        className="w-32 h-16 text-white/20"
        viewBox="0 0 120 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Straight arrow line pointing right */}
        <path
          d="M10 30 L90 30"
          strokeDasharray="4 4"
          className="animate-dash"
        />
        {/* Arrow head */}
        <path
          d="M85 25 L95 30 L85 35"
          fill="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
export default ArrowDecoration;
