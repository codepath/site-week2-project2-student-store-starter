import "./Contact.css"


export default function Contact() {
  return (
    <div className = "contact">
        <h1> Contact Us </h1>
        <ul className = "contact-info">
            <li> <span className = "label"> Email: </span>  <span> haysFakeEmail@icloud.com </span> </li>
            <li> <span className = "label"> Phone: </span>  <span> 909-123-4567 </span> </li>
            <li> <span className = "label"> Address: </span>  <span> 6969 Moonlight Avenue <br/> New Orleans, LA 69696 </span> </li>
        </ul>
    </div>
  )
}