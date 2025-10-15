interface IProps {}

const DecorativeGrid = ({}: IProps) => {
  return (
    <div className="absolute top-8 left-8 opacity-20">
      <div className="grid grid-cols-6 gap-1">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white/30"></div>
        ))}
      </div>
    </div>
  );
};

export default DecorativeGrid;
