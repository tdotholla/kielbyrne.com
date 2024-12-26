// components/AboutSection.tsx
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="/assets/profile.jpg" // Replace with your image path
              alt="Kiel Byrne"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </div>
          {/* Content */}
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4">
              Hello! I'm Kiel Byrne, a passionate software developer, systems
              engineer, and voice actor. My journey in the tech world began with
              a curiosity for building innovative solutions that make a
              difference. Over the years, I've honed my skills in developing web
              applications, managing IT systems, and lending my voice to various
              projects.
            </p>
            <p className="mb-4">
              Beyond my professional pursuits, I have a deep interest in
              financial literacy, metaphysics, and community building. I believe
              in the power of knowledge and the importance of fostering strong,
              supportive communities.
            </p>
            <p>
              Family is at the core of my life. I'm a proud parent to two
              wonderful sons, who inspire me daily to balance my professional
              endeavors with personal fulfillment. Together, we explore new
              ideas, embark on adventures, and support each other's dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
