import React from "react";
import profile1 from "../assets/profile-1.jpg";

const ThemeModePC = () => {
  return (
    <div className="thememode-pc">

      <p className="text-muted">
        Hey, <b>Damife</b> <br /> Admin
      </p>
      <img src={profile1} alt="" />
    </div>
  );
};

export default ThemeModePC;
