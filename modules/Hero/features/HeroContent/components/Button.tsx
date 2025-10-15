interface IProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ children, variant = "primary", onClick }: IProps) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300";
  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white",
    secondary:
      "bg-transparent border border-white/30 hover:border-white/60 text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
