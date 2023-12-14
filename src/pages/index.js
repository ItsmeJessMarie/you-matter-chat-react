import React from "react";
import flower from "../images/flower.jpg";
import hands from "../images/hands-support.png";
import phone from "../images/phone.jpg";
import computer from "../images/computer.jpg";
import "../App.css";

function Home() {
  return (
    <>
      <div className="first-container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              YouMatter - the world's only international suicide crisis line.
            </h1>
            <p>
              Need to talk? We are here to offer a safe, non-judgmental space to
              explore whatever is on your mind with a certified crisis
              responder.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src={flower}
              className="flower image img-fluid rounded shadow-sm"
              alt="Flower"
              title="Someone holding a flower"
            />
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src={hands}
              className="hands-support image img-fluid rounded shadow-sm"
              alt="Hands"
              title="Group with hands raised"
            />
          </div>
          <div className="col-lg-6">
            <h2>We believe...</h2>
            <p>
              in a world where all people, regardless of where you live, can
              access high quality crisis support whenever you need it.
            </p>
          </div>
        </div>
      </div>
      <div className="third-container">
        <div className="row">
          <div className="col-lg-4">
            <img
              src={phone}
              className="phone image img-fluid rounded shadow-sm"
              alt="Phone"
              title="Person on a phone"
            />
          </div>
          <div className="col-lg-4 text-center">
            <h3>
              Anyone can use our online chat service to talk to a trained,
              certified crisis responder.
            </h3>
          </div>
          <div className="col-lg-4">
            <img
              src={computer}
              className="computer image img-fluid rounded shadow-sm"
              alt="Computer"
              title="Person on a computer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
