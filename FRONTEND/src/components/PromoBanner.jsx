import React from "react";
import { useNavigate } from "react-router-dom";
import "./PromoBanner.css";

const PromoBanner = ({
  title = "Summer Sale Spectacular",
  subtitle = "Get up to 70% off on selected items — limited time only!",
  buttonText = "Shop Now",
  backgroundImage = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
}) => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/shop");
  };

  return (
    <div
      className="promo-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="promo-overlay"></div>
      <div className="promo-content">
        <h2 className="promo-title">{title}</h2>
        <p className="promo-subtitle">{subtitle}</p>
        <button className="promo-button" onClick={handleShopNow}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
