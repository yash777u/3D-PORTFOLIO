import React, { useState, useEffect } from "react";
import certificate1Img from "../../../assets/certificate/Yogesh_Kumar_2.jpg";
import certificate2Img from "../../../assets/certificate/Yogesh_Kumar.jpg";
import certificate3Img from "../../../assets/certificate/Barclay.png";
import certificate4Img from "../../../assets/certificate/COP.png";
import certificate5Img from "../../../assets/certificate/ITCLUB.png";
import certificate6Img from "../../../assets/certificate/Swayam.png";

import Heading from "../../HelperComp/Heading";

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    { id: 1, image: certificate1Img, name: "Certificate 1" },
    { id: 2, image: certificate2Img, name: "Certificate 2" },
    { id: 3, image: certificate3Img, name: "Certificate 3" },
    { id: 4, image: certificate4Img, name: "Certificate 4" },
    { id: 5, image: certificate5Img, name: "Certificate 5" },
    { id: 6, image: certificate6Img, name: "Certificate 6" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change certificate every 5 seconds

    return () => clearInterval(interval);
  }, [certificates.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="h-full page-shadow bg-white px-10">
      <div className="pt-9 pb-3">
        <Heading title="Certificates" />
      </div>
      <div className="relative w-full" data-carousel="static">
        {/* Carousel wrapper */}
        <div className="relative h-96 overflow-hidden rounded-lg">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className={`absolute w-full h-full duration-700 ease-in-out transform ${
                currentIndex === index ? "" : "translate-x-full"
              }`}
              data-carousel-item={currentIndex === index ? "active" : ""}
            >
              <img
                src={certificate.image}
                alt={certificate.name}
                className="absolute block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center mt-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 mx-1 rounded-full ${
                currentIndex === index
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
