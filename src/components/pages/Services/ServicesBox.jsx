import React from "react";
import { VscCircuitBoard } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";

const ServicesData = [
  {
    name: "Web Application Development",
    description: "Responsive, high-performance web applications tailored to your needs.",
    icon: <FaLaptopCode className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Backend Development",
    description: "Building scalable, secure backend systems with robust APIs and database integrations to power your applications",
    icon: <VscCircuitBoard className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "API Development and Integration",
    description: "Connect applications with third-party services for seamless communication.",
    icon: <FaShareNodes className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Maintenance and Support",
    description: "Provide maintenance and support to keep applications running smoothly and up-to-date.",
    icon: <FaScrewdriverWrench className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-3">
              {icon}
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
