import { projects } from "./data/data";
import DecorativeGrid from "./features/DecorativeGrid/DecorativeGrid";
import DecorativeLines from "./features/DecorativeLines/DecorativeLines";
import ProjectCard from "./features/ProjectCard/ProjectCard";

interface IProps {}

const CaseStudySectionScreen = ({}: IProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 py-20 px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-500/10 to-purple-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full"></div>

      {/* Decorative Elements */}
      <DecorativeGrid />
      <DecorativeLines />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 rotate-12">
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-pink-500"
                ></div>
              ))}
            </div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            MY PROJECT
          </h2>
          <p className="text-white/50 text-sm max-w-2xl mx-auto leading-relaxed">
            Explore a curated collection of innovative and best-executed
            projects that show the creative process from concept to solution,
            highlighting strategy, design thinking, and measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              liveSite={project.liveSite}
              key={index}
              category={project.category}
              title={project.title}
              image={project.image}
              layout={project.layout}
              index={index}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 uppercase text-sm tracking-wider shadow-xl shadow-pink-500/20">
            <span className="flex items-center gap-3">
              View All Projects
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySectionScreen;
