import * as React from "react"
import "./Home.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import About from "../About"

import {useEffect, useState} from "react"
import { Link } from 'react-router-dom'
import About from "../About/About"

export default function Home({products}) {
  // pass in changecategory as a prop
  
  const num_in_cart=0;
  // const [formData, setFormData] = useState(""); // useState for searching

  return (
    <div className="home">
      {/* <p>Home</p> */}
      <div className = "hero">
        <div className="content">
          <div className = "intro">
            <h1> Welcome!!</h1>
            <h1> Find Your Merch!!</h1>
            <p> We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
          </div>
          <div className="media">
            <img src={"https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"} alt="hero" className="hero_img"></img>
          </div>
        </div>
      </div>
      <div id="Buy" className = "product-grid">
        <div className="content">
        
          <h3>Best Selling Products</h3>

          <div className="grid">
            {/* {selectedCategory != "All Categories" ? */}
            {/* {products?.filter((item) => {
              return ((selectedCategory == "All Categories") || (item.category === selectedCategory));
            })}; */}

          
            {console.log("Home component products",products)}
        
            {products?.map((product, index) => {
            // have to put additional return bc => has implicit return
            // const currentMenuItems = data.filter((item) => {
            //   return item.food_category === selectedCategory && item.restaurant === selectedRestaraunt;
            // });
            
            
              return <div className="product-card" key={index} >
                <img src={product.image} ></img>
                {/* {onClick={() => selectSearchEntry(searchEntry)}} */}


                <div className="product-info">
                  <div className="main-info">
                      <p className="product-name">{product.name}</p>
                      <div className="stars">
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2913.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        {/* <img src={"https://www.pngitem.com/pimgs/m/610-6107201_transparent-half-of-a-star-hd-png-download.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img> HALF STAR?? */} 
                        </div>
                      <p className="product-price">{"$"+product.price}</p>
                  </div>
                <div className="actions">
                  <div className="buttons">
                    <button className="add">
                      <i className="material-icons">add</i>
                    </button>
                    <button className="remove">
                      <i className="material-icons">remove</i>
                    </button>
                  </div>
                  <span className="quantity">
                    <span className="amt">{num_in_cart}</span>
                  </span>
                </div>

              </div>
            </div> })}
          </div>
        </div>
      </div>
      
      {/* <About></About> */}
      <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h4>Categories</h4>
                <ul>
                  <li> All Categories</li>
                  <li>Clothing</li>
                  <li>Food</li>
                  <li>Accessories</li>
                  <li>Tech</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Find a Store</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Support</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Money Refund</li>
                  <li>Order Status</li>
                  <li>Shipping Info</li>
                  <li>Open Dispute</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Account</h4>
                <ul>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Account Setting</li>
                  <li>My Orders</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Socials</h4>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                  <li>Instagram</li>
                  <li>YouTube</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Our App</h4>
                <ul>
                  <li>
                    <img src={"https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"} alt="app store"></img>
                  </li>
                  <li>
                    <img src={"https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"} alt="google play store"></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom">
            <span className="payment-options">
              <img src={"https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg"} alt="american express"></img>
              <img src={"https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg"} alt="mastercard"></img>
              <img src={"https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg"} alt="paypal"></img>
              <img src={"https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg"} alt="visa"></img>
            </span>
          </div>
        </div>
      </footer>                   






   </div>
  )
}