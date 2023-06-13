import * as React from "react"
import "./About.css"

export default function About() {
  return (
    <section id="about" className="about">
            <h2>About</h2>
            <div className="about-info">
              <div className="about-text">
              <p>Marley's Student Store offers great products at great prices from a great team and 
              for a great cause.</p>
            <p>We've searched far and wide for items that perk the interests of even the most eccentric students and 
              decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students 
                around the country.</p>
              </div>
              <div className="about-img">
                <img src="https://t4.ftcdn.net/jpg/02/44/11/93/360_F_244119395_Q2Oz20wd27qIFUIEMd6fko3jRPuVKU5a.jpg" />
              </div>
            </div>
          </section>
  )}