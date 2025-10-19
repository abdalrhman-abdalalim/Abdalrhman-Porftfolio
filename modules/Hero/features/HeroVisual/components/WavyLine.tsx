interface IProps {}

const WavyLine = ({}: IProps) => {
  return (
    <div className="absolute top-10 sm:top-16 lg:top-20 right-4 sm:right-8 lg:right-10 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
      <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
        <path
          d="M10,50 Q30,20 50,50 T90,50"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-draw"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WavyLine;
