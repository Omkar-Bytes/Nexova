import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./AdminOrders.css";

const AdminOrders = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/admin/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(res.data);
    } catch (err) {
      console.error("Admin orders fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:8080/api/admin/order/${orderId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders((prev) =>
        prev.map((o) =>
          o.id === orderId ? { ...o, status: newStatus } : o
        )
      );
    } catch (err) {
      console.error("Order status update failed:", err);
    }
  };

  const deleteOrder = async (orderId) => {
    if (!window.confirm("Delete this order?")) return;

    try {
      await axios.delete(
        `http://localhost:8080/api/admin/order/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setOrders((prev) => prev.filter((o) => o.id !== orderId));
    } catch (err) {
      console.error("Order delete failed:", err);
    }
  };

  const viewAddress = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  if (loading) {
    return <h2>Loading orders...</h2>;
  }

  return (
    <div className="admin-section">
      <h2>All Orders</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Product ID</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.userId}</td>
              <td>{o.productId}</td>
              <td>{o.quantity}</td>
              <td>₹{o.totalPrice}</td>

              <td>
                <select
                  value={o.status}
                  onChange={(e) =>
                    updateStatus(o.id, e.target.value)
                  }
                >
                  <option value="PLACED">PLACED</option>
                  <option value="PROCESSING">PROCESSING</option>
                  <option value="SHIPPED">SHIPPED</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </td>

              <td>{o.paymentMethod || "COD"}</td>

              <td>
                {o.createdAt
                  ? new Date(o.createdAt).toLocaleString()
                  : "—"}
              </td>

              <td>
                <button
                  className="admin-view-btn"
                  onClick={() => viewAddress(o)}
                >
                  View Address
                </button>
                <button
                  className="admin-delete-btn"
                  onClick={() => deleteOrder(o.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Address Modal */}
      {selectedOrder && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Order #{selectedOrder.id} Details</h3>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>
            
            <div className="modal-body">
              <div className="order-detail">
                <strong>Delivery Address:</strong>
                <p>{selectedOrder.address}</p>
              </div>

              <div className="order-detail">
                <strong>Order Info:</strong>
                <p>Product ID: {selectedOrder.productId}</p>
                <p>Quantity: {selectedOrder.quantity}</p>
                <p>Total: ₹{selectedOrder.totalPrice}</p>
                <p>Status: {selectedOrder.status}</p>
                <p>Payment: {selectedOrder.paymentMethod || "COD"}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-btn-close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;