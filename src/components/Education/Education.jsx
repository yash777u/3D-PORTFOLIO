import React from "react";
import Heading from "../HelperComp/Heading";

const Education = () => {
  const educationData = [
    {
      title: "Manav Rachna International Institute of Research and Studies",
      subtitle: "2023 - 2025",
      description: "MCA",
      image: "/path/to/image2.jpg"
    },
    {
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "2020 - 2023",
      description: "BCA",
      image: "/path/to/image1.jpg"
    },
    {
      title: "Kendriya Vidyalaya AFS Tugalkabad",
      subtitle: "2020",
      description: "High School",
      image: "/path/to/image3.jpg"
    }
  ];

  return (
    <div>
      <div className="pt-9 pb-3">
        <Heading title="Education" />
      </div>
      <div className="flex flex-col items-center space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="max-w-sm bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg dark:bg-gray-100 dark:text-black dark:border-gray-200"
          >
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {edu.title}
                </h5>
              </a>
              {edu.subtitle && (
                <p className="mb-2 font-medium">
                  {edu.description} ({edu.subtitle})
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
