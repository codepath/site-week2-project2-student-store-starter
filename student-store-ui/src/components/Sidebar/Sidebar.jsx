import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faCartPlus, faDollarSign } from "@fortawesome/free-solid-svg-icons";

import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa fa-bars"> </i>
      </label>
      <section style={{ color: "white" }} className="sidebar">
        <div id="infoSidebar" style={{ textAlign: "center" }}>
          <p className="sidebarHeader">
            Shopping Cart <FontAwesomeIcon icon={faCartPlus} bounce />
          </p>
          <span style={{ fontSize: "large" }}>
            No items added to cart yet. Start shopping now!
          </span>
          <br />
          <p className="sidebarHeader">
            Payment Info <FontAwesomeIcon icon={faDollarSign} flip />
          </p>
        </div>
        <form action="search" className="sidebar-label">
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            placeholder="student@codepath.org"
            className="input-sidebar"
          />
        </form>
        <form action="search" className="sidebar-label">
          <label className="sideBarInfo" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="input-sidebar"
            type="email"
            name="email"
            placeholder="Email"
          />
        </form>
        <div id="termSidebar">
          <input style={{ width: "12px", height: "12px" }} type="checkbox" required/>
          <span>
            I agree to the {" "}
            <a
              style={{ color: "var(--light-cp", textDecoration: "none" }}
              href="/"
            >
              terms and conditions
            </a>
          </span>
        </div>
        <button onClick={(e) => e.preventDefault()} id="button-sidebar" type="submit">
          Checkout
        </button>
        <div id="infoSidebar">
          <p className="sidebarHeader">
            Checkout Info <FontAwesomeIcon icon={faListCheck} shake/>
          </p>
          <p style={{ fontSize: "large" }}>
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        </div>
      </section>
    </>
  );
}
