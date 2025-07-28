interface IProps {
  skill: string;
}

const SkillCard = ({ skill }: IProps) => {
  return (
    <div className="h-fit w-fit bg-white text-black text-sm text-bold p-1 rounded-md hover:bg-black hover:text-white transition-all ease-in-out duration-150 cursor-pointer md:text-[15px]">
      {skill}
    </div>
  );
};

export default SkillCard;
