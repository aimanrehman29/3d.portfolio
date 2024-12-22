"use client"
import Typewriter from 'typewriter-effect';
import Image from 'next/image';

export default function Hero() {
    return (
      <main  id="home" className="bg-gray-100 min-h-screen ">
        {/* Hero Section with Parallax */}
        <section className="relative h-screen overflow-hidden flex flex-col justify-center items-center text-center bg-gray-900 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/background.avif')",
              transform: "translateZ(-10px) scale(1.2)",
            }}
          ></div>
  
          {/* Floating Profile Picture */}
          <div className="relative z-10 animate-float">
            <Image
              src="/images/image (1).png"
              alt="Profile"
              width={200}
              height={200}
              className="w-48 h-48 rounded-full shadow-lg border-4 border-gray-800"
            />
          </div>
          <h1 className="relative z-10 text-3xl font-bold mt-6 mb-4">
            Hi, I am Aiman Rehman
          </h1>
          <h1 className="relative z-10 text-5xl font-bold mt-2 mb-4">
          <Typewriter
           options={{
              strings: ['Frontend Developer', 'UI/UX Designer','Figma Specialist','React & Next.js Specialist'],
              autoStart: true,
             loop: true,
                }}
           />
          </h1>
          <p className="relative z-10 text-lg max-w-xl mt-4">
          Frontend Developer and UI/UX Designer crafting seamless user experiences with Figma, React, and Next.js.
          </p>
        </section>
  
       
  
       
      </main>
  
      
    );
  }
 
  