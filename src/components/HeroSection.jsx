import React from "react";
import "./HeroSection.css";
import heropic from "../assests/heropic.png";

function HeroSection() {
  return (
    <>
    <section className="hero-section">
      <div className="hero-content">
        <h1>Customize Anything We Print It</h1>
        <p>We help you transform your ideas into awesome designs.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heropic} alt="Hero" />
      </div>
    </section>
    </>
  );
}

export default HeroSection;
