import React from 'react';
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/all";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className = "p-4 bg-[#0F172A]">
      <div className = "flex justify-between items-center mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <span className = "text-white">
          <a 
            className = "hover:cursor-pointer hover:text-blue-600 transition duration-150 ease-out hover:ease-in font-bold"
            href = "https://github.com/SinugbangIsda/"
          >
            @Marcu Operario
          </a>
        </span>
        <span className = "text-white">
          Listify © { currentYear }
        </span>
        <div className = "flex flex-row justify-center items-center space-x-5">
          <FaInstagram
            className = "text-white text-2xl hover:text-[#CB2770] transition duration-150 ease-out hover:ease-in hover:cursor-pointer hover:-translate-y-1 hover:scale-110"
          />
          <FaTwitter 
            className = "text-white text-2xl hover:text-[#1C99E6] transition duration-150 ease-out hover:ease-in hover:cursor-pointer hover:-translate-y-1 hover:scale-110"
          />
          <FaDiscord
            className = "text-white text-2xl hover:text-[#5460E6] transition duration-150 ease-out hover:ease-in hover:cursor-pointer hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer;