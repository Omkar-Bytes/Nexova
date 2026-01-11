import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SearchResults from "./components/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";

import UserDashboard from "./pages/UserDashboard";
import SellerProducts from "./pages/seller/SellerProducts";
import SellerGuard from "./guards/SellerGuard";
import AddProduct from "./pages/AddProduct";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";

import { CartProvider } from "./context/CartContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Checkout from "./pages/Checkout";
import AdminNewsletter from "./pages/admin/AdminNewsletter";
import About from "./pages/About";
import Privacy from "./pages/Privacy";

/* ---------- ADMIN GUARD ---------- */
function AdminGuard() {
  const { user } = useAuth();
  if (!user || user.role !== "ADMIN") {
    return <Navigate to="/admin/login" replace />;
  }
  return <Outlet />;
}

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar setSearchQuery={setSearchQuery} />

          <Routes>
            {/* CORE */}
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/shop" element={<Shop searchQuery={searchQuery} />} />

            {/* 🔴 FIX: redirect legacy category page */}
            <Route
              path="/categories"
              element={<Navigate to="/shop" replace />}
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />


            {/* USER */}
            <Route path="/user-dashboard" element={<UserDashboard />} />

            {/* SELLER */}
            <Route element={<SellerGuard />}>
              <Route path="/seller-dashboard" element={<SellerProducts />} />
              <Route path="/add-product" element={<AddProduct />} />
            </Route>

            {/* PRODUCT DETAILS ONLY */}
            <Route path="/product/:id" element={<ProductDetails />} />

            {/* ADMIN */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminGuard />}>
              <Route element={<AdminDashboard />}>
                <Route index element={<AdminUsers />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route
                  path="/admin/newsletter"
                  element={<AdminNewsletter />}
                />
              </Route>
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
