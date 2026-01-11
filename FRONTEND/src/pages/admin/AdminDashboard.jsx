import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Nexova Admin</h2>

        <nav className="admin-nav">
          <Link to="/admin/users" className="admin-nav-item">Users</Link>
          <Link to="/admin/products" className="admin-nav-item">Products</Link>
          <Link to="/admin/orders" className="admin-nav-item">Orders</Link>
          <Link to="/admin/newsletter" className="admin-nav-item">Newsletter</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="admin-main">

        {/* TOP BAR */}
        <header className="admin-header">
          <h1>Dashboard</h1>
        </header>

        {/* CHILD ROUTES */}
        <div className="admin-content">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
