import React from "react";
import Subscribe from "./subscribe.js";
import "../../App.css";

function Footer() {
  return (
    <>
      <div>
        <div className="footer-container">
          <hr />
          <Subscribe />
          <div className="social-media-icons mt-4">
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
            © 2023 by YouMatter. YouMatter is an internet platform used by
            people to access on-demand emotional support. We are not a clinical
            service and do not provide medical assistance.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
