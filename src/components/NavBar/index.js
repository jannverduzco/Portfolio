import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container nav-title">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
          <h1 className="display-4">Janneth Alvarado Verduzco</h1>
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" ||
                    window.location.pathname === "/home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={
                    window.location.pathname === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={
                    window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
