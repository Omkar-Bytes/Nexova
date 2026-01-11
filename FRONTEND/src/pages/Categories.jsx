import React from "react";
import { useLocation } from "react-router-dom";
import Product from "../components/Product";

const Categories = () => {
  const location = useLocation();
  const selectedCategory = location.state?.category || "All";

  return (
    <div>
      <Product initialCategory={selectedCategory} />
    </div>
  );
};

export default Categories;
