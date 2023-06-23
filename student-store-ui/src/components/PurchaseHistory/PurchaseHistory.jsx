import * as React from "react"
import "./PurchaseHistory.css"
import Navbar from "../Navbar/Navbar"

export default function PurchaseHistory() {
  return (
    <div>
      <Navbar />
    <section className="purchases">
      
            <h2>Purchase History</h2>
            <div className="purchase-info">
              <div className="purchase-text">
                <ul className="info">
                  <li>Marley's Student Store offers great products at great prices <br/> from a great team and 
              for a great cause.</li>
            <li>We've searched far and wide for items that perk the interests <br/> of even the most eccentric students and 
              decided<br/>  to offer them all here in one place.</li>
              <li>All proceeds go towards bringing high quality <br/> CS education to college students 
                around the country.</li>
                </ul>
              
              </div>
              <div className="purchase-img">
                <img src="https://t4.ftcdn.net/jpg/02/44/11/93/360_F_244119395_Q2Oz20wd27qIFUIEMd6fko3jRPuVKU5a.jpg" />
              </div>
            </div>
          </section>
          </div>
  )}