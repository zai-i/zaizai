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
        <div className="navbar-brand">
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
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
      </div>
    </nav>
  );
};

export default Navbar;
