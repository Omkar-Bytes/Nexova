import React, { useState } from "react";
import "./ShopByCategory.css";
import productsData from "../data/products"; // Assuming you have a products.js file

const ShopByCategory = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Home", "Accessories", "Beauty"];

  // Filter products based on category + search
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="shop-category-section">
      <h2 className="shop-title">Shop by Category</h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
