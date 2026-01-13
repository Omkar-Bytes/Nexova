import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]);

  if (!user) return null;

  const updateProfile = async () => {
    try {
      await api.put(
        `/api/user/profile/${user.id}`,
        { email, password: password || null },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMsg("Profile updated. Please login again.");
      logout();
      navigate("/login");
    } catch {
      setMsg("Update failed");
    }
  };

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>

      <div className="card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      <div className="card">
        <h4>Edit Profile</h4>

        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="New password"
        />

        <button onClick={updateProfile}>Save</button>

        {msg && <p className="msg">{msg}</p>}
      </div>
    </div>
  );
};

export default UserDashboard;
