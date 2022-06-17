import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SubNavbar from "../SubNavbar/SubNavbar"
import codepathPic from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/giant_codepath.6952ef57.svg"
import happyPerson from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/happy_person.517b658d.svg"
import appStore from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/app_store.a7d8c549.svg"
import googlePlay from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/google_play.27aab7c8.svg"
import amExpress from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/american_express.40f242c7.svg"
import masterCard from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/mastercard.c75b7bc4.svg"
import paypal from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/paypal.6a45b239.svg"
import visa from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/visa.a818ddc4.svg"

export default function Home(props) {
  const productsByCategory = props.activeCategory.toLowerCase() === "all categories" ? props.products : props.products.filter((product) => product.category === props.activeCategory.toLowerCase())
  
  const productList = props.searchInput === "" ? productsByCategory : productsByCategory.filter((product) => product.name.includes(props.searchInput))
  return (
    <div className="home" id="header">
      <Hero/>
      <SubNavbar searchInput={props.searchInput} handleOnSearch={props.handleOnSearch} activeCategory={props.activeCategory} setActiveCategory={props.setActiveCategory}/>
      <ProductGrid products={productList} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} shoppingCart={props.shoppingCart}/>
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export function About(){
  return (
    <div className="about" id="about">
      <div className="content">
        <h2>About</h2>
        <div className="summary">
          <div className="text">
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
          </div>
          <div className="media">
            <img src={codepathPic} alt="codepath picture" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Contact(){
  return(
    <div className="contact" id="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <div className="summary">
          <ul className="info">
            <li>
              <span className="label">Email:</span>
              <span>code@path.org</span>
            </li>
            <li>
              <span className="label">Phone:</span>
              <span>1-800-CODEPATH</span>
            </li>
            <li>
              <span className="label">Address:</span>
              <span>123 Fake Street, San Francisco, CA</span>
            </li>
            <li>
              <span className="label">Socials:</span>
              <span>
              <a href="https://www.facebook.com/codepath.org/" target="_blank" className="contact-fb"><i className="fa-brands fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/codepathorg/?hl=en" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.linkedin.com/school/codepath-org/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/codepath?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter"></i></a>
              </span>
            </li>
          </ul>
          <div className="media">
            <img src={happyPerson} alt="happy person pic" />
          </div>
        </div>
      </div>
    </div>
  )
}


export function Footer(){
  return(
    <footer className="footer">
      <div className="content">
        <div className="top">
          <div className="links">
            <div className="link-column">
              <h4>Categories</h4>
              <ul>
                <li className="footer-li">All Categories</li>
                <li className="footer-li">Clothing</li>
                <li className="footer-li">Food</li>
                <li className="footer-li">Accessories</li>
                <li className="footer-li">Tech</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li className="footer-li">About Us</li>
                <li className="footer-li">Find a Store</li>
                <li className="footer-li">Terms</li>
                <li className="footer-li">Sitemap</li>
                <li className="footer-li">Careers</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Support</h4>
              <ul>
                <li className="footer-li">Contact Us</li>
                <li className="footer-li">Money Refund</li>
                <li className="footer-li">Order Status</li>
                <li className="footer-li">Shipping Info</li>
                <li className="footer-li">Open Dispute</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Account</h4>
              <ul>
                <li className="footer-li">Login</li>
                <li className="footer-li">Register</li>
                <li className="footer-li">Account Setting</li>
                <li className="footer-li">My Orders</li>
                <li className="footer-li">Privacy</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Socials</h4>
              <ul>
                <li className="footer-li">Facebook</li>
                <li className="footer-li">Twitter</li>
                <li className="footer-li">LinkedIn</li>
                <li className="footer-li">Instagram</li>
                <li className="footer-li">Youtube</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>Our App</h4>
              <ul>
                <li className="footer-li"><img src={appStore} alt="appstore pic" /></li>
                <li className="footer-li"><img src={googlePlay} alt="google play pic" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span className="payment-options">
            <img src={amExpress} alt="american express" />
            <img src={masterCard} alt="mastercard" />
            <img src={paypal} alt="paypal" />
            <img src={visa} alt="visa" />
          </span>
        </div>
      </div>
    </footer>
  )
}