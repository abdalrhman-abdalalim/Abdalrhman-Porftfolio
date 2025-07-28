import Link from "next/link";

export interface IButtons {
  title: string;
  href: string;
  variatn: "outline" | "black";
}

const Button = ({ href, title, variatn }: IButtons) => {
  return (
    <button
      style={styles.variant[variatn]}
      className={`${styles.base} text-xs sm:text-sm md:text-md lg:text-lg`}
    >
      <Link href={href}>{title}</Link>
    </button>
  );
};

export default Button;
const styles = {
  base: "px-2 py-1 rounded-md font-sm transition-all border", // Base + border
  variant: {
    outline: {
      backgroundColor: "transparent",
      color: "white",
      borderColor: "white",
      hover: "bg-gray-100", // Optional Tailwind hover
    },
    black: {
      backgroundColor: "black",
      color: "white",
      borderColor: "black",
      hover: "bg-gray-800", // Optional Tailwind hover
    },
  },
};
