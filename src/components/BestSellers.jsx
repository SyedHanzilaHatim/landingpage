import React from "react";
import "./BestSellers.css";

function BestSellers() {
  return (
    <section className="best-sellers">
      <h2>Proven Bestsellers</h2>
      <div className="bestseller-grid">
        {/* Add product cards with image, name, price, and colors */}
        {/* Example */}
        <div className="product-card">
          <img src="/images/tshirt.jpg" alt="T-Shirt" />
          <h3>Graphic T-Shirt</h3>
          <p>$20</p>
          <p>Colors: Red, Blue</p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
