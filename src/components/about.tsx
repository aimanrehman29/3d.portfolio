import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* About Me Section */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center bg-white px-4 py-10 h-auto md:h-[600px] mt-[100px] md:mt-[200px] shadow-lg border-l-2 border-r-2 border-gray-300 rounded-lg md-m-2 lg:m-20"
      >
        {/* Tilt Effect Card */}
        <div className="group w-full md:w-1/2 flex justify-center mb-8 md:mb-0 px-4">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-gray-900 text-white rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={"/images/about.jpg"}
                alt="picture"
                width={300}
                height={80}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* About Me Content */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center md:text-left">
            Who Am I?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center md:text-left">
            I am a passionate web developer focused on building dynamic and
            responsive applications using TypeScript, Next.js, and React. I work
            with HTML, CSS, and Figma to create efficient and visually engaging
            user interfaces. I enjoy crafting clean, maintainable code and
            balancing performance with interactive design. Through continuous
            learning and hands-on projects, I am committed to pushing my
            development skills forward and delivering innovative solutions in
            modern web development.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4 text-center md:text-left">
            Outside of coding, I love exploring 3D design, learning new
            technologies, and working on creative projects that push the
            boundaries of web development.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;