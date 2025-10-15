import ProfImage from "@/public/last5.png";
import Image from "next/image";

interface IProps {
  className?: string;
  imageSize?: number;
}

const ProfileImage = ({ className = "", imageSize = 384 }: IProps) => {
  return (
    <div className={`group ${className}`}>
      {/* Animated Glow Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 rounded-2xl transform rotate-3 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div> */}

      {/* Secondary Glow Layer */}
      {/* <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500 via-pink-500 to-orange-500 rounded-2xl transform -rotate-6 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div> */}

      {/* Main Image Container */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500"
        style={{ width: imageSize, height: imageSize }}
      >
        {/* Color Overlay - Dramatic Split Lighting */}

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/70 z-10"></div>

        {/* Top Light Streak */}
        {/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/20 to-transparent z-10 group-hover:from-white/30 transition-all duration-500"></div> */}

        {/* Profile Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={ProfImage}
            alt="Madhu - Product Designer"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
        </div>

        {/* Border Highlight */}
        <div className="absolute inset-0 border-2 border-white/10 rounded-2xl group-hover:border-white/20 transition-colors duration-500 z-20"></div>

        {/* Corner Accent */}
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg z-20 group-hover:border-cyan-400 transition-colors duration-500"></div>
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-pink-400/50 rounded-tl-lg z-20 group-hover:border-pink-400 transition-colors duration-500"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute -top-4 -right-4 w-3 h-3 bg-cyan-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
      <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-pink-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
      <div className="absolute top-1/4 -left-6 w-2 h-2 bg-purple-400 rounded-full blur-sm opacity-40 animate-ping"></div>
    </div>
  );
};

export default ProfileImage;
