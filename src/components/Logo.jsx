import React from "react";
import logo from "../assets/BlogPost_logo.png";

function Logo({ width = "50px" }) {
  return (
    <div>
      <img
        src={logo}
        alt="Site logo"
        style={{ width: "45px", height: "auto" }}
      />
    </div>
  );
}

export default Logo;
