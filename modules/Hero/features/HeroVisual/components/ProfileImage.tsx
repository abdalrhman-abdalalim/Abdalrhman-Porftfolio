import ProfImage from "@/public/last5.png";
import Image from "next/image";

interface IProps {
  className?: string;
}

const ProfileImage = ({ className = "" }: IProps) => {
  return (
    <div className={`group relative ${className}`}>
      {/* Animated Rotating Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-spin-slow"></div>

      {/* Main Image Container - Responsive sizes */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/70 z-10"></div>

        {/* Profile Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={ProfImage}
            alt="Abdalrhman - Frontend Developer"
            fill
            className="object-cover object-center"
            priority
            quality={100}
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
          />
        </div>

        {/* Animated Border Highlight */}
        <div className="absolute inset-0 border-2 border-white/10 rounded-2xl sm:rounded-3xl group-hover:border-white/30 transition-colors duration-500 z-20"></div>

        {/* Corner Accents - Responsive */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg z-20 group-hover:border-cyan-400 group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20 transition-all duration-500"></div>
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-pink-400/50 rounded-tl-lg z-20 group-hover:border-pink-400 group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20 transition-all duration-500"></div>

        {/* Scan Line Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-2000 z-20"></div>
      </div>

      {/* Floating Particles - Responsive positioning */}
      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
      <div className="absolute top-1/4 -left-4 sm:-left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full blur-sm opacity-40 animate-ping"></div>
      <div
        className="absolute top-1/3 -right-4 sm:-right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full blur-sm opacity-40 animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default ProfileImage;
