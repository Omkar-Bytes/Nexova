import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  // 🔒 HARD REDIRECT GUARDS
  useEffect(() => {
    if (!user || !token) {
      navigate("/login", { replace: true });
      return;
    }

    if (cart.length === 0) {
      navigate("/", { replace: true });
    }
  }, [user, token, cart, navigate]);

  const placeOrder = async () => {
    if (!address.trim()) {
      alert("Delivery address is required");
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

            // ✅ FIX — ADDRESS WAS MISSING
            address: address.trim(),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      clearCart();
      alert("Order placed successfully");
      navigate("/orders", { replace: true });
    } catch (err) {
      console.error("Order failed", err);
      alert("Order failed");
    }
  };

  // ⛔ NO RENDER UNTIL AUTH + CART VALID
  if (!user || !token || cart.length === 0) {
    return null;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-section">
        <h3>Delivery Address</h3>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter full delivery address"
          rows={4}
        />
      </div>

      <div className="checkout-section">
        <h3>Payment Method</h3>
        <p>Cash on Delivery (COD)</p>
      </div>

      <div className="checkout-section total">
        <h3>Total: ₹{totalPrice}</h3>
      </div>

      <button className="place-order-btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
