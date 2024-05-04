import React from "react";
import ContactLeft from "../assets/Contacts.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide"
        style={{ backgroundImage: `url(${ContactLeft})` }}>
      </div>
      <div className="rightSide">
        <h1> Contact Us </h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Please type in your full name:" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Please enter your e-mail address:" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;