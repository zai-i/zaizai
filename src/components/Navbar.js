import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import ThemeToggle from "./ThemeToggle";
import { FaHome, FaBackward } from 'react-icons/fa';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu`}>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/">
                <FaHome/>
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <button className="navbar-item" onClick={() => { navigate(-1) }}><FaBackward/></button>
              </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <ThemeToggle/>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
