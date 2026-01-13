import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../api/axios";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "./Shop.css";
import Footer from "../components/Footer";

const normalize = (v) => (v || "").trim().toLowerCase();

const Shop = ({ searchQuery }) => {
  const { addToCart, cart } = useContext(CartContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";

  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [localSearch, setLocalSearch] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [sourceFilter, setSourceFilter] = useState("ALL");
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/api/products")
      .then((res) => setDbProducts(res.data || []))
      .finally(() => setLoading(false));
  }, []);

  const staticProducts = products.map((p) => ({
    id: p.id,
    source: "STATIC",
    name: p.name,
    category: p.category,
    price: p.price || 0,
    imageUrls: Array.isArray(p.image) ? p.image : [p.image],
  }));

  const backendProducts = dbProducts.map((p) => ({
    id: `db-${p.id}`,
    source: "DB",
    name: p.name,
    category: p.category,
    price: p.price || 0,
    sellerName: p.sellerName,
    imageUrls: p.imageUrls || [],
  }));

  const combinedProducts = [...staticProducts, ...backendProducts];

  const categories = [
    "All",
    ...Array.from(
      new Map(
        combinedProducts.map((p) => [
          normalize(p.category),
          p.category,
        ])
      ).values()
    ),
  ];

  let filtered = combinedProducts.filter((p) => {
    if (
      selectedCategory !== "All" &&
      normalize(p.category) !== normalize(selectedCategory)
    )
      return false;

    if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
    if (sourceFilter !== "ALL" && p.source !== sourceFilter) return false;

    const term = (searchQuery || localSearch).toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );
  });

  if (sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="shop-page">
      <h2 className="shop-title">
        {selectedCategory === "All" ? "Shop Products" : selectedCategory}
      </h2>

      <div className="shop-filters">
        <select
          value={selectedCategory}
          onChange={(e) =>
            setSearchParams(
              e.target.value === "All"
                ? {}
                : { category: e.target.value }
            )
          }
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">Sort</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
          <option value="name">Name</option>
        </select>

        <select
          value={sourceFilter}
          onChange={(e) => setSourceFilter(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="DB">Store</option>
          <option value="STATIC">Static</option>
        </select>

        <input
          type="number"
          placeholder="Min ₹"
          onChange={(e) =>
            setPriceRange([+e.target.value || 0, priceRange[1]])
          }
        />

        <input
          type="number"
          placeholder="Max ₹"
          onChange={(e) =>
            setPriceRange([priceRange[0], +e.target.value || 100000])
          }
        />

        <input
          type="text"
          placeholder="Search..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
        />
      </div>

      <div className="products-count">{filtered.length} Products</div>

      <div className="shop-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filtered.map((p) => {
            const inCart = cart.some((c) => c.id === p.id);
            return (
              <div key={p.id} className="shop-card">
                <Link to={`/product/${p.id}`}>
                  <img src={p.imageUrls[0]} alt={p.name} />
                </Link>
                <h3>{p.name}</h3>
                <p className="category-tag">{p.category}</p>
                <div>₹{p.price}</div>
                <button disabled={inCart} onClick={() => addToCart(p)}>
                  {inCart ? "✓ Added" : "Add to Cart"}
                </button>
              </div>
            );
          })
        )}
      </div>
      <Footer/>
    </div>
    
  );
};

export default Shop;
