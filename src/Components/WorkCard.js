import "./WorkCard.style.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="project-ima"></img>
      <h2 className="prject-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source_code} className="btn">
            Source Code
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
