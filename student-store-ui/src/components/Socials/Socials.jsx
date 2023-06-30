import "./Socials.css";
import InstagramSVG from "../../../Assets/icons8-instagram.svg";
import TwitterSVG from "../../../Assets/icons8-twitter.svg";
import FacebookSVG from "../../../Assets/icons8-facebook.svg" ;

export default function Socials() {
    return (
      <div className="social-logo-container">
        <a href="/">
          <img src={InstagramSVG} alt="instagram logo" />
        </a>
        <a href="/">
          <img src={TwitterSVG} alt="twitter logo" />
        </a>
        <a href="/">
          <img src={FacebookSVG} alt="facebook logo" />
        </a>
      </div>
    )
  }