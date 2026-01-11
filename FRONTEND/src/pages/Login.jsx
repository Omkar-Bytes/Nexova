import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // context
import "./Login.css";

const Login = () => {
  const [loginType, setLoginType] = useState("user");
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    storeName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { login } = useAuth(); // context login()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ---------------- SIGNUP ----------------
      if (isSignup) {
        const payload = {
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          role: loginType.toUpperCase(),       // USER or SELLER
          storeName: loginType === "seller" ? formData.storeName : null,
        };

        await axios.post("http://localhost:8080/api/auth/signup", payload);
        alert("Account created successfully!");
        setIsSignup(false);
        return;
      }

      // ---------------- LOGIN ----------------
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const res = await axios.post("http://localhost:8080/api/auth/login", payload);
login(res.data);
alert(`Welcome ${res.data.name}!`);
navigate("/");

    } catch (err) {
      alert("Error: " + (err.response?.data || "Something went wrong"));
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        {/* Toggle between User / Seller */}
        <div className="login-toggle">
          <button
            className={loginType === "user" ? "active" : ""}
            onClick={() => setLoginType("user")}
          >
            User
          </button>
          <button
            className={loginType === "seller" ? "active" : ""}
            onClick={() => setLoginType("seller")}
          >
            Seller
          </button>
        </div>

        <h2>
          {isSignup
            ? loginType === "user"
              ? "Create a User Account"
              : "Register Your Store"
            : loginType === "user"
            ? "Welcome Back, User"
            : "Welcome Seller"}
        </h2>

        <form className="login-form" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              {loginType === "seller" && (
                <input
                  type="text"
                  name="storeName"
                  placeholder="Store Name"
                  className="login-input"
                  value={formData.storeName}
                  onChange={handleChange}
                  required
                />
              )}

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="login-input"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="login-input"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="login-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}

          <button type="submit" className="login-btn">
            {isSignup
              ? loginType === "user"
                ? "Sign Up as User"
                : "Sign Up as Seller"
              : loginType === "user"
              ? "Login as User"
              : "Login as Seller"}
          </button>
        </form>

        <p className="login-footer">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Login here</span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsSignup(true)}>Sign up</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
