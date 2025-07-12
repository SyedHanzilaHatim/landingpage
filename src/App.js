import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import CustomHoodies from "./components/CustomHoodies";
import ProductShowcase from "./components/ProductShowcase";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeroSection />
        <Categories />
        <BestSellers />
        <CustomHoodies />
        <ProductShowcase />
        <Subscribe />
        <Footer />
      </div>
      <Routes>
        {/* Add routes for different pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
