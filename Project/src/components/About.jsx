import React,{useEffect} from "react";
import aos from 'aos'
function About() {
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
    <div>
    <div className="bg-gradient-to-b  text-white py-[170px]  md:px-12 lg:px-24 ">
      <div className="py-[12px] max-w-4xl mx-auto text-center">
        <h2 className="text- text-5xl font-bold mb-10"data-aos="fade-left">
          We're about making a positive impact.
        </h2>
        <p className="text-lg md:text-xl text-gray-200 font-bold  mb-6" data-aos="fade-right">
          Music is usually made to grab your attention, which leads to
          distraction. We create music with a new approach, putting your needs
          first.
        </p>
        <div className="flex items-center justify-center -mt-[450px] md:relative md:top-36  ">
            <img src="anohappy.png" alt = "/" className="-z-10  h-[600px] w-[500px] brightness-50"data-aos="zoom-in"/>
        </div>
      </div>    
    </div>
    <div className="from-[#6b42ff7c] to-[black] text-white py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Mission Section */}
        <div className="flex-1 items-center mt-11 ">
          <div className="flex items-center   space-x-2 "data-aos="fade-left">
            <div className="text-blue-500">
              {/* Mission Icon (can use an icon from an icon library) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold" >Our Mission</h2>
          </div>
          <div data-aos="fade-left">
          <p className="mt-4 text-xl">
            Our mission is to foster creativity and innovation, empowering individuals to express themselves and explore new possibilities.
          </p>
          <p className="mt-2 text-lg text-gray-400" >
            Since our inception, we've focused on providing tools and resources that support growth and discovery. We believe in creating a world where everyone has the opportunity to expand their knowledge and skillset, unlocking potential in ways never thought possible.
          </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex-1 mt-11">
          <div className="flex items-center space-x-2"data-aos="fade-right">
            <div className="text-green-500">
              {/* Vision Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 15.17V13a8 8 0 10-6.938 7.92L9 21h6l1-4h-3" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
          </div>
          <div data-aos="fade-right">
          <p className="mt-4 text-xl">
            Our vision is a future where technology and creativity unite to create experiences that enhance and inspire lives globally.
          </p>
          <p className="mt-2 text-gray-400 text-lg">
            We aim to lead advancements in digital interactions, making them more personalized, immersive, and beneficial for people from all walks of life. By embracing cutting-edge technology and prioritizing inclusivity, we envision a world where everyone can thrive in a dynamic and supportive environment.
          </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}


export default About;
