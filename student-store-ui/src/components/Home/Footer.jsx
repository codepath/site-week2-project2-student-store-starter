import * as React from "react"
import "./Home.css"

export default function Footer() {
    return (
            <div className="footer">
                <footer>
                {/* Footer main */}
                    <section className="ft-main">
                        <div className="ft-main-item">
                            <h2 className="ft-title">Quick Links</h2>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Product</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="ft-main-item">
                            <h2 className="ft-title">Contact</h2>
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Sales</a></li>
                                <li><a href="#">Advertise</a></li>
                            </ul>
                        </div>
                        <div className="ft-main-item">
                            <h2 className="ft-title">Stay Updated</h2>
                            <p>Subscribe to our newsletter to get our latest news.</p>
                            <form>
                            <input type="email" name="email" placeholder="Enter email address" />
                            <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </section>

                    {/* Footer social */}
                    <section className="ft-social">
                        <ul className="ft-social-list">
                        <li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
                        <li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
                        <li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
                        <li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-wallet"></i></a></li>
                        <li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
                        </ul>
                    </section>

                    {/* Footer legal */}
                    <section className="ft-legal">
                        <ul className="ft-legal-list">
                            <li><a href="#">Terms &amp; Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li>&copy; 2022 Student Store</li>
                        </ul>
                    </section>
                </footer>
            </div>
    )
  }