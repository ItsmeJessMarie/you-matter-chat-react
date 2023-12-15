import React from "react";
import media from "../../images/media.jpg";
import "../../App.css";

function Social() {
  return (
    <>
      <div className="first-container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Would you like to help our organization reach a larger audience?
            </h1>
            <p>
              We are seeking dedicated and creative Digital Media Volunteers to
              support our organization in effectively utilizing digital
              platforms to promote our mission and engage with our audience. As
              a Digital Media Volunteer, you will play a crucial role in
              developing and implementing digital media strategies, creating
              engaging content, and managing our online presence. This is an
              exciting opportunity for individuals passionate about digital
              media and its potential to drive social impact.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src={media}
              className="media image img-fluid rounded shadow-sm"
              alt="Media"
              title="Social media apps on phone"
            />
          </div>
        </div>
      </div>
      <div className="second-container fundraising-information">
        <h2>What We're Looking For:</h2>
        <ul>
          <li>
            Due to the nature of this role, you must be over the age of 18, have
            access to a stable internet, a personal computer, and a private
            workspace.
          </li>
          <li>
            Generate compelling and visually appealing digital content,
            including graphics, images, videos, and written posts, to engage our
            target audience across various digital platforms.
          </li>
          <li>
            Assist in managing and monitoring our organization's social media
            channels, including Facebook, Twitter, Instagram, and LinkedIn. Help
            create and schedule posts, respond to comments and messages, and
            actively participate in online conversations.
          </li>
          <li>
            Help maintain and update our organization's website by uploading
            content, ensuring its accuracy and relevance, and improving the
            overall user experience. Assist in optimizing web pages for search
            engine optimization (SEO) and accessibility.
          </li>
          <li>
            Stay up to date with the latest trends and best practices in digital
            media, social media platforms, and online communication strategies.
            Share insights and recommendations with the team to enhance our
            digital media efforts.
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
              The ability to grow your digital media skills in a supportive
              team, alongside making an impact on the lives of those who reach
              out to our service.
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
          <h2>Social/Digital Media Volunteer</h2>
          <p className="mb-2">
            If you are ready to join our team of amazing Social/Digital Media
            Volunteers, then do send us an application. When we receive this, we
            will be in contact with you to discuss the next steps. If you have
            any questions, please don't hesitate to contact us.
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

export default Social;
