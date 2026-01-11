import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import products from "../data/products";
import "./FeaturedProducts.css";
import "slick-carousel/slick/slick.css";
import "../styles/slick-theme.css";

const FeaturedProducts = () => {
  // ✅ Randomize once per render (page refresh)
  const featuredProducts = useMemo(() => {
    return [...products]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  }, []);

  const getFirstImage = (image) => {
    if (!image) return "/assets/Image_not_available.png";
    if (Array.isArray(image)) return image[0];
    if (typeof image === "string" && image.includes(","))
      return image.split(",")[0].trim();
    return image;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="featured-slider-section">
      <h2 className="featured-products-title">🔥 Trending Products</h2>

      <div className="featured-slider">
        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <div className="featured-slide" key={product.id}>
              <Link
                to={`/product/${product.id}`}
                className="featured-product-card"
              >
                <div className="featured-product-img-container">
                  <img
                    src={getFirstImage(product.image)}
                    alt={product.name}
                    className="featured-product-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/Image_not_available.png";
                    }}
                  />
                </div>

                <div className="featured-product-details">
                  <h3 className="featured-product-name">{product.name}</h3>
                  <p className="featured-product-price">
                    ₹{product.price ?? "Contact"}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;
