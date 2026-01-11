// src/components/ProductList.jsx
import React from "react";
import { products } from "../data/products"; // if using separate file
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((prod, index) => (
        <ProductCard key={index} product={prod} />
      ))}
    </div>
  );
};

export default ProductList;
