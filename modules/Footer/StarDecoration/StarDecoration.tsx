interface IProps {}

const StarDecoration = ({}: IProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
      <div className="flex gap-8">
        <svg
          className="w-2 h-2 text-white animate-pulse"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="2" />
        </svg>
        <svg
          className="w-3 h-3 text-pink-500 animate-pulse delay-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="2" />
        </svg>
        <svg
          className="w-2 h-2 text-cyan-500 animate-pulse delay-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="2" />
        </svg>
      </div>
    </div>
  );
};

export default StarDecoration;
