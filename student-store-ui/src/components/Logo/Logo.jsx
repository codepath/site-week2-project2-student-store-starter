import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    //stores the logo
    <div className="logo">
      <img
        to="/"
        src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
      />
    </div>
  );
};

export default Logo;
