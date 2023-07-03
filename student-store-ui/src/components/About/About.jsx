import "./About.css"

import Logo from "../Logo/logo";

export default function About () {
  return (
    <section className="about" id="about">
      <h3>About</h3>
      <div className="about-box">
        <section className="about-text">
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
          <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
          <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </section>
        <section className="about-logo">
          <Logo />
        </section>
      </div>
    </section>
  )
}