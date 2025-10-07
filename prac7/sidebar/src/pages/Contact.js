import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out!</p>
      <div className="contact-info">
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Location:</strong> Charotar University of Science and Technology, Gujarat, India</p>
      </div>
    </div>
  );
};

export default Contact;
