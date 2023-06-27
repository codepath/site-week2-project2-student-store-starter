import * as React from "react";
import "./About.css";
import logo from "../assets/logo.svg";

export default function About() {
  return (
    <section id="about">
      <p className="about-text">
        Welcome to Buy! We're your go-to online store for all your shopping
        needs. With a wide range of products and top-notch quality, we've got
        you covered. Join us today for convenience, variety, and incredible
        deals. <br />
        <br />
        At Buy, we strive to provide an exceptional shopping experience. Our
        user-friendly website and trusted brands ensure a seamless browsing
        experience. Need assistance? Our dedicated customer support team is here
        to help. Shop confidently at Buy and discover the joy of effortless
        online shopping. <br />
        <br />
        Discover convenience, quality, and unbeatable prices at Buy. We update
        our inventory regularly to bring you the latest trends and must-have
        items. With secure payment options and fast delivery, your satisfaction
        is our top priority. Join us today and experience the best of online
        shopping at Buy.
      </p>
      <img className="about-image" src={logo} alt="About image: Logo" />
    </section>
  );
}
