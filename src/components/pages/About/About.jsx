import React from "react";
import { SiLeetcode } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Heading from "../../HelperComp/Heading";

const About = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* Heading */}
      <Heading title="About" subtitle="" />

      {/* Details section */}
      <div className="mt-10 text-slate-500">
        <p>
          Hi, I'm Yogesh Kumar, a Full Stack Developer with expertise in Java,
          Spring Boot, Python, React, and Angular. I specialize in creating
          scalable backend services, robust frontend interfaces, and seamless
          API integrations.
          <br />
          <br /> One of my notable projects is an unofficial Cricbuzz app that
          delivers live cricket scores and player stats. I'm currently expanding
          my skills in JavaScript, Python, and DevOps, aiming to build
          high-performance cloud-based solutions.
          <br /> <br /> Outside of coding, I enjoy reading, audiobooks, and
          running. Let's chat about new projects or tech trends!
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <button
            className="social-btn"
            onClick={() =>
              handleLinkClick("https://leetcode.com/u/yash777u/")
            }
          >
            <SiLeetcode size={55} color="#67686b" />
          </button>
          <button
            className="social-btn"
            onClick={() =>
              handleLinkClick("https://x.com/yogesh_kumar_02")
            }
          >
            <BsTwitterX size={48} color="#67686b" />
          </button>
          <button
            className="social-btn"
            onClick={() =>
              handleLinkClick("https://github.com/yash777u")
            }
          >
            <FaGithub size={48} color="#67686b" />
          </button>
          <button
            className="social-btn"
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/yogesh-kumar-83bb891bb/"
              )
            }
          >
            <FaLinkedin size={48} color="#67686b" />
          </button>
        </div>

        {/* Button Link */}
        <div className="flex space-x-4 mt-4">
          <button
            className="primary-btn"
            onClick={() =>
              handleLinkClick("https://example.com/your-resume.pdf")
            }
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
