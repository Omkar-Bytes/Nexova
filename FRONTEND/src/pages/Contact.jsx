import React, { useState } from "react";
import "./Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.open(
  `https://mail.google.com/mail/?view=cm&fs=1&to=nexova.biz@gmail.com&su=${subject}&body=${body}`,
  "_blank"
);


    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Reach Us</h3>
          <p>Email: nexova.biz@gmail.com</p>
          <p>Location: Pune, Maharashtra, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
