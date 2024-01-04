import React from "react";
import contact from "../images/contact.jpg";
import ContactForm from "./contactForm.js";
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
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
