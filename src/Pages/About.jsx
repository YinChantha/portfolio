import React from "react";
import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat">
      <div className="absolute bg-gradient-to-bl from-violet-900 inset-0 opacity-100"></div>
      <div className="absolute bg-gradient-to-br from-gray-900 inset-0 opacity-100"></div>
      <div className="absolute bg-gradient-to-tr from-gray-900 inset-0 opacity-100"></div>
      <div className=" relative flex flex-col md:flex-row justify-center h-screen items-center gap-x-10 ">
        <div className="absolute bg-gradient-to-tr from-gray-800 inset-0 opacity-100 z-0"></div>
        <div className="w-8/12 md:w-5/12 flex flex-col justify-center gap-y-4 md:mt-0 mt-8 ">
          <div>
            <h1 className="font-abhaya font-semibold text-6xl text-white">
              <Typewriter
                options={{
                  strings: ["About Me!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="flex flex-col gap-y-4 ">
            <p className="font-abhaya text-white">
              Highly motivated and skilled Software Engineering student seeking
              challenging opportunities to apply my extensive internship
              experience and proficiency in designing, mobile, and web
              development using cutting-edge technologies.
            </p>
            <h1 className="font-abhaya font-semibold text-white">
              Bachelor of Science in Software Engineering ( Expected Graduation:
              [October, 2023] )<br></br>[Kirirom Institute Of Technology],
              [Kampong Speu, Cambodia]
            </h1>
          </div>
          <div style={{ zIndex: 1 }}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <a
                href="src/assets/YIN_CHANTHA_CV.pdf"
                download
              >
                Download My CV
              </a>
            </button>
          </div>
        </div>
        <div className="w-8/12 md:w-5/12 py-10 md:py-0">
          <img
            src="src/assets/aboutmee.jpg"
            class="h-auto max-w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
