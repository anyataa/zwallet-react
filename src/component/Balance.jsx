import React from "react";
import { FaArrowUp, FaPlus, FaTicketAlt, FaWallet } from "react-icons/fa";

export default function Balance() {
  return (
    <div className="profile-top-container set-margin-for-dash">
      <div className="margin-profile-container">
        <div className="balance-detail">
          <div className="row-balance">
            <h3>Balance</h3>
            <h1 className="col-white">Rp120.000</h1>
            <p>+62 813-9387-7946</p>
          </div>
          <div className="row-balance">
            <div onclick="goToRetrieve()" className="button-alpha">
              <FaWallet></FaWallet>
              <h3>Retrieve</h3>
            </div>
            <div onclick="goToSubscription()" className="button-alpha">
              <FaTicketAlt></FaTicketAlt>
              <h3 style={{ fontSize: "18px" }}>Subscription</h3>
            </div>
          </div>
          <div className="row-balance">
            <div className="button-alpha">
              <FaArrowUp></FaArrowUp>
              <h3>Transfer</h3>
            </div>
            <div className="button-alpha">
              <FaPlus></FaPlus>
              <h3>Top Up</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
