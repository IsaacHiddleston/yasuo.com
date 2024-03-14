import React from "react";
import "./Programs.css";
import pic from "../../assets/image/windRises.jpg";
import pic2 from "../../assets/image/blackHole.jfif";
import pic3 from "../../assets/image/yasuoPc.jpg";
import pica1 from "../../assets/image/pica1.jfif";
import pica2 from "../../assets/image/pica2.jfif";
import pica3 from "../../assets/image/pica3.jfif";

function Programs() {
  return (
    <div className="programs" id="">
      <div className="program">
        <img src={pic} alt="" />
        <div className="caption">
          <img src={pica1} alt="" />
          <p>anime for beginner</p>
        </div>
      </div>
      <div className="program">
        <img src={pic2} alt="" />
        <div className="caption">
          <img src={pica2} alt="" />
          <p>Black Hole</p>
        </div>
      </div>
      <div className="program">
        <img src={pic3} alt="" />
        <div className="caption">
          <img src={pica3} alt="" />
          <p>Yasuo</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
