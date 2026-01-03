import {
  ClientsIcon,
  ProjectsIcon,
  ReviewsIcon,
  YearsIcon,
} from "./features/ProjectsIcon/ProjectIcon";
import StatItem from "./features/StatItem/StatItem";
import TestimonialCard from "./features/TestimonialCard/TestimonialCard";

interface IProps {}

const TestimonialScreen = ({}: IProps) => {
  const stats = [
    {
      icon: <ProjectsIcon />,
      value: "8",
      label: "Projects Completed",
    },
    {
      icon: <ClientsIcon />,
      value: "8",
      label: "Happy Clients",
    },
    {
      icon: <YearsIcon />,
      value: "02",
      label: "Years Experience",
    },
    {
      icon: <ReviewsIcon />,
      value: "8",
      label: "5-Star Reviews",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-16 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-500/10 to-purple-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-white/70 text-xs uppercase tracking-widest">
                Client Feedback
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              What Clients Say
            </h2>
            <p className="text-white/60 text-sm max-w-md">
              Trusted by developers and teams from leading organizations
            </p>
          </div>

          {/* Expand Icon */}
          <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center group shrink-0">
            <svg
              className="w-5 h-5 text-white/70 group-hover:text-pink-500 transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
        </div>

        {/* Testimonial Cards Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Abdelrahman Abdelsamie Hussain */}
          <TestimonialCard
            quote="I had the pleasure of working with Abdalrhman Aboalela, a talented Frontend Developer specialized in Next.js, on several real-world projects including Barcode Store, Kernel Tech, Ramen Pharma, and Wonder Makers. He consistently demonstrated strong technical skills, creativity, and a problem-solving mindset."
            author="Abdelrahman Abdelsamie Hussain"
            role="Software Engineer | Full Stack Web Developer"
          />

          {/* Ahmed Youssef Abu Elmaged */}
          <TestimonialCard
            quote="I had the pleasure of working with Abdalrhman as part of the Fas7ni graduation project, where he led the Front-End team. He is hardworking, reliable, and demonstrates excellent leadership and time management skills."
            author="Ahmed Youssef Abu Elmaged"
            role="Data Scientist | AI Engineer"
          />

          {/* Aya Mohammed */}
          <TestimonialCard
            quote="Abdalrhman was a valuable member of our graduation project team at Sohag University. He consistently showed strong technical skills, a collaborative spirit, and an impressive problem-solving ability."
            author="Aya Mohammed"
            role="Backend Developer | Mentor at ICPC Sohag University"
          />

          {/* Abdelrahman Mahmoud */}
          <TestimonialCard
            quote="It was a true pleasure to work alongside Abdalrhman on our graduation project 'Fas7ni'. He was dedicated and consistent in giving his best until the very end. His technical skills and knowledge were a great support to our team."
            author="Abdelrahman Mahmoud"
            role="AI Engineer"
          />

          {/* Ahmed Lotfi */}
          <TestimonialCard
            quote="As the team leader of the Fas7ni project, I had the opportunity to work closely with Abdalrhman for over a year. He is a highly skilled frontend developer with a strong sense of responsibility, excellent problem-solving, and clean code practices."
            author="Ahmed Lotfi"
            role="Frontend Developer | ITI 9-Month Trainee"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialScreen;
