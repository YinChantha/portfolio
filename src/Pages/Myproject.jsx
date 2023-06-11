import React, { useState } from "react";
import "material-icons/iconfont/material-icons.css";
const Myproject = (prop) => {
  const [navbar, setNavbar] = useState(false);
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
      <div className="relative flex flex-col justify-center h-screen">
        <div className="flex justify-center">
          <div className="w-full md:w-6/12 ">
            <img
              src="src/assets/editor.png"
              className="max-w-full rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-8/12">
            <h1 className="font-abhaya text-gray-400 text-center">
              Experienced video editing, poster designing, photography services
              to clients to Clients Like:
            </h1>
            <p className="font-abhaya text-gray-400 text-center">
              The Enknow a factbook page dedicated to sharing new knowledge
              <br></br> Kirirom Institute Of Technology School
            </p>
            <div className="flex justify-center py-2">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <a
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
    </div>
  );
};

export default Myproject;
