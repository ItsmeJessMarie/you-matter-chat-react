import React from "react";
import Subscribe from "./subscribe.js";
import "../../App.css";

function Footer() {
  return (
    <>
      <section className="footer-container mt-5">
        <Subscribe />
        <p className="social-media">Visit us on our social media platforms</p>
        <div className="social-media-icons">
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
        <hr />
        <p className="copyright">
          © 2023 by YouMatter. YouMatter is an internet platform used by people
          to access on-demand emotional support. We are not a clinical service
          and do not provide medical assistance.
        </p>
      </section>
    </>
  );
}

export default Footer;
