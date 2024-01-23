import React from "react";
import "./footer.css";

function Subscribe() {
  return (
    <>
      <div>
        <form className="mailing-form" id="mailing-form">
          <p>Want to receive updates about YouMatter? Join our mailing list:</p>
          <div className="email-form">
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              id="email"
              className="form-control enter-email shadow-sm text-box"
              title="Email input form"
            />
            <input
              type="submit"
              value="Subscribe"
              id="submit-email"
              className="form-control btn submit-btn btn-primary message-btn shadow-sm"
              title="Submit email button"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Subscribe;
