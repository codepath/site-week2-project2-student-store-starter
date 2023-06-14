import * as React from "react";
import logo from "../../images/code_path_logo.jpeg";
import "./Logo.css";

export default function Logo({ prop }) {
  return (
    <div className={prop}>
      <img src={logo} alt="image of code path logo" />
    </div>
  );
}
