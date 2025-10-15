interface IProps {
  text: string;
}

const SkillBadge = ({ text }: IProps) => {
  return (
    <div className="relative transform ">
      <div className="absolute inset-0  transform "></div>
      <div className="relative px-6 py-2 text-white font-bold uppercase text-sm tracking-wider">
        {text}
      </div>
    </div>
  );
};

export default SkillBadge;
