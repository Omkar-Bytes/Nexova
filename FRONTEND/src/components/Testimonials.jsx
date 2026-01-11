import React from "react";
import "./Testimonials.css"; // Import the CSS file

const testimonials = [
  {
    name: "Aarav Patel",
    feedback:
      "Amazing shopping experience! The site is super easy to navigate and the product quality exceeded my expectations.",
    role: "Verified Buyer",
  },
  {
    name: "Priya Sharma",
    feedback:
      "Loved the fast delivery and clean interface. Definitely coming back for more purchases!",
    role: "Customer",
  },
  {
    name: "Rahul Mehta",
    feedback:
      "Great deals and smooth checkout process. Highly recommend this store to everyone.",
    role: "Returning Customer",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-feedback">“{t.feedback}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-role">{t.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
