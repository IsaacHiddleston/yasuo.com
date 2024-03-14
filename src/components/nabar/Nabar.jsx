import React, { useEffect, useState } from "react";
import "./Nabar.css";
import images from "../../assets/image/pic.jfif";
import { Link } from "react-scroll";

const Nabar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 595 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "dark" : ""}`}>
      <img src={images} alt="" className="logo" />
      <ul>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={700}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-250} duration={700}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} duration={700}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="compus" smooth={true} offset={-300} duration={700}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testi" smooth={true} offset={-240} duration={700}>
            Elon
          </Link>
        </li>
        <li>
          <Link
            to="testi"
            smooth={true}
            offset={400}
            duration={500}
            className="btn"
          >
            Phone
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nabar;
