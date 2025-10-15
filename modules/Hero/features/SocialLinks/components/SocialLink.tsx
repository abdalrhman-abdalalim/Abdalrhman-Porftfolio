import Link from "next/link";
import { IconType } from "react-icons";

interface IProps {
  icon: IconType;
  label: string;
  href: string;
}

const SocialLink = ({ href, icon: Icon, label }: IProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-lg" />
      <span className="text-xs uppercase">{label}</span>
      <div className="w-0 group-hover:w-8 h-px bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300"></div>
    </Link>
  );
};

export default SocialLink;
