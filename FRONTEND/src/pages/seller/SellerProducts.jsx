import { useEffect, useState } from "react";
import api from "../../api/axios"; // ✅ use existing axios instance
import { useAuth } from "../../context/AuthContext";
import "./SellerProducts.css";

const SellerProducts = () => {
  const { token } = useAuth();

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: ""
  });

  const loadProducts = () => {
    api
      .get("/api/seller/products")
      .then(res => setProducts(res.data));
  };

  useEffect(() => {
    if (token) loadProducts();
  }, [token]);

  const startEdit = (p) => {
    setEditId(p.id);
    setForm({
      name: p.name,
      price: p.price,
      category: p.category,
      description: p.description || ""
    });
  };

  const saveEdit = (id) => {
    api
      .put(`/api/seller/products/${id}`, form)
      .then(() => {
        setEditId(null);
        loadProducts();
      });
  };

  const removeProduct = (id) => {
    api
      .delete(`/api/seller/products/${id}`)
      .then(loadProducts);
  };

  return (
    <div className="seller-products">
      <h2 className="seller-title">My Products</h2>

      <table className="seller-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>

              <td>
                {editId === p.id ? (
                  <input
                    className="seller-input"
                    value={form.name}
                    onChange={e =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                ) : (
                  p.name
                )}
              </td>

              <td>
                {editId === p.id ? (
                  <input
                    className="seller-input"
                    value={form.price}
                    onChange={e =>
                      setForm({ ...form, price: e.target.value })
                    }
                  />
                ) : (
                  `₹${p.price}`
                )}
              </td>

              <td>
                {editId === p.id ? (
                  <input
                    className="seller-input"
                    value={form.category}
                    onChange={e =>
                      setForm({ ...form, category: e.target.value })
                    }
                  />
                ) : (
                  p.category
                )}
              </td>

              <td className="seller-actions">
                {editId === p.id ? (
                  <button
                    className="btn save"
                    onClick={() => saveEdit(p.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn edit"
                    onClick={() => startEdit(p)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="btn delete"
                  onClick={() => removeProduct(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerProducts;
