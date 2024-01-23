import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/you-matter-logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container">
          <NavLink to="/" reloadDocument>
            <img
              src={logo}
              className="logo-header img-fluid"
              title="Homepage"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  reloadDocument
                  className="nav-link"
                  aria-current="page"
                  title="Homepage"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  reloadDocument
                  className="nav-link"
                  title="About us"
                >
                  About
                </NavLink>
              </li>
              <div className="dropdown active">
                <li className="nav-item dropdown-nav-items">
                  <NavLink
                    to="/volunteer"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-current="true"
                    title="Volunteer"
                  >
                    Volunteer
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="nav-item">
                      <NavLink
                        to="/crisis"
                        reloadDocument
                        className="dropdown-item"
                        title="Crisis Volunteer page"
                      >
                        Crisis Volunteer
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/fundraising"
                        reloadDocument
                        className="dropdown-item"
                        title="Fundraising Volunteer page"
                      >
                        Fundraising Volunteer
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        end
                        to="/social"
                        reloadDocument
                        className="dropdown-item"
                        title="Social/Digital Media Volunteer page"
                      >
                        Social/Digital Media Volunteer
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </div>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  reloadDocument
                  className="nav-link"
                  title="Contact us"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.powr.io/checkout_screen?unique_label=f036cad8_1696581325"
                  target="_blank"
                  rel="noreferrer"
                  title="Donate"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="warning">
        <p className="warning-text">
          *This service is not operational yet; we are in development and hope
          to launch as soon as we can. This means we can't provide crisis
          support just yet. If you need help, please reach out to a local
          helpline or the emergency services in your area.
        </p>
      </div>
    </>
  );
}

export default Navbar;
