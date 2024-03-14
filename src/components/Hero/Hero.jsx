import React from "react";
import "./Hero.css";
import arrow from "../../assets/image/arrow.jpg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Yasuo's Best Quotes</h1>
        <p>
          "Honor is in the heart, not the name." "Sleep is for the guiltless."
          "My honor left a long time ago." "I will not forget who I am." "A
          wanderer isn't always lost." "A sword's poor company for a long road."
          "Hmph... dying's the easy part." "The road to ruin is shorter than you
          think."
        </p>
        <button className="btn">
          I agree <img src={arrow} alt="" className="arr" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
