import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <h2>FlareFrontRigs</h2>
          </a>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="search" />
        </div>
        <nav className="nav-aside">
          <ul className="nav-ul">
            <li>
              <a href="/">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ backgroundColor: "white" }}
                >
                  Login
                </button>
              </a>
            </li>
            <li>
              <div className="badge">
                <a href="/">
                  <i className="fa-regular fa-heart" />
                  <div className="badge-count">0</div>
                </a>
              </div>
            </li>
            <li>
              <div className="badge">
                <Link to = "Cart/">
                  <i className="fa-solid fa-cart-shopping" />
                  <div className="badge-count">0</div>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
