import "./Contact.css"

export default function Contact() {
    return (
        <div id="contact" className="contact container">
            <h1>Contact Us</h1>
            <div className="container">

                <div className="section">
                    <ul className="contact-info">
                        <li>
                            <span className="label">Email:</span> <span>code@path.org</span>
                        </li>
                        <li>
                            <span className="label">Phone:</span> <span>1-800-CODEPATH</span>
                        </li>
                        <li>
                            <span className="label">Address:</span> <span>123 Fake Street, San Francisco, CA</span>
                        </li>
                        <li>
                            <span className="label">Socials:</span> <i class="fa fa-facebook-square" aria-hidden="true"></i> 
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <i class="fa fa-github-square" aria-hidden="true"></i>
                        </li>
                    </ul>

                </div>
                <div className="section">
                    <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" />
                </div>
            </div>
        </div>
    )
}