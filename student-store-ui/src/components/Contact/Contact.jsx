import "./Contact.css";
import "../../globals.css";
import Socials from "../Socials/Socials";

export default function Contact(){
    let contacts = ["code@path.org",
        "1-800-CODEPATH",
        "123 Fake Street, San Francisco, CA"]

    return (
        <section id="contact" className="contact-container">
            <div className="contact-content">
                <h1 className="contact-title title">Contact Us</h1>
                <div className="contacts">
                    <div className="contact-buttons-container">
                    {contacts.map((contact) => {
                        return (
                            <p className="contact-button">{contact}</p>
                        )
                    })}
                    </div>
                    
                    <div className="social-media-contacts">
                        <Socials />
                    </div>
                </div>

            </div>
        </section>
    )
}