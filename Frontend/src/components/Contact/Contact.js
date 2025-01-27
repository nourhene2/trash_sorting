import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>
        Have questions, suggestions, or feedback? We'd love to hear from you!
        Reach out to us using the form below, or contact us directly at:
      </p>
      <p>
        <strong>Email:</strong> support@recycleapp.com
      </p>
      <p>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>
      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your Message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
