import React from "react";
import "./About.css";
import img from "../../assets/image/yasuo1.jpg";
import play from "../../assets/image/play.jfif";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={img} alt="" className="about-img" />
          <img src={play} alt="" className="play-icon" />
        </div>
        <div className="about-right">
          <h3>About my Fav</h3>
          <h2>yasuo is the best champion</h2>
          <p>
            Yasuo roleName has a 49.4% win rate with 8.1% pick rate in eloName
            and is currently ranked A tier. Based on our analysis of 110 750
            matches in patch patch the best build for Yasuo is Kraken Slayer,
            Berserker's Greaves, Infinity Edge, Immortal Shieldbow, and Iceborn
            Gauntlet.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
