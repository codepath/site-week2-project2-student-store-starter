import React from "react";

function Contact() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <ul>
        <li>
          <span> Email: </span>
          <span> gebeya@gmail.com </span>
        </li>
        <li>
          <span> Phone: </span>
          <span> 1-800-GEBEYA </span>
        </li>
        <li>
          <span> Adress: </span>
          <span> 123 Fake Street, Addis Ababa, Ethiopia </span>
        </li>
        <li>
          <span> Socials: </span>
          <span>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
