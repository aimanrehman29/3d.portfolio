import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (<div>
    <footer className="text-center bg-gray-900 text-white py-4">
     
      
      <div className="p-2 w-full  text-center">
          <a className="text-indigo-500">aimanshahzad295@gmail.com</a>
          
          <div className="flex justify-center gap-4 mt-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aiman-rehman-77463b2b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin size={24} color="white" />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/aimanrehman29"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-800 transition duration-300"
        >
          <FaGithub size={24} color="white" />
        </a>
      </div>
         
        </div>
      
        <p className="text-sm mb-2">
        © {new Date().getFullYear()} Aiman Rehman. All rights reserved.
      </p>
    </footer>
   
    </div>
  );
};

export default Footer;


