"use client";
interface IProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  disabled: boolean;
}

const ServiceTag = ({ label, onClick, selected, disabled }: IProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        selected
          ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30 scale-105"
          : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
      }`}
    >
      {label}
    </button>
  );
};

export default ServiceTag;
