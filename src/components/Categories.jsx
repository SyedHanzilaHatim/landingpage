import React from "react";
import "./Categories.css";

const categories = [
  { name: "Hats", image: "/images/hat.jpg" },
  { name: "Tank Tops", image: "/images/tank-top.jpg" },
  { name: "Graphic T-Shirts", image: "/images/graphic-tshirt.jpg" },
  { name: "Kids Apparel", image: "/images/kids-apparel.jpg" },
  { name: "Mugs", image: "/images/mug.jpg" },
  { name: "Water Bottles", image: "/images/water-bottle.jpg" },
];

function Categories() {
  return (
    <section className="categories">
      <h2>Shop Our Top Categories</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.name} className="category-item">
            <img src={cat.image} alt={cat.name} />
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
