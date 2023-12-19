import React from "react";
import "./Contact.css";
import LinkedInImage from "./linkedin.png";
import GitHubImage from "./github.png";
import EmailImage from "./email.png";


function Contact() {
  return (
      <section id='contact'>
          <span className="contactTitle">Contact</span>
          <span className="contactContent">
            <img src={LinkedInImage} alt="My LinkedIn Profile" className="contactItemImg" />
            <img src={GitHubImage} alt="My Github Profile" className="contactItemImg" />
            <img src={EmailImage} alt="Email Me!" className="contactItemImg" />
          </span>
      </section>        
  );
}

export default Contact;