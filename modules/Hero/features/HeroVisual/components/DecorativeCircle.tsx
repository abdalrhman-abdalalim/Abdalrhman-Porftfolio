interface IProps {}

const DecorativeCircle = ({}: IProps) => {
  return (
    <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/30 rounded-full flex items-center justify-center">
          <span className="text-white font-light text-2xl">Hello</span>
        </div>
        <div className="absolute top-0 left-1/2 w-px h-24 bg-white/30 transform -translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-px h-24 bg-white/30 transform -translate-x-1/2"></div>
        <div className="absolute left-0 top-1/2 w-24 h-px bg-white/30 transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default DecorativeCircle;
