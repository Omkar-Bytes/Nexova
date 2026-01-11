import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import staticProducts from "../data/products";
import "./Orders.css";

const Orders = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !token) {
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        // ✅ AUTHENTICATED — ORDERS
        const orderRes = await axios.get("http://localhost:8080/api/orders/my", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});



        // ✅ HYDRATION — PUBLIC PRODUCT READ (NO TOKEN)
        const enriched = await Promise.all(
          orderRes.data.map(async (order) => {
            if (order.productSource === "STATIC") {
              const p = staticProducts.find(
                (sp) => String(sp.id) === String(order.productId)
              );

              return {
                ...order,
                product: {
                  name: p?.name || "Unknown Product",
                  image:
                    Array.isArray(p?.image) ? p.image[0] : p?.image,
                },
              };
            }

            const prodRes = await axios.get(
              `http://localhost:8080/api/products/${order.productId}`
            );

            return {
              ...order,
              product: {
                name: prodRes.data.name,
                image:
                  prodRes.data.imageUrls?.[0] ||
                  "/assets/Image_not_available.png",
              },
            };
          })
        );

        setOrders(enriched);
      } catch (err) {
        console.error("Orders fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user, token]);

  if (loading) return <h2 className="orders-title">Loading orders...</h2>;

  return (
    <div className="orders-page">
      <h1 className="orders-title">My Orders</h1>

      {orders.length === 0 ? (
        <p className="no-orders">No orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((o) => (
            <div key={o.id} className="order-card">
              <img
                src={o.product.image}
                alt={o.product.name}
                className="order-img"
                onError={(e) => {
                  e.target.src = "/assets/Image_not_available.png";
                }}
              />

              <div className="order-info">
                <h2>{o.product.name}</h2>
                <p>Status: {o.status}</p>
                <p>Qty: {o.quantity}</p>
                <p>Total: ₹{o.totalPrice}</p>
                <p>
                  Date:{" "}
                  {o.createdAt
                    ? new Date(o.createdAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
