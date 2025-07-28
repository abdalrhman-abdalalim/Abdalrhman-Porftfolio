"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data";

const WorkSection = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="w-full h-screen relative group">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="h-full w-full transition-all duration-500"
      >
        {projectsData.map((project, index) => (
          <SwiperSlide
            key={`project-${project.title}`}
            className="flex items-center justify-center relative "
          >
            <div className="transition-transform duration-500">
              <ProjectCard
                CoverImg={project.CoverImg}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                technologies={project.technologies}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSection;
