import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <p className="footer-logo">Nexova</p>
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Nexova. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
