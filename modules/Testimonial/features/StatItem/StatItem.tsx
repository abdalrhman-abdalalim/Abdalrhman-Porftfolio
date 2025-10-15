interface IProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: IProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-500 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500"></div>

      <div className="relative">
        {/* Icon */}
        <div className="flex justify-center mb-4 text-pink-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Value */}
        <div className="text-4xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
          {value}
        </div>

        {/* Label */}
        <div className="text-white/50 text-sm uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatItem;
