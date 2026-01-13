import React, { useState } from "react";
import api from "../api/axios";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/newsletter", {
        email,
      });

      setMsg(res.data);
      setEmail("");
    } catch (err) {
      setMsg("Subscription failed");
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <h3 className="newsletter-heading">Get Exclusive Deals</h3>
        <p className="newsletter-subtext">
          Sign up for our newsletter and never miss an update.
        </p>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>

        {msg && <p className="newsletter-msg">{msg}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
