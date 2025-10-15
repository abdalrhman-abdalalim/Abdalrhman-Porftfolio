import DecorativeIcon from "./features/DecorativeIcon/DecorativeIcon";
import ExperienceItem from "./features/ExperienceItem/ExperienceItem";

interface IProps {}

const ExperienceScreen = ({}: IProps) => {
  const experiences = [
    {
      number: "1",
      title: "Founder & Frontend Developer",
      company: "Kernel Tech",
      location: "Remote (Founder Project)",
      duration: "FOUNDER / DEVELOPER",
      years: "2024 – Present",
    },
    {
      number: "2",
      title: "Founder & Frontend Developer",
      company: "Barcode Store",
      location: "Remote (Freelance Project)",
      duration: "FOUNDER / DEVELOPER",
      years: "2025 – Present",
    },
    {
      number: "3",
      title: "Freelance Frontend Developer",
      company: "Remote",
      location: "Worldwide",
      duration: "REMOTE",
      years: "2024 – Present",
    },
    {
      number: "4",
      title: "Mentor (C++ & Problem Solving)",
      company: "ICPC Sohag Community",
      location: "Egypt",
      duration: "VOLUNTEER",
      years: "2024 – Present",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20 px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/10 to-purple-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full"></div>

      {/* Decorative Icon */}
      <DecorativeIcon />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6">
            <svg
              className="w-8 h-8 text-pink-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            EXPERIENCE
          </h2>
          <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
            A journey of creating and leading impactful projects — from founding
            startups like{" "}
            <span className="text-pink-400 font-semibold">Kernel Tech</span> and{" "}
            <span className="text-pink-400 font-semibold">Barcode Store</span>{" "}
            to mentoring others in tech communities. Each step reflects growth,
            leadership, and a passion for innovation.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              number={exp.number}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              duration={exp.duration}
              years={exp.years}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceScreen;
