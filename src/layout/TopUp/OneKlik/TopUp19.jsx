import React from "react";
import { Link } from "react-router-dom";
import ArrowUp from "../../../asset/image/arrowup.png";

export const TopUp19 = () => {
  return (
    <div className="right">
      <div className="transfer-right-top">
        <img src={ArrowUp} style={{ height: "16vh", width: "8vw" }} />
        <p className="transfer-primary-text"></p>
        <div className="transer-contact">
          <p className="transfer-primary-text">Top Up Amount</p>
          <p className="transfer-primary-text">Rp 19.000</p>
          <p className="transfer-secondary-text">Top Up Detail</p>
        </div>
      </div>
      <div className="transfer-input-amount-wrapper">
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Top Up Amount</p>
        <p className="transfer-primary-text">Rp 19.000</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Top Up Fee</p>
        <p className="transfer-primary-text">Rp 1.000</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Total</p>
        <p className="transfer-primary-text">Rp 20.000</p>
      </div>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to="/topup/bcaOneKlik" style={{ textDecoration: "none" }}>
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link>
          <input type="button" value="Next" className="transfer-btn" />
        </Link>
      </div>
    </div>
  );
};
