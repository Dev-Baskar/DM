import React from 'react';
import '../styles/testimonial.css';
import authorAvatar from '../assets/logo.png';

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-content">
        {/* ✅ FIX: Added <br /> tags for exact line breaks */}
        <p className="quote-text">
          “Archetype Labs created an identity with incredible
          <br />
          depth - something that reveals our engineering
          <br />
          expertise at every glance. Simple yet sophisticated.”
        </p>
        <div className="author-info">
          <img
            src={authorAvatar}
            alt="Kannappan Sethunarayanan"
            className="author-avatar"
          />
          <div className="author-details">
            <p className="author-name">Kannappan Sethunarayanan</p>
            <p className="author-company">Hydra Engineering Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;