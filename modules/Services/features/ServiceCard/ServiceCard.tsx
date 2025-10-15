interface IProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ description, icon, link, title }: IProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-500 hover:scale-105">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-500"></div>

      <div className="relative">
        {/* Icon */}
        <div className="mb-6 text-white/80 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
