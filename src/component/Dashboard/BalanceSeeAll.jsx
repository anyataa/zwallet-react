import React, { Component, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { BalanceTransaction } from "./BalanceTransaction";
import DynamicChart from "./Chart";
import { Link } from "react-router-dom";
import { inRupiah } from "../../global";

export default class BalanceSeeAll extends Component {
  
  render() {
    return (
      <div className="profile-bottom-container">
        {/* Left */}
        <div className="left-dash-bottom-container">
          <div className="balance-detail">
            <div className="row-balance">
              <i>
                <FaArrowDown className="col-green"></FaArrowDown>
              </i>

              <p>Income</p>
              <h2>{inRupiah(JSON.parse(localStorage.getItem("transaction-data")).sumIncome)}</h2>
            </div>
            <div className="row-balance">
              <i>
                {" "}
                <FaArrowUp className="col-red"></FaArrowUp>
              </i>

              <p>Outcome</p>
              <h2>{inRupiah(JSON.parse(localStorage.getItem("transaction-data")).sumOutcome)}</h2>
            </div>
          </div>
          <div className="chart-wrapper">
            <DynamicChart></DynamicChart>
          </div>
        </div>
        {/* Left Container End */}
        {/* Right Start */}
        <div className="right-dash-bottom-container">
        <div className="see-all-contact">
          <h2>Transaction History</h2>
          <Link to='/seealltransaction'className="col-secondary" >See All</Link>
        </div>
       <BalanceTransaction></BalanceTransaction>
       </div> 
      </div>
    );
  }
}