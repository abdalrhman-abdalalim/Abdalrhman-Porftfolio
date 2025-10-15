interface IProps {
  text: string;
  animated?: boolean;
}

const CategoryBadge = ({ text, animated = false }: IProps) => {
  return (
    <span
      className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-all duration-300 ${
        animated ? "hover:scale-105 hover:shadow-lg" : ""
      }`}
    >
      {text}
    </span>
  );
};
export default CategoryBadge;
