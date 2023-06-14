import "./Contact.css"

export default function Contact() {
    return (
        <section className="contact">
            <h3>Contact Us</h3>
            <div className="contact-text-box">
                <div className="contact-wrapper">
                    <section className="contact-text">Email:</section>
                    <section className="contact-text">code@path.ord</section>
                </div>
                <div className="contact-wrapper">
                    <section className="contact-text">Phone:</section>
                    <section className="contact-text">1-800-CODEPATH</section>
                </div>
                <div className="contact-wrapper">
                    <section className="contact-text">Address:</section>
                    <section className="contact-text">123 Fake Street, San Francisco, CA</section>
                </div>
                <div className="contact-wrapper">
                    <section className="contact-text">Socials:</section>
                    <section className="contact-text"></section>
                </div>
            </div>
        </section>
    )
}