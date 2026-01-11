import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaCaretDown } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { user, logout } = useAuth();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // ROLE-BASED DASHBOARD REDIRECT
  const goToDashboard = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    switch (user.role) {
      case "SELLER":
        navigate("/seller-dashboard");
        break;
      case "USER":
        navigate("/user-dashboard");
        break;
      case "ADMIN":
        navigate("/admin");
        break;
      default:
        navigate("/");
    }

    setOpenDropdown(false);
  };

  return (
    <nav className="navbar">
      {/* LEFT SIDE LOGO */}
      <div className="navbar-logo">
        <Link to="/">Nexova</Link>
      </div>

      {/* CENTER LINKS */}
      <div className="navbar-center">
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>Shop</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </div>
      </div>

      {/* RIGHT SIDE ACTIONS */}
      <div className="navbar-actions">
        
        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search..."
          className="navbar-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />

        {/* USER NOT LOGGED IN */}
        {!user && (
          <Link to="/login" className="navbar-icon">
            <FaUser size={20} />
          </Link>
        )}

        {/* USER LOGGED IN DROPDOWN */}
        {user && (
          <div className="navbar-user" ref={dropdownRef}>
            <button
              className="navbar-user-btn"
              onClick={() => setOpenDropdown((prev) => !prev)}
            >
              <span className="navbar-icon" style={{ display: "inline-flex", gap: 8 }}>
                <FaUser size={18} />
                <span className="navbar-username">{user.name}</span>
                <FaCaretDown size={12} />
              </span>
            </button>

            {openDropdown && (
              <div className="user-dropdown">
                
                {/* ROLE BASED REDIRECT */}
                <button
                  onClick={goToDashboard}
                  className="user-dropdown-item"
                >
                  Dashboard
                </button>

                {/* USER & SELLER ORDER PAGE */}
                <Link
                  to="/orders"
                  onClick={() => setOpenDropdown(false)}
                  className="user-dropdown-item"
                >
                  My Orders
                </Link>

                {/* SELLER ONLY → ADD PRODUCT */}
                {user.role === "SELLER" && (
                  <Link
                    to="/add-product"
                    onClick={() => setOpenDropdown(false)}
                    className="user-dropdown-item"
                  >
                    Add Product
                  </Link>
                )}

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="user-dropdown-item user-logout"
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        )}

        {/* CART ICON */}
        <Link to="/cart" className="navbar-icon cart-icon-wrapper">
          <FaShoppingCart size={20} />
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
