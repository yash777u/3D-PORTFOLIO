import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading title="About" subtitle="" />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
          Postgraduate Student in MCA specializing in Spring Boot, React.js,
          Hibernate, Git, and REST APIs. I excel in building secure and
          efficient Java applications, leveraging strong skills in data
          structures and algorithms. I'm eager to apply my expertise in
          real-world projects and contribute to innovative solutions. Let's
          connect and explore opportunities together!
        </p>{" "}
        <br />
        <p></p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <a
            href="https://www.facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <MdFacebook />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://github.com/yash777u"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yogesh-kumar-83bb891bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <AiFillLinkedin />
          </a>
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
