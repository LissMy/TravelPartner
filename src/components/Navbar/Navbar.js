import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <h1>
          Travel<span>Partner</span>
        </h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/offers">Special Offers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
