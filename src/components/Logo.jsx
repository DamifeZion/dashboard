import React from "react";
import logo from "../assets/logo.png";
import { RiCloseCircleFill } from "react-icons/ri";

const Logo = ({onClick}) => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1>
        Dam<span className="danger">ife</span>
      </h1>
      <a className="close-btn" onClick={onClick}><RiCloseCircleFill /></a>
    </div>
  );
};

export default Logo;
