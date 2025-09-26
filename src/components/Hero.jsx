import React from "react";
import "../styles/hero.css";
import heroImage from "../assets/logo.png"; // make sure you put buddha.png inside src/assets

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="red">Archetype</span> <span className="gray">Labs</span>
        </h1>
        <h2>Software Design Studio.</h2>
        <p className="tagline">
          ai-native. design-obsessed. accessibility-first.
        </p>
        <p className="description">
          At the intersection of tech and design, we turn complexity into clarity.
          Building incredible apps and exceptional digital experiences that users
          actually love—and businesses scale on.
        </p>

        <div className="buttons">
          <a href="#" className="btn-red">See our work</a>
          <a href="#" className="btn-link">Get started →</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="3D Buddha with VR headset" />
      </div>
    </section>
  );
}

export default Hero;
