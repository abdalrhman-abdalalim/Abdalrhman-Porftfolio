import {
  ResponsiveDesignIcon,
  ReactDevelopmentIcon,
  PerformanceIcon,
  APIIntegrationIcon,
  ComponentLibraryIcon,
  WebAnimationIcon,
} from "./features/Icons/Icons";
import NavigationButton from "./features/NavigationButton/NavigationButton";
import ServiceCard from "./features/ServiceCard/ServiceCard";

interface IProps {}

const ServicesScreen = ({}: IProps) => {
  const services = [
    {
      icon: <ResponsiveDesignIcon />,
      title: "Responsive Web Design",
      description:
        "Designing responsive, mobile-first layouts that adapt perfectly to every device. I ensure smooth and consistent user experiences using modern CSS and Tailwind best practices.",
      link: "#responsive",
    },
    {
      icon: <ReactDevelopmentIcon />,
      title: "React & Next.js Development",
      description:
        "Building scalable, high-performance web applications using React.js, Next.js, and TypeScript — with clean architecture and reusable components.",
      link: "#react",
    },
    {
      icon: <PerformanceIcon />,
      title: "Performance Optimization",
      description:
        "Improving app speed through code splitting, lazy loading, caching, and image optimization. I focus on Core Web Vitals for fast, efficient user experiences.",
      link: "#performance",
    },
    {
      icon: <APIIntegrationIcon />,
      title: "API Integration",
      description:
        "Connecting frontend applications with RESTful or GraphQL APIs using Axios, React Query, or Redux Toolkit Query for smooth data flow and real-time updates.",
      link: "#api",
    },
    {
      icon: <ComponentLibraryIcon />,
      title: "Reusable UI Components",
      description:
        "Creating modular, maintainable design systems using Shadcn, Material UI, or custom-built components to maintain scalability and consistency across large projects.",
      link: "#components",
    },
    {
      icon: <WebAnimationIcon />,
      title: "Web Animations & Motion Design",
      description:
        "Adding life to interfaces through Framer Motion and micro-interactions that enhance engagement while maintaining optimal performance.",
      link: "#animations",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20 px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          {/* Left Side - Title & Navigation */}
          <div className="flex items-center gap-8">
            {/* Vertical Text */}
            <div className="hidden lg:block">
              <p className="text-white/40 text-xs uppercase tracking-widest transform -rotate-90 origin-center whitespace-nowrap">
                Services
              </p>
            </div>

            {/* Title */}
            <div>
              <p className="text-pink-500 text-sm uppercase tracking-wider mb-2">
                — My Services
              </p>
              <h2 className="text-5xl lg:text-6xl font-bold text-white">
                WHAT I'M
                <br />
                OFFERING
              </h2>
            </div>
          </div>

          {/* Right Side - Description & CTA */}
          <div className="max-w-md">
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              I craft modern, performant web applications with clean code,
              responsive design, and scalable architecture. Every project is
              built with precision — from UX to deployment.
            </p>
            <a>
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 uppercase text-sm tracking-wider">
                Let’s Work Together
              </button>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesScreen;
