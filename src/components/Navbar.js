import React, { useState } from "react";
import { Link } from "gatsby";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
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
        </div>
        <ul id="navMenu" className={`navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item is-size-4" onClick={() => setIsActive(!isActive)} to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item is-size-4" onClick={() => setIsActive(!isActive)} to="/poems">
              Poems
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item is-size-4" onClick={() => setIsActive(!isActive)} to="/projects">
              Online Projects
            </Link>
            </li>
            <li className="navbar-end has-text-centered">
              <ThemeToggle/>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
