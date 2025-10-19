interface IProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ children, variant = "primary", onClick }: IProps) => {
  const baseStyles =
    "w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base relative overflow-hidden group";

  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-pink-500/50",
    secondary:
      "bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 hover:bg-white/10 text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-white/30 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
