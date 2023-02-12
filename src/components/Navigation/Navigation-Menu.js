import React from "react";
import "./Navigation-Menu.css";
//import { Link } from 'react-router-dom'
//import Logo from "../images/Logo.png";

function NavMenu() {
  return (
    <nav>
      <div className="heading-text">
        Royale Punjab
      </div>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/">MENU</a></li>
        <li><a href="/">ABOUT </a></li>
        <li><a href="/">CONTACT </a> </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
