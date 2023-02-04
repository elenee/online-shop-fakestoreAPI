import React from "react";
import HeaderDrawer from "../drawer/HeaderDrawer";
import "./Header.css";

const Navbar = () => {
  return (
    <div className="tool-bar">
      <div className='title'>ECCOM</div>
      <HeaderDrawer />
      <div className='nav-links'>
        <ul>
          <li>Home</li>
          <li>Items</li>
          <li>Contact</li>
          <li>Pay</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
