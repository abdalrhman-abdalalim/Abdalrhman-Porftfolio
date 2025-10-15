import Image, { StaticImageData } from "next/image";
import CategoryBadge from "../CategoryBadge/CategoryBadge";

interface IProps {
  category: string;
  title: string;
  image: StaticImageData | string;
  layout: "left" | "right";
  index: number;
  description: string;
  technologies: string[];
  liveSite?: string;
}

const ProjectCard = ({
  category,
  image,
  index,
  layout,
  title,
  description,
  liveSite,
  technologies,
}: IProps) => {
  const isLeft = layout === "left";

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center ${
        isLeft ? "" : "lg:grid-flow-dense"
      }`}
    >
      {/* Image Side */}
      <div className={`${isLeft ? "" : "lg:col-start-2"} group relative`}>
        <div className="relative rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg lg:shadow-2xl">
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

          {/* Project Image */}
          <div className="relative w-full rounded-lg lg:rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
          </div>

          {/* Hover Border */}
          <div className="absolute inset-0 border border-transparent group-hover:border-pink-500/30 rounded-xl lg:rounded-2xl transition-colors duration-500 z-20"></div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-xl lg:blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      </div>

      {/* Content Side */}
      <div
        className={`${
          isLeft ? "" : "lg:col-start-1 lg:row-start-1"
        } space-y-3 lg:space-y-4`}
      >
        <CategoryBadge text={category} />

        <h3 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight">
          {title}
        </h3>

        {/* Description Section */}
        <div className="space-y-3 lg:space-y-4">
          <p className="text-white/70 leading-relaxed text-xs sm:text-sm lg:text-base">
            {description}
          </p>

          {/* Technologies Used */}
          <div className="space-y-2 lg:space-y-3">
            <div className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span className="font-medium">Technologies Used</span>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 rounded-full text-white/70 text-xs sm:text-sm border border-white/10 hover:border-pink-500/30 hover:text-white transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
          {liveSite && (
            <a
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <button className="group/btn inline-flex items-center gap-2 sm:gap-3 text-white/70 hover:text-white transition-colors duration-300 w-full sm:w-auto justify-center sm:justify-start">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Live Demo
                </span>
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover/btn:bg-pink-500/20 transition-colors duration-300 flex-shrink-0">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/btn:translate-x-0.5 sm:group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </button>
            </a>
          )}

      
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
