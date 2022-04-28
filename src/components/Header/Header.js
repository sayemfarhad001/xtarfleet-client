import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/xtarfleet-logo.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__nav">
          <Link to="/">
            <img src={logo} className="xtarfleet__logo" alt="logo"></img>
          </Link>
      </div>
      <div className="header__nav--right">
        <div className="header__container">
          <div className="header__container--top">
            <Link to="/">
              <button className="header__home">Home</button>
            </Link>

            <Link to= "/newplayer">
              <button className="header__playNow">Play Now</button>
            </Link>
          </div>
          <div className="header__container--bottom">  
            <Link to= "/players">
              <button className="header__playNow">Leaderboard</button>
            </Link>
            <Link to= "/about">
              <button className="header__playNow">About</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
