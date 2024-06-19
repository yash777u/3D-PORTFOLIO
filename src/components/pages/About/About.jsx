import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import Heading from "../../HelperComp/Heading";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const handleLinkClick = (e) => {
    e.stopPropagation();
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
          <a
            href="mailto:yogesh.kumar.02@proton.me"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            onClick={handleLinkClick}
          >
            <IoIosMail size={55} color="#67686b" />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            onClick={handleLinkClick}
          >
            <BsTwitterX size={48} color="#67686b" />
          </a>
          <a
            href="https://github.com/yash777u"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            onClick={handleLinkClick}
          >
            <FaGithub size={48} color="#67686b" />
          </a>
          <a
            href="https://www.linkedin.com/in/yogesh-kumar-83bb891bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            onClick={handleLinkClick}
          >
            <FaLinkedin size={48} color="#67686b"/>
          </a>
        </div>

        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn" onClick={handleLinkClick}>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
