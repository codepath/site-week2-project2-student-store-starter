import * as React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa fa-bars"> </i>
      </label>
      <section className="sidebar">
        <p>Sidebar</p>
      </section>
    </>
  );
}
