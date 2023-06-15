import * as React from "react"
import "./About.css"

export default function About({products}) {



  return (
    <div className="about">
        <div class="content">
        <h3>About</h3>
            <div class="summary">
                <div class="text">
                    <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
                    <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p><p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
                </div>
                
                <div class="media">
                    <img src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=2000" alt="Shopping Cart Logo"/>
                </div>
            </div>
        </div>
    </div>
  )
}
