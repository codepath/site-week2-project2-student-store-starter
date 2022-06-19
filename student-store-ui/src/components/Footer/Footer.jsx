import './Footer.css'
import paypal from '../assets/paypal.svg'
import mastercard from '../assets/mastercard.svg'
import google from '../assets/google.svg'
import app_store from '../assets/app_store.svg'
import visa from '../assets/visa.svg'
import american_express from '../assets/american_express.svg'


export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h4 className='h4'>Categories</h4>
                <ul className="ul">
                  <li className="lists">All Categories</li>
                  <li className="lists">Clothing</li>
                  <li className="lists">Food</li>
                  <li className="lists">Accessories</li>
                  <li className="lists">Tech</li>
                </ul>
              </div>
              <div className="link-column">
                <h4 className='h4'>Company</h4>
                <ul className="ul">
                  <li className="lists">About Us</li>
                  <li className="lists">Find a Store</li>
                  <li className="lists">Terms</li>
                  <li className="lists">Sitemap</li>
                  <li className="lists">Careers</li>
                </ul>
              </div>
              <div className="link-column">
                <h4 className='h4'>Support</h4>
                <ul className="ul">
                  <li className="lists">Contact Us</li>
                  <li className="lists">Money Refund</li>
                  <li className="lists">Order Status</li>
                  <li className="lists">Shipping Info</li>
                  <li className="lists">Open Dispute</li>
                </ul>
              </div>
              <div className="link-column">
                <h4 className='h4'>Account</h4>
                <ul className="ul">
                  <li className="lists">Login</li>
                  <li className="lists">Register</li>
                  <li className="lists">Account Setting</li>
                  <li className="lists">My Orders</li>
                </ul>
              </div>
              <div className="link-column">
                <h4 className='h4'>Socials</h4>
                <ul className="ul">
                  <li className="lists">Facebook</li>
                  <li className="lists">Twitter</li>
                  <li className="lists">LinkedIn</li>
                  <li className="lists">Instagram</li>
                  <li className="lists">YouTube</li>
                </ul>
              </div>
              <div className="link-column">
                <h4 className='h4'>Our App</h4>
                <ul className="ul">
                  <li>
                    <img src={app_store} alt="app store" />
                  </li>
                  <li>
                    <img
                      src={google}
                      alt="google play store"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bottom">
            <span className="payment-options">
              <img
                src={american_express}
                alt="american express"
              />
              <img src={mastercard} alt="mastercard" />
              <img src={paypal} alt="paypal" />
              <img src={visa} alt="visa" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
