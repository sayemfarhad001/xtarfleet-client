import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

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
	  <Nav>
		<div className="header__container">
			<div className="header__container--top header__nav__container">
			  <NavLink exact={true} to="/" className="header__nav__common" activeClassName='is-active'>
				<button className="header__home" >Home</button>
			  </NavLink>
			  <NavLink to= "/newplayer" className="header__nav__common" activeClassName='is-active'>
				<button className="header__playNow" >Play Now</button>
			  </NavLink>
			</div>
			<div className="header__container--bottom header__nav__container">  
			  <NavLink to= "/players"  className="header__nav__common" activeClassName='is-active'>
				<button className="header__playNow">Leaderboard</button>
			  </NavLink>
			  <NavLink to= "/about" className="header__nav__common" activeClassName='is-active'>
				<button className="header__playNow" >About</button>
			  </NavLink>
			</div>
		</div>
		</Nav>
	  </div>
	</div>
  );
}

export default Header;
