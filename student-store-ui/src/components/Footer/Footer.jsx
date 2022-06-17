import * as React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <FooterColumn 
          mainLabel="Categories"
          links={["All Categories", "Clothing", "Food", "Accessories", "Tech"]}/>
        <FooterColumn 
          mainLabel="Company"
          links={["About Us", "Find a Store", "Terms", "Sitemap", "Careers"]}/>
        <FooterColumn 
          mainLabel="Support"
          links={["Contact Us", "Money Refund", "Order Status", "Shipping Info", "Open Dispute"]}/>
        <FooterColumn 
          mainLabel="Account"
          links={["Login", "Register", "Account Setting", "My Orders"]}/>
        <FooterColumn 
          mainLabel="Socials"
          links={["Facebook", "Twitter", , "Instagram", "LinkedIn", "YouTube"]}/>
        <AppColumn />
      </div>
      <BottomBar />
    </div>
  )
}

export function FooterColumn( {mainLabel, links}) {
  return (
    <div className="footer-column">
      <h3>{mainLabel}</h3>
      {links.map((link, index) =>
        <p key={index}>{link}</p>  
      )}
    </div>
    )
}

export function AppColumn() {
  return (
    <div className="footer-column">
      <h3>Our App</h3>
      <div><img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" /></div>
      <div><img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" /></div>
    </div>
  )
}

export function BottomBar() {
  return (
    <div id="payment-icons">
      <img src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg" alt="American Express" />
      <img src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg" alt="MasterCard" />
      <img src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg" alt="PayPal" />
      <img src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg" alt="Visa" />
    </div>
    
  )
}