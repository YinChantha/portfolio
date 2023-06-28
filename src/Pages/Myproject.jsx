import React, { useEffect } from "react";
import "material-icons/iconfont/material-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";
const Myproject = (prop) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="absolute inset-0 w-full">
      <div
        className="fixed inset-0 bg-gradient-to-bl from-violet-900 opacity-100"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="fixed inset-0 bg-gradient-to-br from-gray-700 opacity-100"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="fixed inset-0 bg-gradient-to-tr from-gray-900 opacity-100"
        style={{ zIndex: -1 }}
      ></div>
      <div
        className="fixed inset-0 bg-gradient-to-tr from-black opacity-25"
        style={{ zIndex: -1 }}
      ></div>
      <div className="relative flex flex-col justify-center mt-36 ">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-offset="200"
          className="flex justify-center"
        >
          <div className="w-full md:w-6/12 ">
            <img
              src="../assets/editor.png"
              className="max-w-full rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div
          data-aos-duration="1000"
          data-aos="fade-down"
          className="flex justify-center"
        >
          <div className="w-8/12">
            <h1 className="font-abhaya text-xl text-gray-400 text-center">
              Experienced video editing, poster designing, photography services
              to Clients Like:
            </h1>
            <p className="font-abhaya text-xl text-gray-400 text-center">
              The Enknow a factbook page dedicated to sharing new knowledge
              <br></br> Kirirom Institute Of Technology School
            </p>
            <div className="flex justify-center py-2">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <a
                  className="text-xl"
                  href="https://drive.google.com/drive/u/1/folders/1jUZZN0ORbMr2q5wjM0wJRBM0MiBNmtpP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View drive
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Marquee direction="right" speed={100}>
        <div className="flex gap-5 mt-12">
          <div className="image_wrapper">
            <img
              className="md:w-full md:h-32 h-20"
              src="../assets/react.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              className="md:w-full md:h-32 h-20"
              src="../assets/node.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              className="md:w-full md:h-32 h-20"
              src="../assets/firebase.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              className="md:w-full md:h-32 h-20"
              src="../assets/boostrap.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              className="md:w-full md:h-24 h-20"
              src="../assets/mongo.png"
              alt=""
            />
          </div>
          <div className="image_wrapper">
            <img
              className="md:w-full md:h-32 h-20"
              src="../assets/tailwind.png"
              alt=""
            />
          </div>
        </div>
      </Marquee>

      <div className="relative flex md:flex-row flex-col justify-center items-center h-screen p-6  ">
        <div className="md:w-6/12 w-full">
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="2000"
            style={{ opacity: 0.7 }}
          >
            <img
              src="../assets/developer.png"
              className="md:max-w-full w-7/12 object-contain rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          className="md:w-6/12  flex justify-center "
        >
          <div className="md:mt-0 mt-6">
            <h1 className="font-abhaya font-semibold text-gray-400 md:text-4xl text-lg mb-6 md:ml-0 ml-3 ">
              Experience working on development projects
            </h1>
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-row  gap-1 md:gap-4 md:ml-0 ml-3">
                <div class="xl:w-6 xl:h-6 w-2 h-1 bg-gray-500 rounded-full mt-3 xl:mt-0"></div>
                <p className="font-abhaya text-xl text-gray-400 ">
                  Web 3 trading bot marketplace where users can buy and sell
                  trading bots.{""}
                  <a
                    href="https://github.com/theanlay/Web3-Tradingbot-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    {" "}
                    GitHub
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://web3-tradingbot.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Demo
                  </a>
                </p>
              </div>
              <div className="flex flex-row gap-1 md:gap-4 md:ml-0 ml-3">
                <div class="xl:w-6 flex xl:h-6 w-2 h-1 bg-gray-500 rounded-full mt-3 xl:mt-0"></div>
                <p className="font-abhaya text-gray-400 text-xl ">
                  School Management System for schools where they can manage
                  their students, teachers,and staff.{" "}
                  <a
                    href="https://github.com/incubation-center/Electron-DesktopApp---Group7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>
              <div className="flex flex-row  gap-1 md:gap-4 md:ml-0 ml-3">
                <div class="xl:w-6 flex xl:h-6 w-2 h-1 bg-gray-500 rounded-full mt-3 xl:mt-0"></div>
                <p className="font-abhaya text-gray-400 text-xl ">
                  Proadvisor provides services to users to help them understand
                  loans and compare loan options from <br></br> different banks
                  in Cambodia.{" "}
                  <a
                    href="https://github.com/incubation-center/B8-FullStack--Website--Group4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
            <div className="flex md:justify-start justify-center md:mt-3 mt-3">
              <button className="bg-gray-300 hover:bg-gray-400 md:text-xl text-md text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <a href="myprojects">Read More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;
