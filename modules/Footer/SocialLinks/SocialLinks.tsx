interface IProps {
  label: string;
  href: string;
}

const SocialLinks = ({ href, label }: IProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-white/60 hover:text-white transition-colors duration-300"
    >
      <span className="text-sm font-medium">{label}</span>
      {/* Underline Animation */}
      <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
    </a>
  );
};

export default SocialLinks;
