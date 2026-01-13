import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import "./AdminProducts.css";

const AdminProducts = () => {
  const { user } = useAuth();
const token = user?.token || localStorage.getItem("token");


  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null); // ← current product being edited
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    sellerName: "",
  });

  const load = async () => {
    const res = await api.get("/api/admin/products", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(res.data);
  };

  const remove = async (id) => {
    await api.delete(`/api/admin/product/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    load();
  };

  const startEdit = (p) => {
    setEditing(p.id);
    setForm({
      name: p.name,
      category: p.category,
      price: p.price,
      description: p.description || "",
      sellerName: p.sellerName,
    });
  };

  const saveEdit = async () => {
    await api.put(
      `/api/admin/product/${editing}`,
      form,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setEditing(null);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Products</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Seller</th><th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>₹{p.price}</td>
              <td>{p.sellerName}</td>

              <td className="admin-actions">
                <button className="admin-edit-btn" onClick={() => startEdit(p)}>
                  Edit
                </button>

                <button className="admin-delete-btn" onClick={() => remove(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ======================= EDIT MODAL ======================= */}
      {editing && (
        <div className="admin-modal-bg">
          <div className="admin-modal">
            <h3>Edit Product #{editing}</h3>

            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />

            <input
              type="text"
              placeholder="Seller Name"
              value={form.sellerName}
              onChange={(e) => setForm({ ...form, sellerName: e.target.value })}
            />

            <div className="admin-modal-buttons">
              <button className="admin-save-btn" onClick={saveEdit}>
                Save
              </button>

              <button className="admin-cancel-btn" onClick={() => setEditing(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ========================================================== */}
    </div>
  );
};

export default AdminProducts;
