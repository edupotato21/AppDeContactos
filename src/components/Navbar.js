import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            ContactApp
          </Link>
          <nav className="nav">
            <ul className="nav-ul">
              <li className="nav-item">
                <Link className="nav-item-link" to="/">
                  Contactos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
