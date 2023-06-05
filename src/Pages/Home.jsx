import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('src/assets/bg.jpg')",
      }}
    >
      <div className="absolute bg-gradient-to-bl from-violet-900 inset-0 opacity-100"></div>
      <div className="absolute bg-gradient-to-br from-gray-900 inset-0 opacity-100"></div>
      <div className="absolute bg-gradient-to-tr from-gray-900 inset-0 opacity-100"></div>
      <div className=" relative flex flex-col md:flex-row justify-center h-screen items-center ">
        <div className="absolute bg-gradient-to-tr from-gray-800 inset-0 opacity-100"></div>
        <div className="w-full md:w-3/12 flex flex-col md:items-start items-center max-sm:w-4/12 ">
          <div>
            <h1 className="font-abhaya font-semibold text-5xl text-white">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Yin Chantha").start();
                }}
              />
            </h1>
          </div>
          <div className="mt-4">
            <p className="font-abhaya text-gray-200">
              <Typewriter
                options={{
                  strings: [" WEBSITE DEVELOPER, MOBILE DEVELOPER, DESIGNER."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center w-8/12 md:w-5/12 py-20 md:py-0 max-sm:py-6">
          <div className="flex flex-col" >
            <div>
              <img
                src="src/assets/profile.jpg"
                class="rounded-full shadow-sm shadow-amber-50 outline outline-1 md:w-80 md:h-80 max-md:w-72 max-md:h-72 max-sm:w-40 max-sm:h-40"
                alt="profile"
              />
            </div>
            <div className="flex gap-6 justify-center mt-4" style={{ zIndex: 1 }}>
              <Link
                to="https://www.linkedin.com/in/chantha-yin-a68a61203/"
                target="_blank"
              >
                <svg
                  className="cursor-pointer"
                  width="29"
                  height="29"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9681 49H0.809375V16.2852H10.9681V49ZM5.88328 11.8226C2.63484 11.8226 0 9.13192 0 5.88341C2.32509e-08 4.32303 0.619844 2.82657 1.72317 1.72321C2.8265 0.619858 4.32294 0 5.88328 0C7.44362 0 8.94006 0.619858 10.0434 1.72321C11.1467 2.82657 11.7666 4.32303 11.7666 5.88341C11.7666 9.13192 9.13063 11.8226 5.88328 11.8226ZM48.9891 49H38.8522V33.0746C38.8522 29.2792 38.7756 24.412 33.5705 24.412C28.2887 24.412 27.4794 28.5355 27.4794 32.8012V49H17.3316V16.2852H27.0747V20.7478H27.2169C28.5731 18.1774 31.8861 15.4649 36.8288 15.4649C47.11 15.4649 49 22.2353 49 31.0293V49H48.9891Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link to="https://www.facebook.com/chan.tha.7731" target="_blank">
                <svg
                  className="cursor-pointer"
                  width="29"
                  height="29"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M49 24.6491C49 11.0325 38.0343 0 24.5 0C10.9657 0 0 11.0325 0 24.6491C0 36.9518 8.9593 47.1493 20.6719 49V31.7745H14.4481V24.6491H20.6719V19.2183C20.6719 13.0412 24.3271 9.62905 29.9256 9.62905C32.6067 9.62905 35.4104 10.1101 35.4104 10.1101V16.173H32.3202C29.2775 16.173 28.3281 18.0733 28.3281 20.0224V24.6491H35.1229L34.0362 31.7745H28.3281V49C40.0407 47.1493 49 36.9518 49 24.6491Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link to="https://github.com/YinChantha" target="_blank">
                <svg
                  className="cursor-pointer"
                  width="29"
                  height="29"
                  viewBox="0 0 50 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.7238 39.4547C16.7238 39.6574 16.4919 39.8195 16.1996 39.8195C15.8669 39.8499 15.6351 39.6878 15.6351 39.4547C15.6351 39.2521 15.8669 39.09 16.1593 39.09C16.4617 39.0596 16.7238 39.2217 16.7238 39.4547ZM13.5887 38.9988C13.5181 39.2014 13.7198 39.4345 14.0222 39.4953C14.2843 39.5966 14.5867 39.4953 14.6472 39.2926C14.7077 39.09 14.5161 38.8569 14.2137 38.7657C13.9516 38.6948 13.6593 38.7961 13.5887 38.9988ZM18.0444 38.8265C17.752 38.8975 17.5504 39.09 17.5806 39.323C17.6109 39.5257 17.873 39.6574 18.1754 39.5864C18.4677 39.5155 18.6694 39.323 18.6391 39.1204C18.6089 38.9279 18.3367 38.7961 18.0444 38.8265ZM24.6774 0C10.6956 0 0 10.6692 0 24.7225C0 35.9591 7.03629 45.5746 17.0867 48.9587C18.377 49.1918 18.8306 48.3913 18.8306 47.7327C18.8306 47.1045 18.8004 43.6393 18.8004 41.5116C18.8004 41.5116 11.744 43.0314 10.2621 38.4922C10.2621 38.4922 9.1129 35.5437 7.45968 34.7838C7.45968 34.7838 5.15121 33.193 7.62097 33.2234C7.62097 33.2234 10.131 33.4261 11.5121 35.8375C13.7198 39.7486 17.4194 38.6239 18.8609 37.9552C19.0927 36.334 19.748 35.2093 20.4738 34.5406C14.8387 33.9124 9.15323 33.0917 9.15323 23.3446C9.15323 20.5582 9.91936 19.16 11.5323 17.3767C11.2702 16.7181 10.4133 14.0027 11.7944 10.4969C13.9012 9.83835 18.75 13.2326 18.75 13.2326C20.7661 12.6652 22.9335 12.3714 25.0806 12.3714C27.2278 12.3714 29.3952 12.6652 31.4113 13.2326C31.4113 13.2326 36.2601 9.82822 38.3669 10.4969C39.748 14.0128 38.8911 16.7181 38.629 17.3767C40.2419 19.1701 41.2298 20.5683 41.2298 23.3446C41.2298 33.1221 35.2923 33.9023 29.6573 34.5406C30.5847 35.3411 31.371 36.8609 31.371 39.242C31.371 42.6565 31.3407 46.8816 31.3407 47.7125C31.3407 48.371 31.8044 49.1715 33.0847 48.9384C43.1653 45.5746 50 35.9591 50 24.7225C50 10.6692 38.6593 0 24.6774 0ZM9.79839 34.9459C9.66734 35.0472 9.69758 35.2803 9.86895 35.4728C10.0302 35.6349 10.2621 35.7058 10.3931 35.5741C10.5242 35.4728 10.494 35.2397 10.3226 35.0472C10.1613 34.8851 9.92943 34.8142 9.79839 34.9459ZM8.70968 34.1252C8.63911 34.2569 8.73992 34.419 8.94153 34.5204C9.10282 34.6217 9.30444 34.5913 9.375 34.4494C9.44556 34.3177 9.34476 34.1556 9.14314 34.0543C8.94153 33.9935 8.78024 34.0239 8.70968 34.1252ZM11.9758 37.7323C11.8145 37.864 11.875 38.1679 12.1069 38.3605C12.3387 38.5935 12.631 38.6239 12.7621 38.4618C12.8931 38.3301 12.8327 38.0261 12.631 37.8336C12.4093 37.6005 12.1069 37.5701 11.9758 37.7323ZM10.8266 36.2428C10.6653 36.3441 10.6653 36.6076 10.8266 36.8406C10.9879 37.0737 11.2601 37.175 11.3911 37.0737C11.5524 36.9419 11.5524 36.6785 11.3911 36.4455C11.25 36.2124 10.9879 36.1111 10.8266 36.2428Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
