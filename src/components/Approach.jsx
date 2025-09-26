import React from "react";
import "../styles/Approach.css";

function Approach() {
  return (
    <section className="approach">
      {/* This new div helps align the header content to the left */}
      <div className="approach-header">
        <p className="sub-heading">Our Approach</p>
        <h2 className="main-heading">
          {/* Using a span to make only the first line red */}
          <span className="red-text">Technology with purpose,</span>
          <br />
          Design with impact.
        </h2>
        <p className="description">
          Get digital solutions that work the way you think. Your team stays
          focused on what matters while technology handles the complexity behind
          the scenes.
        </p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h3>
            Digital Transformation :{" "}
            {/* Changed from underline to strong (bold) */}
            <strong>Complete brand and digital presence.</strong>
          </h3>
          <p>
            Establish your market position with cohesive brand identity and
            digital touchpoints that reflect your vision.
          </p>
        </div>

        <div className="card">
          <h3>
            <strong>Custom solutions that fit your needs</strong>
          </h3>
          <p>
            Free up your team for strategic thinking. Let intelligent systems
            handle routine tasks while you focus on growth.
          </p>
        </div>

        <div className="card">
          <h3>
            AR & VR : <strong>Engage users through immersive experiences.</strong>
          </h3>
          <p>
            Connect with your audience through AR/VR training, marketing, and
            interactive environments built for modern devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Approach;