import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
        <h1>
          Travel<span>Partner</span>
        </h1>
        </Link>
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
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="/attractions">Attractions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
