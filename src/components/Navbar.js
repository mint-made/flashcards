import React from "react";
import linkedinIcon from "../images/linkedin.svg";
import githubIcon from "../images/github.svg";

const Navbar = () => {
  return (
    <div id="nav">
      <a href="https://mint-made.com/">
        {" "}
        <div className="logo">Mint-Made</div>
      </a>
      <div id="icon-container">
        <a href="https://github.com/mint-made" target="_blank" rel="noreferrer">
          <img src={githubIcon} className="profile-icon-link" alt="" />
        </a>
        <a
          href="https://uk.linkedin.com/in/front-end-dev1"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} className="profile-icon-link" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
