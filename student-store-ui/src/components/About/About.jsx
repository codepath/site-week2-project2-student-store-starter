import codepathlogo from "../assets/codepathlogo.png";
import "./About.css";
export default function About() {
  return (
    <div>
      <div className="two">About</div>
      <div className="three">
        <div className="text">
          <p>
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <p>
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
          <p>
            All proceeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
        <div >
          <img className="media" src={codepathlogo} alt="codepath large" />
        </div>
      </div>
    </div>
  );
}
