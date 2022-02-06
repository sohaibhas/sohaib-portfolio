import React from "react";
import "./Header.css";
import logo from "../../assets/sohaib.png";

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <a href="/" className="left-1">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="mid">
        <ul className="navbar">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <button className="btn">Call Us Now</button>
        <button className="btn">Email Us</button>
      </div>
    </header>
  );
};

export default Header;
