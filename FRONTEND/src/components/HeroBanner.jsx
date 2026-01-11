import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop");
  };

  return (
    <div className="hero-banner">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Discover What Moves You</h1>
          <p>
            Shop the latest collections from Nexova — quality, style, and comfort
            in one place.
          </p>
          <button className="hero-btn" onClick={handleShopNow}>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
