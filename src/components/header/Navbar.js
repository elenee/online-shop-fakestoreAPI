import React from "react";
import { NavLink } from "react-router-dom";
import HeaderDrawer from "../drawer/HeaderDrawer";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="tool-bar">
      <div className='title'>STORE</div>
      <HeaderDrawer />
      <div className='nav-links'>
        <ul>
          <NavLink to="/" className='li'>Home</NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
