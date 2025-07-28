import Button from "@/components/ui/Button";
import { buttonData } from "@/data";

interface IProps {}

const ButtonSection = ({}: IProps) => {
  return (
    <div className="flex gap-4 items-center w-full">
      {buttonData.map((but, index) => (
        <Button
          href={but.href}
          title={but.title}
          key={index}
          variatn={but.variatn}
        />
      ))}
    </div>
  );
};

export default ButtonSection;
