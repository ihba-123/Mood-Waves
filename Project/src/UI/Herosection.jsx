import React, { useEffect } from "react";
import aos from 'aos';

function Home() {
  useEffect(() => {
    aos.init({
      offset: 200,      
      delay: 200,       
      duration: 1000,   
      easing: 'ease',   
      once: true,       
      mirror: false, 
      });
  },[])
  return (
    <div className="lg:px-[110px]  px-6 flex flex-col-reverse md:flex-row items-center justify-center" data-aos="fade-up">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-400 via-green-500 to-purple-600 bg-clip-text text-transparent"data-aos="fade-right">
            Scientifically crafted music to boost
          </span>{" "}
          your focus and productivity
        </h1>
        <p className="text-slate-400 text-xl font-medium mb-8"data-aos="fade-right">
          Each sound is a step toward inner peace, a bridge between the emotions
          you feel and the tranquility you seek.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center" data-aos="zoom-in">
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
