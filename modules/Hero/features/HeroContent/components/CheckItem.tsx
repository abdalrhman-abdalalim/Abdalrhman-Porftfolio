interface IProps {
  text: string;
}

const CheckItem = ({ text }: IProps) => {
  return (
    <div className="flex items-start gap-3 group hover:translate-x-2 transition-all duration-300">
      <div className="flex-shrink-0 mt-0.5">
        <div className="relative">
          <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
          <svg
            className="relative w-5 h-5 sm:w-6 sm:h-6 text-pink-500 group-hover:text-pink-400 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <span className="text-sm sm:text-base text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed">
        {text}
      </span>
    </div>
  );
};

export default CheckItem;
