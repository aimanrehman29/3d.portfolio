"use client";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Education = () => {
  const educationData = [
    {
      degree: "SSC (MATRICULATION)",
      school: "AA Tutors Academy ",
      schooldetail:"with A+ grade (90%)",
      schooledu:"in computer science ",
      year: "2021-22",
    },
    {
      degree: "HSC (INTERMEDIATE)",
      school: "Khatoon-e-Pakistan College",
      schooldetail:"with grade (50%)",
      schooledu:"in pre-engineering",
      year: " 2023-24",
    },
  ];

  return (<div id="education" className="py-24 ">
    <div  className="relative py-16 bg-gray-900 text-white overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotateX: -10,
                rotateY: 10,
                transition: { duration: 0.5 },
              }}
              className="p-8 bg-gray-800 rounded-lg shadow-2xl relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-30"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold underline">{item.degree}</h3>
                <p className="text-lg mt-2">{item.school}</p>
                <p className="text-lg mt-2">{item.schooldetail}</p>
                <p className="text-lg mt-2">{item.schooledu}</p>
                <p className="text-sm mt-4 opacity-70">{item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Education;
