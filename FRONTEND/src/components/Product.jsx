import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "./Product.css";

const Product = ({ initialCategory = "All" }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const { addToCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

  const categories = ["All", ...new Set(products.map(p => p.category).filter(Boolean))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(item => item.category === selectedCategory);

  const getFirstImage = (image) => {
    if (!image) return "https://via.placeholder.com/300x200?text=No+Image";
    if (Array.isArray(image)) return image[0];
    if (typeof image === "string" && image.includes(",")) return image.split(",")[0].trim();
    return image;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`✓ ${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <div className="product-header-content">
          <h1 className="product-title">Shop by Category</h1>
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? "category-btn-active" : "category-btn-inactive"}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="product-count">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      <div className="product-grid-container">
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-card">
              <h3 className="empty-state-title">No Products Found</h3>
              <p className="empty-state-subtitle">Try selecting a different category</p>
            </div>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => {
              const inCart = cart.some(p => p.id === product.id);
              return (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleProductClick(product.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="product-image-container">
                    <img
                      className="product-image"
                      src={getFirstImage(product.image)}
                      alt={product.name}
                      onError={e => e.target.src = 'https://via.placeholder.com/400x400?text=Image+Not+Available'}
                    />
                    {product.price && product.oldPrice && (
                      <div className="discount-badge">
                        {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>
                  <div className="product-content" onClick={(e) => e.stopPropagation()}>
                    <p className="product-category">{product.category}</p>
                    <h2 className="product-name">{product.name}</h2>
                    <div className="product-price-section">
                      {product.price ? (
                        <div className="price-container">
                          <span className="current-price">₹{product.price}</span>
                          {product.oldPrice && (
                            <span className="old-price">₹{product.oldPrice}</span>
                          )}
                        </div>
                      ) : (
                        <p className="contact-price">
                          <span className="contact-price-highlight">Contact for price</span>
                        </p>
                      )}
                    </div>

                    <button
                      className={`add-to-cart-btn ${inCart ? "disabled" : ""}`}
                      disabled={inCart}
                      onClick={() => handleAddToCart(product)}
                    >
                      {inCart ? "✓ Added" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
