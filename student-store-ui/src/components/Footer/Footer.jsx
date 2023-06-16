
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='Footer'>
      <div className='column'>
        <h3>Categories</h3>
        <p>All Categories</p>
        <p>Clothing</p>
        <p>Food</p>
        <p>Accessories</p>
        <p>Tech</p>
      </div>
      <div className='column'>
        <h3>Company</h3>
        <p>About Us</p>
        <p>Find The Store</p>
        <p>Terms</p>
        <p>Site Map</p>
        <p>Careers</p>
      </div>
      <div className='column'>
        <h3>Support</h3>
        <p>Contact Us</p>
        <p>Money Refund</p>
        <p>Order Status</p>
        <p>Shipping Info</p>
        <p>Open Dispute</p>
      </div>
      <div className='column'>
        <h3>Account</h3>
        <p>Login</p>
        <p>Register</p>
        <p>Account Settings</p>
        <p>My Orders</p>
      </div>
      <div className='column'>
        <h3>Socials</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Youtube</p>
      </div>
    </footer>
  );
}

export default Footer;
