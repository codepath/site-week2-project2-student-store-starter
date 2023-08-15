import * as React from "react";
import "./About.css";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <>
      <h2 id="about-container">About</h2>
      <div id="about">
        <div className="about-info">
          <p>
            The codepath student store offers great products at great prives
            from a great team and for a great cause. <br /> <br />
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place. <br /> <br />
            All proveeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
        <Logo prop={"about-logo"} />
      </div>
      <h2 id="contact">Contact Us</h2>
      <div className="contact">
        <div id="socials">
          <span>
            Email: &emsp;&emsp; &ensp;{" "}
            <span className="span-contact"> pelumi@codepath.com</span>
          </span>
          <br />
          <br />
          <span>
            Phone: &emsp;&emsp;&ensp;{" "}
            <span className="span-contact">1-800-CALLME </span>
          </span>{" "}
          <br />
          <br />
          <span>
            Address: &emsp;&ensp;{" "}
            <span className="span-contact">
              123 Fake Street, San Francisco, CA
            </span>
          </span>
          <br />
          <br />
          <span>
            Socials: &emsp;&ensp;
            <a
              className="nav-link"
              href="https://www.facebook.com/codepath.org/"
            >
              <FontAwesomeIcon icon={fab.faFacebook} size="xl" />{" "}
            </a>
            <a
              className="nav-link"
              href="https://www.instagram.com/pelumiumi/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
            >
              <FontAwesomeIcon icon={fab.faInstagram} size="xl" />{" "}
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/oluwapelumi-tayo-orisadare/"
            >
              <FontAwesomeIcon icon={fab.faLinkedinIn} size="xl" />{" "}
            </a>
            <a className="nav-link" href="https://twitter.com/codepath">
              <FontAwesomeIcon icon={fab.faTwitter} size="xl" />{" "}
            </a>
          </span>
        </div>
        <img
          id="contact-img"
          src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"
        />
      </div>
      <div className="all-footer">
        <div className="footer">
          <p className="words">
            <span className="bold">Categories</span> <br /> <br /> <br />
            All Categories <br /> <br />
            Clothing <br />
            <br />
            Food <br />
            <br />
            Accessories <br />
            <br />
            Tech <br />
            <br />
          </p>
          <p className="words">
            <span className="bold">Company</span> <br /> <br /> <br />
            About Us <br />
            <br />
            Find a Store <br />
            <br />
            Terms <br />
            <br />
            Sitemap <br />
            <br />
            Careers <br />
            <br />
          </p>
          <p className="words">
            <span className="bold">Support</span> <br />
            <br /> <br />
            Contact Us <br />
            <br />
            Money Refund <br />
            <br />
            Order Status <br />
            <br />
            Shipping Info <br />
            <br />
            Open Dispute <br />
            <br />
          </p>
          <p className="words">
            <span className="bold">Account</span> <br />
            <br /> <br />
            Login <br />
            <br />
            Register <br />
            <br />
            Account Setting <br />
            <br />
            My Orders <br />
            <br />
          </p>
          <p className="words">
            <span className="bold">Socials</span> <br />
            <br /> <br />
            Facebook <br />
            <br />
            Twitter <br />
            <br />
            LinkedIn <br />
            <br />
            Instagram <br />
            <br />
            YouTube <br />
            <br />
          </p>
          <p className="words">
            <span className="bold">Our App</span>
            <br /> <br /> <br />
            <img
              className="downloads"
              src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"
            />
            <br /> <br />
            <img
              className="downloads"
              src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"
            />
          </p>
        </div>
        <div className="cards">
          <img
            className="payment"
            src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg"
          />
          <img
            className="payment"
            src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg"
          />
          <img
            className="payment"
            src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg"
          />
          <img
            className="payment"
            src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg"
          />
        </div>
      </div>
    </>
  );
}
