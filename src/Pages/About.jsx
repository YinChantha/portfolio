import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute bg-gradient-to-bl from-violet-900 inset-0 opacity-100"></div>
      <div className="absolute bg-gradient-to-br from-gray-900 inset-0 opacity-100"></div>
      <div className="absolute bg-gradient-to-tr from-gray-900 inset-0 opacity-100"></div>
      <div className=" relative flex flex-col md:flex-row md:justify-between md:p-28 p-0 justify-center h-screen items-center ">
        <div className="absolute bg-gradient-to-tr from-gray-800 inset-0 opacity-100 z-0"></div>
        <div className="w-11/12 md:w-6/12 flex flex-col gap-y-4 md:mt-0 mt-12">
          <div>
            <h1 className="font-abhaya font-semibold text-4xl md:text-6xl text-white">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("About Me").start();
                }}
              />
            </h1>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="font-abhaya text-xl text-white">
              Highly motivated and skilled Software Engineering student seeking
              challenging opportunities to apply my extensive internship
              experience and proficiency in designing, mobile, and web
              development using cutting-edge technologies.
            </p>
            <h1 className="font-abhaya text-xl font-semibold text-white">
              Bachelor of Science in Software Engineering ( Expected Graduation:
              [October, 2023] )<br></br>[Kirirom Institute Of Technology],
              [Kampong Speu, Cambodia]
            </h1>
          </div>
          <div style={{ zIndex: 1 }}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <a href="../assets/YIN_CHANTHA_CV.pdf" download>
                Download My CV
              </a>
            </button>
          </div>
        </div>
        <div className="w-11/12 md:w-6/12 py-3 md:py-0 md:ml-2 ml-0 ">
          <img
            src="../assets/aboutmee.jpg"
            className="max-w-full rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
