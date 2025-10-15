"use client";
import CaseStudySectionScreen from "@/modules/CaseStudySection/CaseStudySectionScreen";
import ContactSectionScreen from "@/modules/Contact/ContactSectionScreen";
import ExperienceScreen from "@/modules/Experience/ExperienceScreen";
import FooterScreen from "@/modules/Footer/FooterScreen";
import HeroScreen from "@/modules/Hero/HeroScreen";
import ServicesScreen from "@/modules/Services/ServicesScreen";
import TestimonialScreen from "@/modules/Testimonial/TestimonialScreen";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div>
      <HeroScreen onContactClick={scrollToContact} />
      <ServicesScreen />
      <ExperienceScreen />
      <CaseStudySectionScreen />
      <TestimonialScreen />
      <ContactSectionScreen ref={contactRef} />
      <FooterScreen />
    </div>
  );
}
