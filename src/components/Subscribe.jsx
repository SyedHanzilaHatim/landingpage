import React from "react";
import "./Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe">
      <h2>Subscribe to Our Emails</h2>
      <p>Get notified about new collections and exclusive discounts.</p>
      <input type="email" placeholder="Enter your email" />
      <button>Submit</button>
    </section>
  );
}

export default Subscribe;
