import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../data/products";
import "./SearchResults.css";

const SearchResults = () => {
  const query =
    new URLSearchParams(useLocation().search).get("query")?.toLowerCase() || "";
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  const getFirstImage = (imageField) => {
    if (!imageField) return "https://via.placeholder.com/300x200?text=No+Image";
    if (Array.isArray(imageField)) return imageField[0] || "https://via.placeholder.com/300x200?text=No+Image";
    if (typeof imageField === "string") {
      const images = imageField.split(",").map((i) => i.trim());
      return images[0] || "https://via.placeholder.com/300x200?text=No+Image";
    }
    return "https://via.placeholder.com/300x200?text=No+Image";
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="search-results">
      <h2>Search Results for: "{query}"</h2>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={getFirstImage(product.image)}
                alt={product.name}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Not+Available";
                }}
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;
