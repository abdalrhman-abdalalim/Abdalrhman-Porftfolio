import WorkTimeLine from "./WorkTimeLine";

interface IProps {}

const ExperinceSection = ({}: IProps) => {
  return (
    <div className="flex flex-col gap-6 pb-46">
      <h1 className="font-bold">EXPERIENCE</h1>
      <WorkTimeLine />
    </div>
  );
};

export default ExperinceSection;
