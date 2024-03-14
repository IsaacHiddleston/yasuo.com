import React, { useRef } from "react";
import "./Testi.css";
import next from "../../assets/image/next.png";
import back from "../../assets/image/back.png";
import gallerya from "../../assets/image/elon.webp";
import galleryb from "../../assets/image/elon2.jfif";
import galleryc from "../../assets/image/elon3.jfif";
import galleryd from "../../assets/image/elon4.jfif";

const Testi = () => {
  const slider = useRef();
  let tx = 0;
  const moveBack = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const moveForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testi">
      <button className="hyper">ok</button>
      <img src={back} alt="" className="back-btn" onClick={moveBack} />
      <img src={next} alt="" className="next-btn" onClick={moveForward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="lenth">
                <img src={gallerya} alt="" />
                <div className="">
                  <h3></h3>
                  <span></span>
                </div>
              </div>
              <p>length ba nar </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="lenth">
                <img src={galleryb} alt="" />
                <div className="">
                  <h3></h3>
                  <span></span>
                </div>
              </div>
              <p>length ba nar </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="lenth">
                <img src={galleryc} alt="" />
                <div className="">
                  <h3></h3>
                  <span></span>
                </div>
              </div>
              <p>length ba nar </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="lenth">
                <img src={galleryd} alt="" />
                <div className="">
                  <h3></h3>
                  <span></span>
                </div>
              </div>
              <p>length ba nar </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testi;
