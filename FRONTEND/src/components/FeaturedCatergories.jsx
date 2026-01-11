import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedCatergories.css";

const FeaturedCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Home Improvement",
      image: "https://cdn-icons-png.flaticon.com/512/6018/6018170.png",
      color: "#e8f5e9",
    },
    {
      name: "Beauty & Personal Care",
      image: "https://cdn-icons-png.flaticon.com/512/3901/3901586.png",
      color: "#fff3e0",
    },
    {
      name: "Home & Kitchen",
      image: "https://cdn-icons-png.flaticon.com/512/11495/11495819.png",
      color: "#e3f2fd",
    },
    {
      name: "Mobile & Smart Phone Accessories",
      image: "https://cdn-icons-png.flaticon.com/512/0/191.png",
      color: "#f3e5f5",
    },
    {
      name: "Electronics",
      image: "https://cdn-icons-png.flaticon.com/512/10633/10633613.png",
      color: "#e0f7fa",
    },
    {
      name: "Toys & Games",
      image: "https://cdn-icons-png.flaticon.com/512/3082/3082060.png",
      color: "#fbe9e7",
    },
    {
      name: "Car & Bike",
      image: "https://cdn-icons-png.flaticon.com/512/16303/16303244.png",
      color: "#f1f8e9",
    },
    {
      name: "Garden & Outdoors",
      image: "https://cdn-icons-png.flaticon.com/512/628/628283.png",
      color: "#e0f2f1",
    },
    {
      name: "Lighting",
      image: "https://cdn-icons-png.flaticon.com/512/2402/2402479.png",
      color: "#fff3e0",
    },
    {
      name: "Clothing & Accessories",
      image: "https://cdn-icons-png.flaticon.com/512/2954/2954918.png",
      color: "#ede7f6",
    },
    {
      name: "Bathroom Accessories",
      image: "https://cdn-icons-png.flaticon.com/512/2176/2176564.png",
      color: "#f9fbe7",
    },
    {
      name: "Office Products",
      image: "https://cdn-icons-png.flaticon.com/512/1283/1283617.png",
      color: "#e3f2fd",
    },
  ];

  const goToCategory = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured Categories</h2>

      <div className="featured-grid">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="featured-card"
            style={{ backgroundColor: cat.color, cursor: "pointer" }}
            onClick={() => goToCategory(cat.name)}
          >
            <div className="featured-img-container">
              <img src={cat.image} alt={cat.name} className="featured-img" />
            </div>
            <p className="featured-name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
