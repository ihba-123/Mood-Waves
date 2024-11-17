import React from "react";
import { NavLink } from "react-router-dom";

const buttonClass = "px-6 py-4 text-sm md:text-lg relative top-12 font-semibold text-black bg-white rounded-full hover:bg-gray-300 transition";
const researchButtonClass = "inline-block px-8 py-3 text-sm md:text-base font-semibold text-white bg-gray-700 rounded-full hover:bg-gray-600 transition";
const sectionClass = "relative flex items-center justify-center text-center -top-20 h-[90vh] w-full ";

function OurScience() {
  return (
    <div>
      {/* First Section */}
      <div className="relative h-[800px] flex flex-col items-center justify-center bg-gradient-to-b text-center py-2 overflow-hidden max-h-full -z-50">
        {/* Background Image */}
        <div className="absolute top-28 left-0 w-full h-full overflow-hidden -z-10">
          <img src="Waves.png" alt="Waves" className=" w-full saturate-200  object-cover h-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl bottom-36">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Unlock the Power of Sound
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            Discover how frequencies can enhance your focus, relaxation, and overall well-being. Experience sound like never before.
          </p>
          <NavLink to="/SignIn" className={buttonClass}>
            Start Your Journey
          </NavLink>
        </div>
      </div>

      {/* Second Section with Glass Effect */}
      <div className={`${sectionClass} p-0  bg-[#16061b] `}>
        <div className="absolute inset-0 bg-gradient-to-b-z-10 " />

        {/* Content Box with Glass Effect */}
        <div className="relative z-10 max-w-2xl py-32 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white border-b-transparent">
          <h2 className="text-lg md:text-xl font-semibold text-gray-300 p-2 relative -top-20">
            How do we know Sonic Vibes works?
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 relative -top-10">
            Research-backed sound therapy
          </h1>
          <p className="text-sm md:text-base text-gray-400 mb-6 relative -top-7">
            Our carefully crafted sound frequencies are designed to help improve mood, focus, and relaxation. Through research, we ensure that Sonic Vibes offers a scientifically validated experience that enhances well-being and overall mental clarity.
          </p>
          <NavLink to="https://www.nature.com/articles/s42003-024-07026-3" className={researchButtonClass}>
            Read the Latest Research
          </NavLink>
        </div>
        </div>
    </div>
  );
}

export default OurScience;
