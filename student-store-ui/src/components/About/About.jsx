import React from "react";

const About = () => {
  return (
    //Returns about section of code
    <div tag="about-us">
      <div className="content">
        <h3>About Us</h3>
        <div className="summary">
          <div className="text">
            <p>
              The codepath student store offers great products at great prices
              from a great team and for a great cause.
            </p>
            <p>
              We've searched far and wide for items that perk the interests of
              even the most eccentric students and decided to offer them all
              here in one place.
            </p>
            <p>
              All proceeds go towards bringing high quality CS education to
              college students around the country.
            </p>
          </div>
          <div className="media">
            <img
              src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg"
              alt="codepath large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
