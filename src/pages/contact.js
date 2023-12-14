import React from "react";
import contact from "../images/contact.jpg";
import "../App.css";

function Contact() {
  return (
    <>
      <div className="first-container contact-us">
        <div className="row">
          <div className="col-lg">
            <h1>Get in touch!</h1>
            <h4 className="contact-warning">
              Please note, we are unable to provide crisis support via email.
              Please use our live chat service to talk to a trained responder,
              or reach out to a local crisis hotline.
            </h4>
            <p>
              If you have any questions or feedback for us, please use the form
              below to reach out to our team.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg">
            <img
              src={contact}
              className="contact image img-fluid rounded shadow-sm"
              alt="Contact"
              title="White keyboard"
            />
          </div>
        </div>
      </div>
      <div className="second-container contact-us-form">
        <h2 className="mb-3">Contact Us</h2>
        <div className="message-form">
          <form
            className="needs-validation"
            novalidate
            id="contact-form"
            method="post"
            action="sendmail.php"
          >
            <div className="row">
              <div className="col-lg-6 mb-3">
                <label for="first-name">First name</label>
                <input
                  type="text"
                  className="form-control text-box shadow-sm"
                  id="validationFirstName"
                  title="First name input form"
                  name="first-name"
                  placeHolder=""
                  value=""
                  required=""
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-lg-6 mb-3">
                <label for="last-name">Last name</label>
                <input
                  type="text"
                  className="form-control text-box shadow-sm"
                  id="validationLastName"
                  title="Last name input form"
                  name="last-name"
                  placeHolder=""
                  value=""
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control enter-contact-email text-box shadow-sm"
                  id="email-input"
                  title="Email input form"
                  name="email"
                  placeHolder=""
                  autoComplete="off"
                  value=""
                  required=""
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg mb-3">
                <label for="message">Message</label>
                <textarea
                  className="form-control enter-contact-telephone text-box shadow-sm"
                  id="message-input"
                  title="Message input form"
                  name="message"
                  placeHolder=""
                  autoComplete="off"
                  rows="3"
                  value=""
                  required=""
                ></textarea>
              </div>
            </div>
            <div className="col-lg mb-3">
              <button
                type="submit"
                value="submit"
                id="submit-message"
                className="form-control btn submit-btn btn-primary message-btn shadow-sm"
                title="Submit message button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
