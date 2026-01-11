import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SellerProducts.css";

const SellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSellerProducts = async () => {
    try {
      const res = await api.get("/api/seller/products");
      setProducts(res.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load seller products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`/api/products/${id}`);
      toast.success("Product deleted");
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Delete failed");
    }
  };

  if (loading) return <p style={{ padding: 20 }}>Loading...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Products</h2>

      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>Name</th>
              <th style={th}>Category</th>
              <th style={th}>Price</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td style={td}>{p.name}</td>
                <td style={td}>{p.category}</td>
                <td style={td}>₹{p.price}</td>
                <td style={td}>
                  <button
                    onClick={() => handleDelete(p.id)}
                    style={delBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

const th = {
  borderBottom: "1px solid #ccc",
  textAlign: "left",
  padding: "10px",
};

const td = {
  borderBottom: "1px solid #eee",
  padding: "10px",
};

const delBtn = {
  background: "#e74c3c",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  cursor: "pointer",
  borderRadius: "4px",
};

export default SellerProducts;
