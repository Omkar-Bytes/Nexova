import { Link } from "react-router-dom";
import SellerProducts from "./seller/SellerProducts";

const SellerDashboard = () => {
  return (
    <div className="admin-section">
      <h1>Seller Dashboard</h1>

      <Link to="/add-product">
        <button className="primary-btn">Add New Product</button>
      </Link>

      <SellerProducts />
    </div>
  );
};

export default SellerDashboard;

