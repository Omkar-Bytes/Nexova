import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useContext(CartContext);

  const { user, token } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    if (!user || !token) {
      navigate("/login", { replace: true });
      return;
    }

    try {
      for (const item of cart) {
        const isDbProduct = String(item.id).startsWith("db-");

        const productId = isDbProduct
          ? Number(String(item.id).replace("db-", ""))
          : item.id;

        await axios.post(
          "http://localhost:8080/api/orders",
          {
            productId,
            productSource: isDbProduct ? "DB" : "STATIC",
            quantity: item.quantity,
            totalPrice: item.quantity * item.price,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      clearCart();
      navigate("/orders", { replace: true });
    } catch (err) {
      console.error("Order Error:", err);
      alert("Order failed");
    }
  };

  if (cart.length === 0) {
    return <p className="empty-cart">🛒 Your cart is empty.</p>;
  }

  const getImg = (urls) => {
    if (Array.isArray(urls) && urls[0]) return urls[0];
    return "/assets/Image_not_available.png";
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={getImg(item.imageUrls)}
            alt={item.name}
            className="cart-item-img"
            onError={(e) => {
              e.target.src = "/assets/Image_not_available.png";
            }}
          />

          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ₹{totalPrice}</h3>
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
        <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Checkout
</button>

      </div>
    </div>
  );
};

export default Cart;
