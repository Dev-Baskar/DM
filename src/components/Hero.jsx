// src/components/Hero.jsx
import React from "react";
import IphoneModel from "./IphoneModel"; // 👈 Import the new component

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Your Hero Title
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Some catchy tagline or description goes here.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Right Side - 3D iPhone */}
      <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <IphoneModel /> {/* 👈 Instead of <img>, we show the 3D model */}
      </div>
    </section>
  );
}
