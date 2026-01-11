import React, { useState } from "react";
import api from "../api/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddProduct.css";
import { useAuth } from "../context/AuthContext";

const AddProduct = () => {
  useAuth();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const [images, setImages] = useState([""]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index, value) => {
    const arr = [...images];
    arr[index] = value;
    setImages(arr);
  };

  const addImageField = () => setImages([...images, ""]);
  const removeImageField = (index) =>
    setImages(images.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrls = images
        .map((u) => u.trim())
        .filter((u) => u.length > 0);

      const payload = {
        name: product.name,
        category: product.category,
        price: Number(product.price),
        description: product.description,
        imageUrls,
      };

      await api.post("/api/products/full", payload);

      toast.success("Product added!");

      setProduct({
        name: "",
        category: "",
        price: "",
        description: "",
      });
      setImages([""]);

    } catch (err) {
      console.error(err);
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>

      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <div className="image-input-section">
          <label>Product Images (URLs):</label>
          {images.map((img, index) => (
            <div key={index} className="image-input-row">
              <input
                type="text"
                placeholder={`Image URL ${index + 1}`}
                value={img}
                onChange={(e) =>
                  handleImageChange(index, e.target.value)
                }
              />
              {images.length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeImageField(index)}
                >
                  ✖
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="add-image-btn"
            onClick={addImageField}
          >
            + Add another image
          </button>
        </div>

        <textarea
          name="description"
          placeholder="Product Description"
          rows="4"
          value={product.description}
          onChange={handleChange}
        />

        <button type="submit" className="add-product-btn">
          Add Product
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default AddProduct;
