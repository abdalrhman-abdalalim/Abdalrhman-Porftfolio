interface IProps {
  direction: "prev" | "next";
}

const NavigationButton = ({ direction }: IProps) => {
  return (
    <button
     
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center group"
      aria-label={direction === "prev" ? "Previous" : "Next"}
    >
      <svg
        className={`w-5 h-5 text-white/70 group-hover:text-pink-500 transition-colors duration-300 ${
          direction === "prev" ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default NavigationButton;
