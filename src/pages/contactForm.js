import React from "react";
import axios from "axios";
import "../App.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="App">
        <h2 className="mb-3">Contact Us</h2>
        <div className="message-form">
          <form
            className="contact-form"
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="row">
              <div className="col-lg mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control text-box shadow-sm"
                  id="name"
                  title="Name input form"
                  name="name"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control enter-contact-email text-box shadow-sm"
                  id="email"
                  title="Email input form"
                  name="email"
                  aria-describedby="emailHelp"
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control enter-message text-box shadow-sm"
                  id="message"
                  title="Message input form"
                  name="message"
                  autoComplete="off"
                  rows="5"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
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
    );
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ContactForm;
