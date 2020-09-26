import React from "react";
import "../styles/Signup.css";

function Signup() {
  return (
    <>
      <div className="signup-div">
        <h1>Sign up early to save more</h1>
        <p>
          Depending on the level of your checking account, you’ll earn
          <br /> between 1.15%3 to 2.15%1 bonus rate.
        </p>
      </div>
      <div className="container">
        <div className="card">
          <div className="header-card">
            <h1 style={{color:"grey"}}>METAL</h1>
            <p style={{color:"blue" , fontSize:"25px" , fontWeight:"bold"}}>2.15%</p>
            <p>
              <span>5%</span> Cashback
            </p>
          </div>
            <div className="progressbar">
              <div className="progressinner"></div>
            </div>
          <div className="info">
            <div className="info-brief">
              <h3 style={{color:"grey"}}>Includes</h3>
              <p>Charcoal Black Metal Card</p>
              <p>5% Cash back on brands you love</p>
              <p>Phone & Chat Support</p>
              <p>Free Cash Withdrawals</p>
            </div>
            <p style={{color:"gray"}}>
              Fund your account with a minimum opening deposit of $1000. 3
              additional free ATM withdrawals per month from out of network
              ATMs.
            </p>
          </div>
          <div style={{backgroundColor:"#8de86e", padding:"25px" ,height:"150px"}}>
              <p>$11.99/m Membership Fee</p>
              <h1>Free for 6 months</h1>
              <p>~$72 Savings</p>
          </div>
          <div className="signup-btn">Signup</div>
        </div>
        <div className="card">
          <div className="premium-card">
          <h1 style={{color:"grey"}}>PREMIUM</h1>
            <p style={{color:"black" , fontSize:"25px" , fontWeight:"bold"}}>1.65%</p>
            <p>
              <span>5%</span> Cashback
            </p>
          </div>
            <div className="progressbar">
            </div>
          <div className="info">
            <div className="info-brief">
              <h3 style={{color:"grey"}}>Includes</h3>
              <p>Charcoal Black Metal Card</p>
              <p>5% Cash back on brands you love</p>
              <p>Phone & Chat Support</p>
              <p>Free Cash Withdrawals</p>
            </div>
            <p style={{color:"gray"}}>
              Fund your account with a minimum opening deposit of $1000. 3
              additional free ATM withdrawals per month from out of network
              ATMs.
            </p>
          </div>
          <div style={{ padding:"25px" ,height:"150px"}}>
              <p>$11.99/m Membership Fee</p>
              <h1>Free for 6 months</h1>
              <p>~$72 Savings</p>
          </div>
          <div className="signup-btn">Up Next</div>
        </div>
        <div className="card">
          <div className="basic-card">
            <h1 style={{color:"grey"}}>BASIC</h1>
            <p style={{color:"black" , fontSize:"25px" , fontWeight:"bold"}}>1.15%</p>
            <p>
              <span>5%</span> Cashback
            </p>
          </div>
            <div className="progressbar">
            </div>
          <div className="info">
            <div className="info-brief">
              <h3 style={{color:"grey"}}>Includes</h3>
              <p>Charcoal Black Metal Card</p>
              <p>5% Cash back on brands you love</p>
              <p>Phone & Chat Support</p>
              <p>Free Cash Withdrawals</p>
            </div>
            <p style={{color:"gray"}}>
              Fund your account with a minimum opening deposit of $1000. 3
              additional free ATM withdrawals per month from out of network
              ATMs.
            </p>
          </div>
          <div style={{padding:"25px" ,height:"150px"}}>
              <p>$11.99/m Membership Fee</p>
              <h1>Free for 6 months</h1>
              <p>~$72 Savings</p>
          </div>
          <div className="signup-btn">Coming Soon</div>
        </div>
      </div>
    </>
  );
}

export default Signup;
