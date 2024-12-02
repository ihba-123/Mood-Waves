import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';

function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,      
      delay: 200,       
      duration: 1000,   
      easing: 'ease',   
      once: true,       
      mirror: false, 
      });
  },[])
  return (
    <div className="lg:px-[110px]  px-6 flex flex-col-reverse md:flex-row items-center justify-center" data-AOS="fade-up">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-400 via-green-500 to-purple-600 bg-clip-text text-transparent"data-AOS="fade-right">
            Scientifically crafted music to boost
          </span>{" "}
          your focus and productivity
        </h1>
        <p className="text-slate-400 text-xl font-medium mb-8"data-AOS="fade-right">
          Each sound is a step toward inner peace, a bridge between the emotions
          you feel and the tranquility you seek.
        </p>
        <NavLink to={"/GoogleLogin"}>
          <button
            type="button"
            className="bg-[#3a3ab8fd] hover:bg-[#4285F4]/90 text-white font-medium rounded-lg text-sm px-5 py-3 inline-flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center" data-AOS="zoom-in">
        <img
          src="happypic.png"
          alt="Happy People"
          className="w-[80%] max-w-[500px] lg:w-[700px] relative bottom-10"
        />
      </div> 
    </div>
  );
}

export default Home;
