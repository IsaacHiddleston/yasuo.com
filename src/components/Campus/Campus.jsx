import React from "react";
import "./Campus.css";
import gallerya from "../../assets/image/elon.webp";
import galleryb from "../../assets/image/elon2.jfif";
import galleryc from "../../assets/image/elon3.jfif";
import galleryd from "../../assets/image/elon4.jfif";
import arr from "../../assets/image/arrow.jpg";

const Campus = () => {
  return (
    <div className="compus">
      <div className="gallery">
        <img src={gallerya} alt="" />
        <img src={galleryb} alt="" />
        <img src={galleryc} alt="" />
        <img src={galleryd} alt="" />
      </div>
      <button className="btn dark-btns">guess who?</button>
    </div>
  );
};

export default Campus;
