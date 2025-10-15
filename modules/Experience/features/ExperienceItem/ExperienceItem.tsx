interface IProps {
  number: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  years: string;
}

const ExperienceItem = ({
  number,
  title,
  company,
  location,
  duration,
  years,
}: IProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-white/5 rounded-xl lg:rounded-2xl p-4 sm:p-6 hover:border-pink-500/30 transition-all duration-500 overflow-hidden">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/5 group-hover:to-purple-600/5 transition-all duration-500"></div>

      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
        {/* Left Side - Number & Content */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1">
          {/* Number Badge */}
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all duration-300">
            <span className="text-white font-bold text-base sm:text-lg">
              {number}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1 group-hover:text-pink-400 transition-colors duration-300 line-clamp-2 sm:line-clamp-none">
              {title}
            </h3>
            <p className="text-white/50 text-xs sm:text-sm line-clamp-2">
              {company} • {location}
            </p>
          </div>
        </div>

        {/* Right Side - Duration & Years */}
        <div className="flex items-center justify-center sm:justify-end gap-4 sm:gap-6">
          <div className="text-right sm:text-left">
            <div className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wider mb-1">
              {duration}
            </div>
            <div className="text-white/40 text-xs uppercase tracking-widest">
              {years}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/0 via-pink-500/0 to-purple-600/0 group-hover:from-pink-500/50 group-hover:via-purple-500/50 group-hover:to-purple-600/50 transition-all duration-500"></div>
    </div>
  );
};

export default ExperienceItem;
