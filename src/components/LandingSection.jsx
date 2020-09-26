import React from "react";
import "../styles/LandingSection.css";
import onjunomobile from "../images/onjunomobile.png";
import mail from "../images/mail.png";
import usa from "../images/usa.png";

const LandingSection = () => {
  return (
    <div className="landing">
      <div className="landing-text">
        <h1>The Most Powerful</h1>
        <h1>Checking Account</h1>
        <p>
          Our checking account gives you higher returns
          <br /> than a savings account with no hidden fees.
        </p>
        <div className="landing-joinnow">
          <img className="email-pic" src={mail} alt="mailimage" />
          <input
            className="emailinput"
            type="text"
            placeholder="Enter Email Address"
          />
          <div className="joinnow">Join Now</div>
        </div>
        <div style={{ display: "flex" }}>
          <span>
            <img width="35px" height="35px" src={usa} alt="usaimage" />
            <p>278 spots left for Priority Access</p>
          </span>
        </div>
        <div>
          <span className="fdic">FDIC</span>
          <span style={{ marginLeft: "5px" , color:"gray"}}>
            Banking Services Provided By Evolve Bank & Trust; Member FDIC
          </span>
        </div>
      </div>
      <div className="landing-image">
        <img src={onjunomobile} alt="landingimage" />
      </div>
    </div>
  );
};

export default LandingSection;
