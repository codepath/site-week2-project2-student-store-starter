import * as React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <CodePathIcon />
      <TwitterIcon />
      <InstaGramIcon />
      <FacebookIcon />
      <CustomLink page="Home"  />
      <CustomLink page="About Us" scrollto={0} scrollFrom={2200} />
      <CustomLink scrollto={0} scrollFrom={2500} page="Contact Us" />
      <CustomLink page="Buy Now"/>
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

export function CustomLink({ scrollTo,scrollFrom, page }) {
  return (
    <div className="page-icon">
      <div onClick={() => window.scrollTo(scrollTo,scrollFrom)} className={page}>{page}</div>
    </div>
  );
}
