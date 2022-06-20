import * as React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <span className = "section">
          <h4 className = "footer-header">Categories</h4>
          <p className ="footer-body">All Categories</p>
          <p className ="footer-body">Clothing</p>
          <p className ="footer-body">Food</p>
          <p className ="footer-body">Accessories</p>
          <p className ="footer-body">Tech</p>
        </span>
        <span className = "section">
          <h4 className = "footer-header">Company</h4>
          <p className ="footer-body">About Us</p>
          <p className ="footer-body">Find a Store</p>
          <p className ="footer-body">Terms</p>
          <p className ="footer-body">Sitemap</p>
          <p className ="footer-body">Career</p>
        </span>
        <span className = "section">
          <h4 className = "footer-header">Support</h4>
          <p className ="footer-body">Contact Us</p>
          <p className ="footer-body">Money Refund</p>
          <p className ="footer-body">Order Status</p>
          <p className ="footer-body">Shipping Info</p>
          <p className ="footer-body">Open Dispute</p>
        </span>
        <span className = "section">
          <h4 className = "footer-header">Account</h4>
          <p className ="footer-body">Login</p>
          <p className ="footer-body">Register</p>
          <p className ="footer-body">Account Setting</p>
          <p className ="footer-body">My Orders</p>
        </span>
        <span className = "section">
          <h4 className = "footer-header">Socials</h4>
          <p className ="footer-body">Facebook</p>
          <p className ="footer-body">Twitter</p>
          <p className ="footer-body">LinkedIn</p>
          <p className ="footer-body">Instagram</p>
          <p className ="footer-body">Youtube</p>
        </span>
        <span className = "section">
          <h4 className = "footer-header">Our App</h4>
          <p><i class="fa-brands fa-google-play"></i></p>
          <p><i class="fa-brands fa-app-store"></i></p>
        </span>
        
      </div>
      <div className = "payment-logos">
        <ul className = "payment-list">
          <li className = "pay-logo">
            <i className="fa-brands fa-cc-paypal fa-xl"></i>
          </li>
          <li className = "pay-logo">
            <i className="fa-brands fa-cc-visa fa-xl"></i>
          </li>
          <li className = "pay-logo">
            <i className="fa-brands fa-cc-mastercard fa-xl"></i>
          </li>
          <li className = "pay-logo">
            <i className="fa-brands fa-cc-discover fa-xl"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}
