import React from "react";
import home1 from "../img/home1.png";

function AboutSection() {
  return (
    <div>
      <div className="title">
        <div className="hide">
          <h2>We work to make</h2>
        </div>
        <div className="hide">
          <h2>
            your <span>dreams</span> come
          </h2>
        </div>
        <div className="hide">
          <h2>true.</h2>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have proffesionals with amazing skills.
        </p>
        <button>Contact Us</button>
        <div className="image">
          <img src={home1} alt="guy with camera" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
