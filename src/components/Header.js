import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/create-post">Create Post</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
