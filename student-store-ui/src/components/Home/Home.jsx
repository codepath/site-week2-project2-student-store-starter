import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({products, searchTerm, category, cart, setCart}) {
  return (
    <div className="home">
      <div className="product-grid">
        <ProductGrid products={products} searchTerm={searchTerm} category={category} cart={cart} setCart={setCart}/>
      </div>
      
      <div className="about" id="About">
        <div className="content">
            <h3>About</h3>
            <div className="summary">
                <div className="text">
                    <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
                    <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
                    <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
                </div>
                <div className="media">
                    <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="codepath large" />
                </div>
            </div>
        </div>
      </div>
      <div id="Contact" className="contact">
        <div className="content">
            <h3>Contact Us</h3>
            <div className="summary">
                <ul className="info">
                    <li><span className="label">Email:</span><span>code@path.org</span></li>
                    <li><span className="label">Phone:</span><span>1-800-CODEPATH</span></li>
                    <li><span className="label">Address:</span><span>123 Fake Street, San Francisco, CA</span></li>
                    <li><span>Socials: </span> <span className="socials"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5V12.5C1.5 14.7091 3.29086 16.5 5.5 16.5H8.91055V11.3683H7.13697V9.36847H8.91055V7.89368C8.91055 6.18202 9.98388 5.25 11.5522 5.25C12.3035 5.25 12.9487 5.30466 13.137 5.32896V7.11791L12.0495 7.11847C11.1967 7.11847 11.0317 7.51325 11.0317 8.0919V9.36902H13.0655L12.8007 11.3689H11.0317V16.5H12.5C14.7091 16.5 16.5 14.7091 16.5 12.5V5.5C16.5 3.29086 14.7091 1.5 12.5 1.5H5.5Z" fill="white"></path></svg><svg width="19" height="18" viewBox="0 0 19 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.33325 1.5C7.29638 1.5 7.04138 1.50875 6.24138 1.545C3.51763 1.67 2.00388 3.18125 1.87888 5.9075C1.842 6.70813 1.83325 6.96312 1.83325 9C1.83325 11.0369 1.842 11.2925 1.87825 12.0925C2.00325 14.8162 3.5145 16.33 6.24075 16.455C7.04138 16.4913 7.29638 16.5 9.33325 16.5C11.3701 16.5 11.6258 16.4913 12.4258 16.455C15.147 16.33 16.6645 14.8187 16.7876 12.0925C16.8245 11.2925 16.8333 11.0369 16.8333 9C16.8333 6.96312 16.8245 6.70813 16.7883 5.90812C16.6658 3.18688 15.1526 1.67063 12.4264 1.54563C11.6258 1.50875 11.3701 1.5 9.33325 1.5ZM9.33325 5.14869C7.20638 5.14869 5.482 6.87307 5.482 8.99994C5.482 11.1268 7.20638 12.8518 9.33325 12.8518C11.4601 12.8518 13.1845 11.1274 13.1845 8.99994C13.1845 6.87307 11.4601 5.14869 9.33325 5.14869ZM9.33323 11.5C7.95261 11.5 6.83323 10.3813 6.83323 9.00004C6.83323 7.61942 7.95261 6.50004 9.33323 6.50004C10.7139 6.50004 11.8332 7.61942 11.8332 9.00004C11.8332 10.3813 10.7139 11.5 9.33323 11.5ZM13.337 4.0969C12.8395 4.0969 12.4364 4.50002 12.4364 4.9969C12.4364 5.49377 12.8395 5.8969 13.337 5.8969C13.8339 5.8969 14.2364 5.49377 14.2364 4.9969C14.2364 4.50002 13.8339 4.0969 13.337 4.0969Z" fill="white"></path></svg><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M8.73551 11.2265C10.0446 11.2265 11.1059 10.1652 11.1059 8.85611C11.1059 7.54698 10.0446 6.48572 8.73551 6.48572C7.42637 6.48572 6.36511 7.54698 6.36511 8.85611C6.36511 10.1652 7.42637 11.2265 8.73551 11.2265Z" fill="white"></path><path d="M13.2768 12.9783H17.2053V14.778C17.2053 14.778 18.2713 12.6459 21.1719 12.6459C23.7594 12.6459 25.9028 13.9205 25.9028 17.8057V25.9985H21.8317V18.7985C21.8317 16.5066 20.6081 16.2545 19.6758 16.2545C17.7407 16.2545 17.4095 17.9236 17.4095 19.0974V25.9985H13.2768V12.9783Z" fill="white"></path><path d="M6.66917 12.9783H10.8018V25.9984H6.66917V12.9783Z" fill="white"></path></svg><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M16.5 4.44313C15.9481 4.68813 15.355 4.85312 14.7325 4.9275C15.3681 4.54688 15.8562 3.94375 16.0856 3.225C15.4913 3.5775 14.8325 3.83375 14.1313 3.97188C13.5706 3.37375 12.77 3 11.885 3C9.89812 3 8.43813 4.85375 8.88688 6.77812C6.33 6.65 4.0625 5.425 2.54438 3.56313C1.73812 4.94625 2.12625 6.75562 3.49625 7.67188C2.9925 7.65562 2.5175 7.5175 2.10312 7.28687C2.06937 8.7125 3.09125 10.0462 4.57125 10.3431C4.13812 10.4606 3.66375 10.4881 3.18125 10.3956C3.5725 11.6181 4.70875 12.5075 6.05625 12.5325C4.7625 13.5469 3.1325 14 1.5 13.8075C2.86188 14.6806 4.48 15.19 6.2175 15.19C11.9312 15.19 15.1594 10.3644 14.9644 6.03625C15.5656 5.60187 16.0875 5.06 16.5 4.44313Z" fill="white"></path></svg></span></li></ul>
                <div className="media"> 
                    <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="codepath large" />
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
                            <li><img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="app store" /></li>
                            <li><img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt="google play store" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <span className="payment-options">
                    <img src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg" alt="american express" />
                    <img src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg" alt="mastercard" />
                    <img src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg" alt="paypal" />
                    <img src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg" alt="visa" />
                </span>
            </div>
        </div>
    </footer>
    </div>
  );
}