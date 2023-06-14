import * as React from "react"
import "./Home.css"

export default function Home({products}) {
  // console.log(products);
  const num_in_cart=0;
  return (
    <div className="home">
      {/* <p>Home</p> */}
      <div id="Buy" className = "product-grid">
        <div className="content">
        
          <h3>Best Selling Products</h3>

          <div className="grid">
            {products?.map((product, index) => {
            // have to put additional return bc => has implicit return
              return <div className="product-card" key={index} >
                <img src={product.image} ></img>
               
                <div className="product-info">
                  <div className="main-info">
                      <p className="product-name">{product.name}</p>
                      <div className="stars">
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://assets.stickpng.com/images/580b585b2edbce24c47b2915.png"} alt="star ratings" className="star-rating"
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
      <div className="about" id="About">
        <div className="content">
          <h3>About</h3>
          <div className="summary">
            <div className="text">
              <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p><p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
            <div className="media">
              <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="codepath large"></img>
            </div>
          </div>
        </div> 
      </div>
      <div id="Contact" className="contact">
        <div className="content">
          <h3>Contact Us</h3>
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
                <span>Socials: </span> 
                <span className="socials">
                    <img src={"https://www.transparentpng.com/download/facebook-logo-png/facebook-logo-free-download-transparent-3.png"} alt="facebook logo" className="facebook-logo-img"></img>
                    <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"} alt="insta logo" className="insta-logo-img"></img>
                    <img src={"https://www.transparentpng.com/download/linkedin/linkedin-shiny-icon-png-0.png"} alt="linked in logo" className="linkedin-logo-img"></img>
                    <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"} alt="twitter logo" className="twitter-logo-img"></img>
                </span>
              </li>
            </ul>
            <div className="media">
              <img src={"https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"} alt="codepath large"></img>
            </div>
          </div>
        </div>
      </div>


      <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h4>Categories</h4>
                <ul>
                  <li>All Categories</li>
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
