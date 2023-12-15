import React from "react";
import fundraise from "../../images/fundraise.jpg";
import "../../App.css";

function Fundraising() {
  return (
    <>
      <div className="first-container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Would you like to support our organization in achieving its
              financial goals?
            </h1>
            <p>
              We are seeking enthusiastic and committed Fundraising Volunteers
              to help support our mission. As a Fundraising Volunteer, you will
              play a vital role in assisting with fundraising activities,
              events, and campaigns. This position offers a rewarding
              opportunity for individuals who are passionate about making a
              difference and helping us secure the resources needed to support
              our mission.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src={fundraise}
              className="fundraise image img-fluid rounded shadow-sm"
              alt="Fundraise"
              title="Person holding change"
            />
          </div>
        </div>
      </div>
      <div className="second-container fundraising-information">
        <h2>What We're Looking For:</h2>
        <ul>
          <li>
            Support donor cultivation activities, such as conducting prospect
            research, assisting with donor database management, and assisting in
            donor outreach and stewardship initiatives.
          </li>
          <li>
            Collaborate with the fundraising team to develop and implement
            fundraising campaigns. This may involve creating compelling campaign
            content, coordinating outreach efforts, and tracking campaign
            progress.
          </li>
          <li>
            Assist in identifying potential grant opportunities and researching
            their eligibility criteria. Contribute to the writing and
            preparation of grant proposals and reports.
          </li>
          <li>
            Contribute ideas and insights to enhance fundraising strategies,
            identify new opportunities, and improve donor acquisition and
            retention.
          </li>
          <li>
            This role may involve you coming across people online in distress,
            experiencing suicidal thoughts or discussing distressing themes.
            While your role would be to signpost these people to further help
            and support, like our service, you will need to bring to this role
            an awareness of these challenges and the ability to observe
            emotionally challenging interactions.
          </li>
        </ul>
      </div>
      <div className="third-container fundraising-information">
        <div>
          <h2>What We Provide:</h2>
          <ul>
            <li>
              The ability to grow your fundraising skills in a supportive team,
              alongside making an impact on the lives of those who reach out to
              our service.
            </li>
            <li>
              Regular remote learning, development, and networking sessions.
            </li>
            <li>
              A supportive community of fellow Responders, Supervisors, and
              other vital roles.
            </li>
          </ul>
        </div>
      </div>
      <div className="fourth-container apply-requirements">
        <div className="text-center">
          <h2>Fundraising Volunteer</h2>
          <p className="mb-2">
            If you are ready to join our team of amazing Fundraising Volunteers,
            then do send us an application. When we receive this, we will be in
            contact with you to discuss the next steps. If you have any
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

export default Fundraising;
