import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Readmore = () => {
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
      <div className="relative flex md:flex-row flex-col justify-center items-center mt-28 p-6  ">
        <div className="md:w-6/12 w-full">
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="2000"
            style={{ opacity: 0.7 }}
          >
            <img
              src="../assets/sms.png"
              className="md:max-w-full w-7/12 object-contain rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div
          className="md:w-6/12 w-full"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <div className="md:mt-16 mt-3">
            <div>
              <p className="font-abhaya text-gray-400 md:text-start md:text-xl text-center">
                School Management System or SMS is the project training under
                MR. GOTO who is a technical support student in KIT. This
                innovative system empowers schools to efficiently manage their
                students and teachers by seamlessly handling various aspects
                such as student attendance, teacher salaries, teacher
                scheduling, and student scheduling. Built on cutting-edge
                technologies like React.js, Tailwind CSS, Vite, Postgresql, and
                Node, SMS revolutionizes the way educational institutions
                leverage technology to streamline their operations.
              </p>
              <div className="flex md:justify-start justify-center py-2">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 md:text-xl text-sm rounded inline-flex items-center">
                  <a
                    href="https://drive.google.com/file/d/1Sv79ozkSvb8EOxHEzd-bd3cKmZV3Bgx9/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View video
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex md:flex-row flex-col justify-center items-center mt-28 p-6  ">
        <div
          className="md:w-6/12 w-full"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <div className="md:mt-16 mt-3">
            <div className="md:ml-6 ml-0">
              <p className="font-abhaya text-gray-400 md:text-start md:text-xl text-center">
                Web3, a cutting-edge blockchain technology, revolutionizes the
                digital landscape by creating an inclusive marketplace where
                users can buy and sale the trading bots. This groundbreaking
                platform utilizes the secure MetaMask wallet integration,
                powered by a stack of state-of-the-art technologies including
                Next.js, MongoDB, Firebase, Smart Contracts, MaterialUI, and
                React.js.
              </p>
              <div className="flex md:justify-start justify-center py-2">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 md:text-xl text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                  <a href="https://web3-tradingbot.vercel.app/" target="_blank">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <div
            className="flex justify-center"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="2000"
            style={{ opacity: 0.7 }}
          >
            <img
              src="../assets/web3.png"
              className=" object-contain rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative flex md:flex-row flex-col justify-center items-center mt-28 p-6  ">
        <div className="md:w-6/12 w-full">
          <div
            className="flex justify-center"
            data-aos="zoom-in-right"
            data-aos-offset="100"
            data-aos-duration="2000"
            style={{ opacity: 0.7 }}
          >
            <img
              src="../assets/proadvisor.png"
              className="md:max-w-full w-7/12 object-contain rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div
          className="md:w-6/12 w-full"
          data-aos="zoom-out-down"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          <div className="md:mt-0 mt-3">
            <div>
              <p className="font-abhaya text-gray-400 md:text-start md:text-xl text-center">
                ProAdvisor is a comprehensive bootcamp project aimed at
                developing a robust platform that assists users in effortlessly
                discovering the optimal choices for comparing loans, fixed
                deposits, and saving money, leveraging a comprehensive database
                encompassing all banks operating in Cambodia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readmore;
