// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaHtml5 } from "react-icons/fa"; // Importing an icon from react-icons
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiKubernetes } from "react-icons/si";
import { VscTerminalLinux } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import Heading from "../../HelperComp/Heading";

const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10">
      <div>
        {/* heading */}
        <div>
          <div className="pt-9 pb-3">
            <Heading title="Skills" />
          </div>
        </div>
        {/* skills section */}
        <div className="flex justify-center space-x-10 mt-10">
          <div className="flex flex-col items-center">
            <FaHtml5 size={70} color="red" />{" "}
            {/* Using an icon from react-icons */}
            <span className="mt-2 text-lg">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <RiTailwindCssFill size={70} style={{ color: "#38B2AC" }} />
            <span className="mt-2 text-lg">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center">
            <FaGitAlt size={70} style={{ color: "#f9421a" }} />
            <span className="mt-2 text-lg">Git </span>
          </div>

          <div className="flex flex-col items-center">
            <SiSpringboot size={70} style={{ color: "#36ef15" }} />
            <span className="mt-2 text-lg">SpringBoot </span>
          </div>
        </div>

        {/* Line 2 */}

        <div className="flex justify-center space-x-10 mt-10">
          <div className="flex flex-col items-center">
            <SiHibernate size={70} color="grey" />{" "}
            {/* Using an icon from react-icons */}
            <span className="mt-2 text-lg">Hibernate</span>
          </div>
          <div className="flex flex-col items-center">
            <FaAngular size={70} style={{ color: "#f12211" }} />
            <span className="mt-2 text-lg">Angular</span>
          </div>

          <div className="flex flex-col items-center">
            <FaReact size={70} color="#61dbfb" />{" "}
            {/* Using an icon from react-icons */}
            <span className="mt-2 text-lg">React</span>
          </div>

          <div className="flex flex-col items-center">
            <SiMysql size={70} style={{ color: "#0590fd" }} />
            <span className="mt-2 text-lg">MYSQL </span>
          </div>
        </div>

        {/* 3rd line skills */}
        <div className="flex justify-center space-x-10 mt-10">
          <div className="flex flex-col items-center">
            <BiLogoPostgresql size={70} color="#0590fd" />{" "}
            {/* Using an icon from react-icons */}
            <span className="mt-2 text-lg">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <SiKubernetes size={70} style={{ color: "#3970e4 " }} />
            <span className="mt-2 text-lg">Kubernates</span>
          </div>

          <div className="flex flex-col items-center">
            <VscTerminalLinux size={70} style={{ color: "black" }} />
            <span className="mt-2 text-lg">Linux</span>
          </div>

          <div className="flex flex-col items-center">
            <FaDocker size={70} style={{ color: "#31a3ea" }} />
            <span className="mt-2 text-lg">Docker </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
