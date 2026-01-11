import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SellerGuard = () => {
  const { user } = useAuth();

  if (!user || user.role !== "SELLER") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default SellerGuard;
