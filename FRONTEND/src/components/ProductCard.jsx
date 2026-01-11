import React, { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  // Handle product image (in case of multiple URLs or missing images)
  const getFirstImage = (imageString) => {
    if (!imageString || typeof imageString !== "string") {
      return "https://via.placeholder.com/300x200?text=No+Image";
    }
    const images = imageString.split(",").map((img) => img.trim());
    return images[0] || "https://via.placeholder.com/300x200?text=No+Image";
  };

  const imageSrc = getFirstImage(product.image);

  // Calculate discount if applicable
  const getDiscount = () => {
    if (product.oldPrice && product.price) {
      return Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
      );
    }
    return null;
  };

  const discount = getDiscount();

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={imageSrc}
          alt={product.name || "Product"}
          className="product-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/400x400?text=Image+Not+Available";
          }}
        />
        {discount && <div className="discount-badge">{discount}% OFF</div>}
      </div>

      <div className="product-content">
        <p className="product-category">{product.category || "Uncategorized"}</p>
        <h2 className="product-name">{product.name || "Unnamed Product"}</h2>

        <div className="product-price-section">
          {product.price ? (
            <div>
              <div className="price-container">
                <p className="current-price">₹{product.price}</p>
                {product.oldPrice && (
                  <p className="old-price">₹{product.oldPrice}</p>
                )}
              </div>
              {product.oldPrice && (
                <span className="savings-badge">
                  Save ₹{product.oldPrice - product.price}
                </span>
              )}
            </div>
          ) : product.oldPrice ? (
            <p className="contact-price">
              Was: <span className="old-price">₹{product.oldPrice}</span>
              <br />
              <span className="contact-price-highlight">Contact for price</span>
            </p>
          ) : (
            <p className="contact-price-highlight">Contact for price</p>
          )}
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
