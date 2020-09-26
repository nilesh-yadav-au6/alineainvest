import React from "react";
import "../styles/Backedby.css";
import seqioua from "../images/sequoia.png";
import polychain from "../images/polychain.png";
import consensys from "../images/consen.png";

const BackedBy = () => {
  return (
    <>
      <div className="backedby">
        <p>BACKED BY THE BEST</p>
        <div className="companies">
          <img src={seqioua} alt="company1" />
          <img src={polychain} alt="company1" />
          <img src={consensys} alt="company1" />
        </div>
      </div>
      <div className="content">
        <div className="content-text">
          <p className="heading">Start saving for a rainy day fund</p>
          <h1>
            Use Our Checking Account to
            <br /> Achieve Your Financial Goals
          </h1>
          <p style={{color:"gray",lineHeight:"2"}}>
            With the latest Federal rate cut, the largest banks are offering
            close to 0% APY on their checking and savings accounts. OnJuno
            checking will earn you more than 20x the national average*. Deposits
            up to $250,000 are FDIC insured through our banking partner Evolve
            Bank and Trust. Grow your idle money faster with our checking
            account and start saving towards a rainy day fund, big expense, or
            vacation.
          </p>
        </div>
        <div className="bonus">
            <h1>2.15%</h1>
            <p>Bonus Rate On Deposits</p>
        </div>
      </div>
    </>
  );
};

export default BackedBy;
