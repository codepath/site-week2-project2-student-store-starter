import * as React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="" />
      </div>
      <div className="socials">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M16.5 4.44313C15.9481 4.68813 15.355 4.85312 14.7325 4.9275C15.3681 4.54688 15.8562 3.94375 16.0856 3.225C15.4913 3.5775 14.8325 3.83375 14.1313 3.97188C13.5706 3.37375 12.77 3 11.885 3C9.89812 3 8.43813 4.85375 8.88688 6.77812C6.33 6.65 4.0625 5.425 2.54438 3.56313C1.73812 4.94625 2.12625 6.75562 3.49625 7.67188C2.9925 7.65562 2.5175 7.5175 2.10312 7.28687C2.06937 8.7125 3.09125 10.0462 4.57125 10.3431C4.13812 10.4606 3.66375 10.4881 3.18125 10.3956C3.5725 11.6181 4.70875 12.5075 6.05625 12.5325C4.7625 13.5469 3.1325 14 1.5 13.8075C2.86188 14.6806 4.48 15.19 6.2175 15.19C11.9312 15.19 15.1594 10.3644 14.9644 6.03625C15.5656 5.60187 16.0875 5.06 16.5 4.44313Z" fill="white"></path>
        </svg>
        <div className="social">
          
          <p>Twitter</p>
        </div>
        <div className="social">
          <p>Instagram</p>
        </div>
        <div className="social">
          <p>Facebook</p>
        </div>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
        <a href="/">Home</a>
        </li>
        <li className="nav-link">
        <a href="/#About">About Us</a>
        </li>
        <li className="nav-link">
        <a href="/#Contact">Contact Us</a>
        </li>
        <li className="nav-link">
        <a href="/#Buy">Buy Now</a>
        </li>

      </ul>
    </nav>
  );
}
