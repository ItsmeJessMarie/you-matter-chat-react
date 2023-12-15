import React from "react";
import passion from "../../images/passion.jpg";
import heart from "../../images/heart.jpg";
import "../../App.css";

function Crisis() {
  return (
    <>
      <div className="first-container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Do you have what it takes to be a Crisis Responder with YouMatter?
            </h1>
            <p>
              Crisis Responders are what make YouMatter work. They are the heart
              of our service and the support we provide for those reaching out.
              We are seeking people who are passionate about suicide prevention,
              offering emotional support and open to talking to people from
              around the globe experiencing a range of both social and emotional
              problems.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src={passion}
              className="passion image img-fluid rounded shadow-sm"
              alt="Passion"
              title="Passion led us here"
            />
          </div>
        </div>
      </div>
      <div className="second-container volunteer-requirements">
        <h2>Checklist to become a superhero...</h2>
        <p>
          Please read through each point to make sure you fully understand what
          is involved before submitting an application to become a Crisis
          Responder with YouMatter. It is important you follow all steps,
          regardless of your professional background. If you have any questions,
          please contact us via our website before applying.
        </p>
        <div className="requirement-information">
          <h2>Requirements:</h2>
          <p>
            You can volunteer from anywhere in the world, however you need to
            have a stable internet connection and access to a personal computer
            to log into our systems. All your shifts must be conducted in a
            private space, away from distractions or other people that can see
            your screen. You will volunteer for a minimum of two hours every
            week and agree that you can commit to a minimum term of
            volunteering, usually one year. We strive to offer an around the
            clock service, however, we cannot guarantee Crisis Responder hours
            and you might need to take shifts at varying times to ensure you
            meet your hours each week. You will be required to obtain, and
            self-fund, a local criminal background check. You must disclose any
            criminal convictions or cautions during your application process.
            All appointments are subject to background checks and references
            being obtained. Crisis Responders are voluntary positions and you
            will not be paid for any work undertaken with YouMatter. You
            understand that we cannot reimburse any costs, such as the purchase
            of computers or background checks.
          </p>
          <h2>Training:</h2>
          <p>
            We encourage applications from a range of both personal and
            professional backgrounds. Regardless of what you're bringing to our
            team, everyone is required to undertake our in-house crisis
            intervention training course in order to become certified in the
            intervention we deploy across the YouMatter service. Training will
            be completed remotely and on the applicants own time. You can use
            our professional qualification to show to friends and family, or
            even an employer! Following our core training program, you will have
            to go through an exam, alongside mock chats before being approved to
            start answering live crisis support calls through our chat software.
          </p>
          <h2>Reality:</h2>
          <p>
            While this work can be incredibly rewarding, it is important you
            understand the reality of talking to people in crisis. Crisis
            Responders will take chats from people experiencing a suicide
            crisis, and may be the last person a chatter speaks with before
            ending their lives. You understand that we cannot send medical
            assistance for those that attempt to, or end their lives. You will
            talk to people who have experienced, or perpetrated abuse of all
            natures. We might not be able to report crimes that have, or will,
            take place. We talk to people at their worst and may not know the
            outcome of those situations. You will talk to people from across the
            globe, who might be facing a range of different social and economic
            problems. Chatters may hold their own beliefs and values and we are
            here to respect those. You are not permitted to give chatters advice
            of any kind and are simply here to listen.
          </p>
          <h2>Progression:</h2>
          <p>
            YouMatter offers a range of progression and development
            opportunities for those seeking to expand and grow. All our shifts
            are staffed by trained, certified Supervisors. We are constantly
            growing our reach, so keen to develop regional leaders to support us
            in this development. You are given ongoing training and development
            opportunities, alongside the opportunity to join a supportive
            community of people who are all driven by the same values to provide
            support to those in need.
          </p>
        </div>
      </div>
      <div className="third-container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={heart}
              className="heart image img-fluid rounded shadow-sm"
              alt="Heart"
              title="Two hands holding a paper heart"
            />
          </div>
          <div className="col-lg-6">
            <h2>Experienced working with those in crisis?</h2>
            <p>
              We are growing fast and looking to recruit Crisis Intervention
              Supervisors directly. These are volunteer positions open to those
              that have experience supporting those in crisis, or experience
              working within leadership roles. External Supervisor applicants
              are sill required to go through the same application process as
              Responders; you can indicate on your application that you are
              interested in taking on a Supervisory role.
            </p>
          </div>
        </div>
      </div>
      <div className="fourth-container apply-requirements">
        <div className="text-center">
          <h2>Are you ready to apply?</h2>
          <p className="mb-2">
            It's important that you have read through all the requirements above
            and understand what is expected from you and what the onboarding
            process may look like. If you are ready to submit an application,
            click below to start our application process. If you have any
            questions, please don't hesitate to contact us.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc5KOIzINT1IX0T9pRX9p8srVPi21C4x1jFnTGsVsgN_d7S7g/viewform"
            target="_blank"
            rel="noreferrer"
            className="apply-link"
          >
            <button
              className="btn btn-primary apply-btn"
              title="Apply Now button"
            >
              Apply Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Crisis;
