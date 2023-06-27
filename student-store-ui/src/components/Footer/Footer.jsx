import React from "react";
import "./Footer.css";
import playStore from "../assets/play-store.svg";
import appleStore from "../assets/app-store.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="links">
        <div class="link-column">
          <h4>Categories</h4>
          <ul className="link-content">
            <li>All Categories</li>
            <li>Clothing</li>
            <li>Food</li>
            <li>Accessories</li>
            <li>Tech</li>
          </ul>
        </div>
        <div class="link-column">
          <h4>Company</h4>
          <ul className="link-content">
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Careers</li>
          </ul>
        </div>
        <div class="link-column">
          <h4>Support</h4>
          <ul className="link-content">
            <li>Contact Us</li>
            <li>Money Refund</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Open Dispute</li>
          </ul>
        </div>
        <div class="link-column">
          <h4>Account</h4>
          <ul className="link-content">
            <li>Login</li>
            <li>Register</li>
            <li>Account Setting</li>
            <li>My Orders</li>
          </ul>
        </div>
        <div class="link-column">
          <h4>Socials</h4>
          <ul className="link-content">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div class="link-column">
          <h4>Our App</h4>
          <ul className="link-content">
            <li>
              <img className="app-store" src={appleStore} alt="app store" />
            </li>
            <li>
              <img
                className="play-store"
                src={playStore}
                alt="google play store"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
