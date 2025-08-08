import React from "react";
import { Link } from "react-router-dom";

const NavBar= ()=>{    
  // functipn based component for NavBar
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container-fluid d-flex align-items-center">
            {/* Brand */}
            <Link className="navbar-brand me-4" to="/">
              NewsMonkey
            </Link>

            {/* Nav Links in a horizontal row */}
            <div className="d-flex flex-row">
              <Link className="nav-link text-white px-3" to="/">Home</Link>
              <Link className="nav-link text-white px-3" to="/about">About</Link>
              <Link className="nav-link text-white px-3" to="/crime">Crime</Link>
              <Link className="nav-link text-white px-3" to="/domestic">Domestic</Link>
              <Link className="nav-link text-white px-3" to="/education">Education</Link>
              <Link className="nav-link text-white px-3" to="/entertainment">Entertainment</Link>
              <Link className="nav-link text-white px-3" to="/environment">Environment</Link>
              <Link className="nav-link text-white px-3" to="/food">Food</Link>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;
