import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'Photoshop', level: 90 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 90 },
    { name: 'React', level: 68 },
    { name: 'Tailwind CSS', level: 80 },
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-12 ">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">My Skills</h2>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
              <div
                className="bg-white h-2 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
