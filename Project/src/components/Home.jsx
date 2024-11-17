import React from "react";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className=" lg:px-[120px] lg:mt-[200px] md:px-12 sm:w-[100%] ">
      <div className="  md:mr-28 ">
        <img
          src="img3.png"
          alt="#"
          className="xl:drop xl:h-[620px] md:absolute md:right-3 md:top-16 lg:w-[6=700px] lg:h-[500px] md:w-66 md:h-96  h-[550px] md:-z-10 ] "
        />
        <h1 className="lg:pr-0 md:text-4xl lg:relative lg:bottom-20 lg:-left-20 lg:w-[50vw] md:w-[500px] lg:text-5xl text-center mt-20 font-bold  text-4xl  ">
          Scientifically crafted music to boost your focus and productivity
        </h1>
        <p className="pt-9 lg:relative lg:-top-20 lg:right-16  text-xl md:w-[48vw]  text-slate-400 lg:text-xl sm:text-gray-400  font-bold text-center ">
          
          Each sound is a step toward inner peace, a bridge between the emotions
          you feel and the tranquility you seek.
        </p>
      </div>
      <NavLink to={"/GoogleLogin"}>
        <button
          type="button"
          className=" xl:ml-16 xl:px-6 xl:py-4 lg:relative lg:bottom-16 lg:left-[95px] sm:relative md:absolute md:left-52  sm:left-56    text-white mt-5 ml-[100px] sm:ml-0 bg-[#3a3ab8fd] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm  px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
        >
          <svg
            className="  w-4 h-4 me-2"
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
  );
}

export default Home;
