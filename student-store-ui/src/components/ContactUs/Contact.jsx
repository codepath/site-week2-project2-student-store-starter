import './Contact.css'
import happy from '../assets/happy.png'
export default function Contact() {
  return (
    <div>
      <div className="contactUs">Contact Us</div>
      <div className="contact-container">
        <div className="form">
          <div className="label">
            <ul className="label-list">
              <li className="la-li">
                <p>Email:</p>
              </li>
              <li className="la-li">
                <p>Phone:</p>
              </li>
              <li className="la-li">
                <p>Address:</p>
              </li>
              <li className="la-li">
                <p>Social:</p>
              </li>
            </ul>
          </div>
          <div className="answers">
            <ul className="answers-list">
              <li className="ans-li">
                <p>code@path.org</p>
              </li>
              <li className="ans-li">
                <p>1-800-</p>
                <p>CODEPATH</p>
              </li>
              <li className="ans-li">
                <p>123 Fake</p>
                <p>Street, San</p>
              </li>
              <li className="ans-li">
                <div className="icon">
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="image">
              <img className="img_happy" src={happy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
