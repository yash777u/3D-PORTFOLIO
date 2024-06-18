import React from 'react';
import sapLogo from '../../../assets/saplabs.png'; 
import iintmLogo from '../../../assets/iintm.jpeg';
import Heading from "../../HelperComp/Heading";
// Adjust the path as per your directory structure

const Experience = () => {
  const experiences = [
    {
      role: "Associate Developer Intern",
      company: "SAP Labs",
      period: "July 2022 to Sept 2022",
      logo: sapLogo,
    },
    {
      role: "Summer Training Advance Java",
      course: "IINTM Janakpuri",
      period: "July 2022",
      logo:iintmLogo,
    },
  ];

  return (
    <div className="h-full bg-white px-10 py-6">
      <div>
        {/* Heading */}
        <div className="pt-9 pb-3">
            <Heading title="Experince" />
          </div>
        {/* Experience Section */}
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <div key={index} className="p-6 border-b border-gray-200 flex items-center space-x-6">
              {experience.logo && (
                <img src={experience.logo} alt="Company Logo" className="w-16 h-16 object-contain" />
              )}
              <div>
                <h2 className="text-2xl font-semibold">{experience.role}</h2>
                <h3 className="text-xl text-gray-600">{experience.company || experience.course}</h3>
                <p className="text-lg text-gray-500">{experience.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
