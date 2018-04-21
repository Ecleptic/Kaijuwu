import React from "react";
import Link from "gatsby-link";
import SGZA_icon from "./assets/icons/SGZA_ICON.png";
import MUTO_icon from "./assets/icons/MUTO_ICON.png";
import MKG_icon from "./assets/icons/MKG_ICON.png";

const Teams = () => (
  <div className="teamsPage textShadow">
    <ul>
      <Link to="/Teams/SGZA/">
        <img className="logoImg" src={SGZA_icon} alt="Team Icon" />
        <div className="teamInfo">
          <h1>KAIJUWU SGZA</h1>
        </div>
      </Link>
      <Link to="/Teams/MUTO/">
        <img className="logoImg" src={MUTO_icon} alt="Team Icon" />
        <div className="teamInfo">
          <h1>KAIJUWU MUTO</h1>
        </div>
      </Link>
      <Link to="/Teams/MKG/">
        <img className="logoImg" src={MKG_icon} alt="Team Icon" />
        <div className="teamInfo">
          <h1>KAIJUWU MKG</h1>
        </div>
      </Link>
    </ul>
  </div>
);

export default Teams;
