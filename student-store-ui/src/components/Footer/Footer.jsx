import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* //displays the footer */}
      <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h4>Categories</h4>
                <ul>
                  <br></br>
                  <li>Clothing</li>
                  <br></br>
                  <li>Food</li>
                  <br></br>
                  <li>Accessories</li>
                  <br></br>
                  <li>Tech</li>
                  <br></br>
                </ul>
              </div>
              <div className="link-colmn">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <br></br>
                  <li>Find a Store</li>
                  <br></br>
                  <li>Terms</li>
                  <br></br>
                  <li>Sitemap</li>
                  <br></br>
                  <li>Careers</li>
                  <br></br>
                </ul>
              </div>
              <div className="link-colmn">
                <h4>Support</h4>
                <ul>
                  <li>Contact Us</li>
                  <br></br>
                  <li>Money Refund</li>
                  <br></br>
                  <li>Order Status</li>
                  <br></br>
                  <li>Shipping Info</li>
                  <br></br>
                  <li>Open Dispute</li>
                  <br></br>
                </ul>
              </div>
              <div className="link-colmn">
                <h4>Account</h4>
                <ul>
                  <li>Login</li>
                  <br></br>
                  <li>Register</li>
                  <br></br>
                  <li>Account Setting</li>
                  <br></br>
                  <li>My Orders</li>
                  <br></br>
                </ul>
              </div>
              <div className="link-colmn">
                <h4>Socials</h4>
                <ul>
                  <li>Facebook</li>
                  <br></br>
                  <li>Twitter</li>
                  <br></br>
                  <li>Linkedln</li>
                  <br></br>
                  <li>Instagram</li>
                  <br></br>
                  <li>Youtube</li>
                  <br></br>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
