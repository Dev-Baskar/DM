// src/components/Hero.jsx

import React from "react";
import "../styles/hero.css";
// We don't need PhoneModel for this test, you can even comment out the import
// import PhoneModel from "./PhoneModel"; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="red">Six Sigma</span> <span className="gray">Solution</span>
        </h1>
        <h2>Daily Money.</h2>
        <p className="tagline">Independent for life.</p>
        <p className="description">
          “Daily Money helps you track your income and expenses every day in a simple, smart, and stress-free way. Stay organized, save more, and manage your money with ease."
        </p>
        <div className="buttons">
          <a href="#" className="btn-red">See our work</a>
          <a href="#" className="btn-link">Get started →</a>
        </div>
      </div>

      {/* The 3D model component is now removed for testing */}
      {/*
      <div className="hero-3d-container">
        <PhoneModel />
      </div>
      */}
      
    </section>
  );
}

export default Hero;