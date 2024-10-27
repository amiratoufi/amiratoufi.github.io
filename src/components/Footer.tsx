import React, { useState } from "react";
import menuItems from "../data/menu.json";
import { SiResearchgate } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center bg-neutral-900 text-center text-white">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center">
          <a
            href="https://www.researchgate.net/profile/Amir-Atoufi"
            className="inline-block mr-2 p-2 border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500"
          >
            <SiResearchgate className="w-6 h-5 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/amir-atoufi-1893b668/?originalSubdomain=uk"
            className="inline-block mr-2 p-2 border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-blue-700"
          >
            <FaLinkedinIn className="w-6 h-5 text-white" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=ovEPf9sAAAAJ&hl=en"
            className="inline-block mr-2 p-2 border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-blue-700"
          >
            <SiGooglescholar className="w-6 h-5 text-white" />
          </a>
          <a
            href="https://github.com/amiratoufi"
            className="inline-block mr-2 p-2 border-2 border-white rounded-full transition-all duration-300 ease-in-out hover:bg-blue-700"
          >
            <IoLogoGithub className="w-6 h-5 text-white" />
          </a>
        </div>
      </div>

      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {currentYear} Copyright
        {/* <a className="text-white" href="#">
          Amir Atoufi
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
