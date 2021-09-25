import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <a href="/shop">SHOP</a>
        <a href="/order">ORDER OREVIEW</a>
        <a href="/inventory">MANAGE INVENTORY HERE</a>
      </nav>
    </div>
  );
};

export default Header;
