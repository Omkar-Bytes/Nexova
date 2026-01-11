import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(0);
  const [loading, setLoading] = useState(true);

  const fallback = "/assets/Image_not_available.png";

  const normalizeStatic = (p) => ({
    id: p.id,
    source: "STATIC",
    name: p.name,
    category: p.category,
    description: p.description || "",
    price: p.price || 0,
    oldPrice: p.oldPrice || null,
    imageUrls: Array.isArray(p.image) ? p.image : [p.image].filter(Boolean),
  });

  const normalizeDb = (p) => ({
    id: `db-${p.id}`,
    source: "DB",
    name: p.name || "Unnamed Product",
    category: p.category || "Uncategorized",
    description: p.description || "",
    price: p.price || 0,
    oldPrice: null,
    imageUrls:
      Array.isArray(p.imageUrls) && p.imageUrls.length
        ? p.imageUrls
        : [fallback],
  });

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const staticMatch = products.find((p) => String(p.id) === String(id));
        if (staticMatch) {
          setProduct(normalizeStatic(staticMatch));
          setSelectedImg(0);
          setLoading(false);
          return;
        }

        if (id.startsWith("db-")) {
          const realId = id.replace("db-", "");
          const res = await api.get(`/api/products/${realId}`);
          setProduct(normalizeDb(res.data));
          setSelectedImg(0);
          setLoading(false);
          return;
        }

        setProduct(null);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setProduct(null);
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <div className="product-details">Loading...</div>;
  if (!product)
    return <div className="product-details">Product not found.</div>;

  const inCart = cart.some((item) => item.id === product.id);

  const currentImg =
    product.imageUrls && product.imageUrls[selectedImg]
      ? product.imageUrls[selectedImg]
      : fallback;

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      imageUrls: product.imageUrls,
      source: product.source,
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <div className="product-details">
      <div className="image-section">
        <img
          src={currentImg}
          alt={product.name}
          className="main-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallback;
          }}
        />

        {product.imageUrls && product.imageUrls.length > 1 && (
          <div className="thumbnail-row">
            {product.imageUrls.map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={
                  "thumbnail" + (idx === selectedImg ? " active" : "")
                }
                onClick={() => setSelectedImg(idx)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallback;
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="details-section">
        <h1>{product.name}</h1>
        <div className="category">{product.category}</div>

        <div className="price-block">
          <span className="current-price">₹{product.price}</span>
          {product.oldPrice && (
            <>
              <span className="old-price">₹{product.oldPrice}</span>
              <span className="discount-badge">Offer</span>
            </>
          )}
        </div>

        <button
          className="add-to-cart-btn"
          disabled={inCart}
          onClick={handleAddToCart}
        >
          {inCart ? "✓ Added to Cart" : "Add to Cart"}
        </button>

        <div className="desc-section">
          <h3>Description</h3>
          <p>{product.description || "No description provided."}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
