import React from "react";
import { Link } from "react-router-dom";
import Coin from "../../asset/image/coin.png";

export const BcaOneKlikInstruction = () => {
  return (
    <div className="right">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>BCA OneKlik</h1>
        <div style={{ marginLeft: '50vw' }}>
          <Link to='/topup/bcaOneKlik/add'>
            <input type="button" value="Add" className="transfer-btn" />
          </Link>
        </div>
      </div>
      <br />
      <h3>Choose an Amount</h3>
      <Link to='/topup/bcaOneKlik/19' style={{ textDecoration: "none" }}>
        <div className="transfer-item-wrapper">
          <img src={Coin} className="transfer-contact-image" width={"82px"} />
          <div className="transer-contact">
            <p className="transfer-primary-text">Rp. 19.000</p>
            <p className="transfer-secondary-text">Top Up Amount</p>
          </div>
        </div>
      </Link>
      <Link to='/topup/bcaOneKlik/49' style={{ textDecoration: "none" }}>
        <div className="transfer-item-wrapper">
          <img src={Coin} className="transfer-contact-image" width={"82px"} />
          <div className="transer-contact">
            <p className="transfer-primary-text">Rp. 49.000</p>
            <p className="transfer-secondary-text">Top Up Amount</p>
          </div>
        </div>
      </Link>
      <Link to='/topup/bcaOneKlik/99' style={{ textDecoration: "none" }}>
        <div className="transfer-item-wrapper">
          <img src={Coin} className="transfer-contact-image" width={"82px"} />
          <div className="transer-contact">
            <p className="transfer-primary-text">Rp. 99.000</p>
            <p className="transfer-secondary-text">Top Up Amount</p>
          </div>
        </div>
      </Link>
      <Link to='/topup/bcaOneKlik/199' style={{ textDecoration: "none" }}>
        <div className="transfer-item-wrapper">
          <img src={Coin} className="transfer-contact-image" width={"82px"} />
          <div className="transer-contact">
            <p className="transfer-primary-text">Rp. 199.000</p>
            <p className="transfer-secondary-text">Top Up Amount</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
