import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/you-matter-logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a href="/index">
              <img
                src={logo}
                className="logo-header img-fluid"
                alt="You Matter logo"
                title="Homepage"
              />
            </a>
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
                    to="/index"
                    className="nav-link"
                    aria-current="page"
                    title="Homepage"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" title="About us">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
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
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <NavLink
                      to="/crisis"
                      className="dropdown-item"
                      title="Crisis Volunteer page"
                    >
                      Crisis Volunteer
                    </NavLink>
                    <NavLink
                      to="/fundraising"
                      className="dropdown-item"
                      title="Fundraising Volunteer page"
                    >
                      Fundraising Volunteer
                    </NavLink>
                    <NavLink
                      to="/social"
                      className="dropdown-item"
                      title="Social/Digital Media Volunteer page"
                    >
                      Social/Digital Media Volunteer
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
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
      </header>
    </>
  );
}

export default Navbar;
