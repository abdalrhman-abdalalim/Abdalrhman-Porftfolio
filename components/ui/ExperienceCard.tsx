export interface IExperience {
  title: string;
  description: string;
  duration: string;
  company?: string;
}

export const ExperienceCard = ({
  title,
  description,
  duration,
  company,
}: IExperience) => {
  return (
    <div className="space-y-2">
      <h1 className="bg-black p-2 text-white font-bold">{title}</h1>
      <p className="italic text-sm">{description}</p>
      <h6 className="text-xs text-red-200">{duration}</h6>
      {company && <h6 className="bg-black text-white p-1">{company}</h6>}
    </div>
  );
};
