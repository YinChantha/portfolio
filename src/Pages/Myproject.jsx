import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "material-icons/iconfont/material-icons.css";
import { data } from "../Data/data";
import Barmyproject from "../Components/Barmyproject";
const Myproject = (prop) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="absolute inset-0">
      <div className="dark:divide-y dark:divide-gray-700">
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
      </div>
      <Barmyproject />
    </div>
  );
};

export default Myproject;
