import * as React from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="navbar">
      <CodePathIcon />
      <TwitterIcon />
      <InstaGramIcon />
      <FacebookIcon />
      <CustomLink page="Home" id="home"  />
      <CustomLink page="About Us" id="about-us" />
      <CustomLink id= "contact-us" page="Contact Us" />
      <CustomLink id= "buy" page="Buy Now"/>
    </nav>
  );
}

export function CodePathIcon() {
  return (
    <div className="codepath-icon">
      <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"></img>
    </div>
  );
}
export function InstaGramIcon() {
  return (
    <div className="twitter-icon">
      <i className="fab fa-instagram"></i>
    </div>
  );
}

export function TwitterIcon() {
  return (
    <div className="twitter-icon">
      <i className="fab fa-twitter"></i>
    </div>
  );
}

export function FacebookIcon() {
  return (
    <div className="twitter-icon">
      <i className="fab fa-facebook-f"></i>
    </div>
  );
}

export function CustomLink({  page,id }) {
  return (
    <div className="page-icon">
    <Link   activeClass="active"
    to={id}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className={page}>{page}</Link>
    </div>
  );
}
