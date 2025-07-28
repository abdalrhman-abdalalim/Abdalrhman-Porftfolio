interface IProps {}

const BiograhphySection = ({}: IProps) => {
  return (
    <div className="flex flex-col gap-6 my-4">
      <h1 className="font-bold md:text-lg">BIOGRAPHY</h1>
      <p className="text-sm md:text-[15px]">
        I’m Abdalrhman Aboalela, a frontend developer specializing in React,
        Next.js, and TypeScript. With hands-on experience from multiple
        freelance projects and competitive programming (including two ECPC
        participations), I focus on problem-solving and clean code. My goal is
        to advance my skills and secure a stable position in a FANG company,
        contributing to innovative, high-impact products.{" "}
      </p>
      <h6 className="italic text-sm md:text-[15px]">
        Always learning, always building — ready for the next challenge.
      </h6>
    </div>
  );
};

export default BiograhphySection;
