import React from "react";
import logo from "../../images/you-matter-logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a href="index.html">
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
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="index.html"
                  title="Homepage"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="nav-link"
                  href="about.html"
                  title="About us"
                >
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="crisis.html"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  title="Volunteer"
                >
                  Volunteer
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="crisis.html">
                    Crisis Volunteer
                  </a>
                  <a className="dropdown-item" href="fundraising.html">
                    Fundraising Volunteer
                  </a>
                  <a className="dropdown-item" href="social-media.html">
                    Social/Digital Media Volunteer
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html" title="Contact us">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.powr.io/checkout_screen?unique_label=f036cad8_1696581325"
                  target="_blank"
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
