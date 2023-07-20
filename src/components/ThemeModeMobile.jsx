import React from "react";
import profile1 from "../assets/profile-1.jpg";

const ThemeModeMobile = () => {
  return (
    <div className="thememode-mobile">

      <p className="text-muted">
        Hey, <b>Damife</b> <br /> Admin
      </p>
      <img src={profile1} alt="" />
    </div>
  );
};

export default ThemeModeMobile;
