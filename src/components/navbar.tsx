"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiReadCvLogoLight } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const handleButtonClick = () => {
  window.open("https://milstone-1-2-rho.vercel.app/", "_blank");
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0">
      <header  className=" bg-gray-800 text-gray-600 body-font  ">
        <div className="container mx-auto flex flex-wrap p-2 items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900">
            <div className="group relative">
              <Image
                src="/images/image1.png"
                alt="Icon description"
                width={60}
                height={60}
                className=" text-white bg-bl-500 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-focus:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center text-white">
            <Link href={"#home"} className="mr-10 hover:text-gray-300 hover:underline">
              <b>Home</b>
            </Link>
            <Link href={"#about"} className="mr-10 hover:text-gray-300 hover:underline">
              <b>About</b>
            </Link>
            <Link href={"#project"} className="mr-10 hover:text-gray-300 hover:underline">
              <b>Projects</b>
            </Link>
            <Link href={"#education"} className="mr-10 hover:text-gray-300 hover:underline">
              <b>Education</b>
            </Link>
            <Link href={"#contact"} className="mr-10 hover:text-gray-300 hover:underline">
              <b>Contact</b>
            </Link>
          </nav>
          <button
            onClick={handleButtonClick}
            className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded-full text-base mt-4 md:mt-0"
          >
            My CV <PiReadCvLogoLight />
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose size={30} />
              ) : (
                <AiOutlineMenu size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-black text-white py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link href={"#home"} className="hover:text-gray-300 hover:underline">
                <b>Home</b>
              </Link>
              <Link href={"#about"} className="hover:text-gray-300 hover:underline">
                <b>About</b>
              </Link>
              <Link href={"#project"} className="hover:text-gray-300 hover:underline">
                <b>Projects</b>
              </Link>
              <Link href={"#education"} className="hover:text-gray-300 hover:underline">
                <b>Education</b>
              </Link>
              <button 
                onClick={handleButtonClick}
                className="bg-gray-900 inline-flex items-center bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 "
              >
                My CV <PiReadCvLogoLight />
              </button>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
