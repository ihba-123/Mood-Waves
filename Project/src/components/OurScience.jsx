import React from "react";
import { NavLink } from "react-router-dom";
const researchButtonClass =
  "inline-block px-8 py-3 text-sm  relative  top-9 md:text-base font-semibold text-black font-bold bg-gray-200 rounded-full hover:bg-gray-600 transition z-50 ";
const sectionClass =
  "relative flex items-center justify-center  text-center -top-[100px] h-[100vh] w-full ";

function OurScience() {
  const data = [
    { label: "Resting", color: "from-blue-500 to-blue-300" },
    { label: "Pink Noise", color: "from-pink-500 to-pink-300" },
    { label: "Average Music", color: "from-green-500 to-green-300" },
    { label: "SonicVibes", color: "from-purple-600 to-orange-400" },
  ];
  return (
    <div>
      {/* First Section */}
      <div className="relative h-[800px] flex flex-col items-center justify-center bg-gradient-to-b text-center py-2 overflow-hidden max-h-full -z-50 ">
        {/* Background Image */}
        <div className="absolute top-28 left-0 w-full h-full overflow-hidden -z-10">
          <img
            src="Waves.png"
            alt="Waves"
            className=" w-full saturate-200  object-cover h-full z-10"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl bottom-36">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Unlock the Power of Sound
          </h1>
          <p className="text-lg text-gray-300 mt-6">
            Discover how frequencies can enhance your focus, relaxation, and
            overall well-being. Experience sound like never before.
          </p>
        </div>
      </div>

      {/* Second Section with Glass Effect */}
      <div className={`${sectionClass} p-0 `}>
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
            Our carefully crafted sound frequencies are designed to help improve
            mood, focus, and relaxation. Through research, we ensure that Sonic
            Vibes offers a scientifically validated experience that enhances
            well-being and overall mental clarity.
          </p>
          <NavLink
            to="https://www.nature.com/articles/s42003-024-07026-3"
            className={researchButtonClass}
          >
            Read the Latest Research
          </NavLink>
        </div>
      </div>
      <div className="h-[2px] bg-gray-200 mx-12 "></div>
      <div className=" text-white px-6 py-12 md:py-20 md:px-16 bg-[#000000b6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
          {/* Text Section */}
          <div className="flex-1 ">
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
              Electrical activity in the brain: EEG studies
            </h2>
            <p className="text-gray-400 text-center ">
              Electroencephalography measures fluctuations in electrical current
              at the scalp, showing rhythmic brain activity ("brainwaves") and
              how this kind of activity shifts in response to Sonic Vibes music.
            </p>
          </div>

          {/* Visual Section */}
        </div>
      </div>
      <div className="bg-[#000000b6] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl text-center uppercase text-gray-400 tracking-wider mb-10">
            Sonic Vibes' Research and Methods
          </h2>
          <h1 className="text-4xl font-bold mb-8 text-center">
            Read Our Science
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-gray-800  to-black p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold m-2">
                Rapid modulation in music supports attention in listeners with
                attentional difficulties
              </h3>
              <p className="text-sm text-gray-400 mb-7">
                Woods, KJP, Sampaio, G., James, T., Przysinda, E., Spencer, A.,
                Hewett, A., Spencer, A., Morillon, B., & Loui, P. (2024)
              </p>
              <NavLink
                to="https://www.nature.com/articles/s42003-024-07026-3"
                className="text-sm font-bold text-pink-500 hover:underline flex items-center"
              >
                READ ARTICLE <span className="ml-2">&rarr;</span>
              </NavLink>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">
                Modulation in background music influences sustained attention
              </h3>
              <p className="text-sm text-gray-400 mb-16">
                Woods, KJP, Hewett, A., Spencer, A., Morillon, B., & Loui, P.
                (2019)
              </p>
              <NavLink
                to="https://arxiv.org/abs/1907.06909"
                className="text-sm font-bold text-pink-500 hover:underline flex items-center"
              >
                READ ARTICLE <span className="ml-2">&rarr;</span>
              </NavLink>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-b from-gray-800 to-black p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">
                Headphone screening to facilitate web-based auditory experiments
              </h3>
              <p className="text-sm text-gray-400 mb-20">
                Woods, KJP, et al. (2018)
              </p>
              <NavLink
                to="https://link.springer.com/article/10.3758/s13414-017-1361-2"
                className="text-sm font-bold text-pink-500 hover:underline flex items-center"
              >
                READ ARTICLE <span className="ml-2">&rarr;</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000b6] text-white py-10 px-5 md:px-20 lg:px-40">
        <div className="text-center md:text-left">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Brainwave patterns: SonicVibes EEG studies
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            SonicVibes explores how different sound frequencies influence
            brainwave patterns, measured through electroencephalography (EEG).
            Observe how our frequencies create more focused and relaxed brain
            states compared to traditional noise.
          </p>
        </div>

        {/* EEG Circles and Labels */}
        <div className="flex flex-col items-center md:flex-row justify-around gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Dynamic Circle */}
              <div
                className={`h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 rounded-full bg-gradient-to-br ${item.color}`}
              ></div>
              <p className="text-lg font-semibold mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Phase Locking Bar */}
        <div className="mt-10">
          <div className="flex justify-between items-center text-sm md:text-base text-gray-400">
            <span>Low Focus</span>
            <span>Moderate Focus</span>
            <span>High Focus</span>
            <span>Peak Focus</span>
          </div>
          <div className="h-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500"></div>
          <p className="text-center text-gray-500 text-sm mt-2">
            EEG focus measurement over a 5-minute session.
          </p>
        </div>
      </div>
      <div className="bg-gray-950 p-4 min-h-screen">
        <div className="max-w-7xl mx-auto h-max px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
              How we work?
            </h2>
            <p className="text-gray-300">
              We follow our process to get you started as quickly as possible
            </p>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {[
              {
                title: "How Sonic Vibes Works?",
                description:
                  "Sonic Vibes uses the power of sound frequencies to help you shift your mood. Here’s how it works:",
                iconPath: "M10 10l2 -2v8",
              },
              {
                title: "  Mood Selection",
                description:
                  "  Select your current mood, such as Relaxed, Focused, or Energetic.",
                iconPath:
                  "M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3",
              },
              {
                title: " Frequency Analysis",
                description:
                  "  Based on your selection, the app matches your mood to scientifically backed sound frequencies.",
                iconPath:
                  "M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1",
              },
              {
                title: "Personalized Audio",
                description:
                  "  Listen to curated playlists and soundscapes designed to elevate your mood.",
                iconPath: "M10 8v3a1 1 0 0 0 1 1h3 M14 8v8",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
              >
                <div className="relative space-y-8 py-12 p-8">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    color="white"
                    style={{ color: "white" }}
                    height="50"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                    <path d={item.iconPath} />
                  </svg>
                  <div className="space-y-2">
                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                      {item.title}
                    </h5>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurScience;
