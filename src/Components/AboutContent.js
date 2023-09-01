import { Link } from "react-router-dom";
import "./AboutContent.style.css";
import react1 from "../assets/project2.jpg";
import react2 from "../assets/react3.jpg";

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who i am?</h1>
        <p>
          I am React Developer. I have worked on many project and have 2
          internships in top MNCs like google and Amazon!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="image-stack top">
            <img src={react2} className="img" alt="true"></img>
          </div>
          <div className="image-stack bottom">
            <img src={react1} className="img" alt="true"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
