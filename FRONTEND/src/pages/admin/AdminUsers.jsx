import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import "./AdminUsers.css";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const { token } = useAuth();

  const load = async () => {
    const res = await axios.get("http://localhost:8080/api/admin/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUsers(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  // EDIT FUNCTIONS
  const startEdit = (u) => {
    setEditId(u.id);
    setForm({
      name: u.name,
      email: u.email,
      role: u.role,
    });
  };

  const saveEdit = async (id) => {
    await axios.put(`http://localhost:8080/api/admin/user/${id}`, form, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setEditId(null);
    load();
  };

  // DELETE
  const remove = async (id) => {
    await axios.delete(`http://localhost:8080/api/admin/user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    load();
  };

  // ADD NEW USER
  const addUser = async () => {
    if (!newUser.name || !newUser.email || !newUser.password) return;

    await axios.post(
      "http://localhost:8080/api/admin/user",
      newUser,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    setNewUser({ name: "", email: "", password: "", role: "USER" });
    load();
  };

  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Users</h2>

      {/* ADD NEW USER ROW */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
            </td>

            <td>
              <input
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </td>

            <td>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </td>

            <td>
              <select
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              >
                <option value="USER">USER</option>
                <option value="SELLER">SELLER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </td>

            <td>
              <button className="admin-edit-btn" onClick={addUser}>
                Add User
              </button>
            </td>
          </tr>

          {/* EXISTING USERS LIST */}
          {users.map((u) => (
            <tr key={u.id}>
              <td>
                {editId === u.id ? (
                  <input
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                ) : (
                  u.name
                )}
              </td>

              <td>
                {editId === u.id ? (
                  <input
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                ) : (
                  u.email
                )}
              </td>

              <td>••••••</td>

              <td>
                {editId === u.id ? (
                  <select
                    value={form.role}
                    onChange={(e) =>
                      setForm({ ...form, role: e.target.value })
                    }
                  >
                    <option value="USER">USER</option>
                    <option value="SELLER">SELLER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                ) : (
                  u.role
                )}
              </td>

              <td>
                {editId === u.id ? (
                  <>
                    <button
                      className="admin-edit-btn"
                      onClick={() => saveEdit(u.id)}
                    >
                      Save
                    </button>

                    <button
                      className="admin-cancel-btn"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="admin-edit-btn"
                      onClick={() => startEdit(u)}
                    >
                      Edit
                    </button>

                    <button
                      className="admin-delete-btn"
                      onClick={() => remove(u.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
