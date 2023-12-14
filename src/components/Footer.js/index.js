import React from "react";
import Subscribe from "./subscribe.js";
import "../../App.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <hr />
        <div className="fourth-container donate-email-container text-center">
          <div className="row">
            <div className="col-lg-6">
              <p className="mb-2">
                <a className="homepage-link" href="../../index">
                  YouMatter
                </a>{" "}
                is an international non-profit, registered and regulated in New
                Jersey, USA.
              </p>
              <a
                href="https://www.powr.io/checkout_screen?unique_label=f036cad8_1696581325"
                target="_blank"
                className="donation-link"
              >
                <button
                  className="btn btn-primary donation-btn"
                  title="Donation button"
                >
                  <i className="fa-brands fa-paypal"></i>
                  Donate
                </button>
              </a>
              <p className="credit-cards">
                All major forms of payment accepted
              </p>
            </div>
            <div className="col-lg-6">
              <Subscribe />
            </div>
          </div>
        </div>
        <div className="social-media-icons mt-2">
          <span>
            <a href="">
              <i className="fa-brands fa-facebook" title="Facebook"></i>
            </a>
            <a href="">
              <i
                className="fa-brands fa-x-twitter"
                title="X (formally known as Twitter)"
              ></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram" title="Instagram"></i>
            </a>
          </span>
        </div>
        <p className="copyright mt-3">
          © 2023 by YouMatter. YouMatter is an internet platform used by people
          to access on-demand emotional support. We are not a clinical service
          and do not provide medical assistance.
        </p>
      </div>
    </>
  );
}

export default Footer;
