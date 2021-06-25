import React, { Component } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default class BalanceSeeAll extends Component {
  render() {
    return (
      <div className="profile-bottom-container">
        <div className="left-dash-bottom-container">
          <div className="balance-detail">
            <div className="row-balance">
              <i>
                <FaArrowDown className="col-green"></FaArrowDown>
              </i>

              <p>Income</p>
              <h2>Rp2.120.000 </h2>
            </div>
            <div className="row-balance">
              <i>
                {" "}
                <FaArrowUp className="col-red"></FaArrowUp>
              </i>

              <p>Outcome</p>
              <h2>Rp1.120.000 </h2>
            </div>
          </div>
          <div className="chart-wrapper"></div>
        </div>
        {/* Left Container End */}
        <div className="right-dash-bottom-container">
          <div className="see-all-contact">
            <h2>Transaction History</h2>
            <a href="./transactionHistoryPage.html" className="col-secondary">
              See All
            </a>
          </div>
          {/* Contact list */}
          <div className="contact-list-container">
            {/* 1 */}
            <div className="custom-profile-view">
              <div className="profile-container">
                <div className="profile-img">
                  <img src="./../Assets/adobe.svg" alt="" />
                </div>
                <div className="profile-data">
                  <h3 className="col-grey">Adobe Inc.</h3>
                  <p className="col-grey">Subscription</p>
                </div>
              </div>
              <h2 className="col-red">-Rp50.000</h2>
            </div>
            {/* 2 */}
            <div className="custom-profile-view">
              <div className="profile-container">
                <div className="profile-img">
                  <img src="./../Assets/friend1.png" alt="" />
                </div>
                <div className="profile-data">
                  <h3 className="col-grey">Christine Mr..</h3>
                  <p className="col-grey">Transfer</p>
                </div>
              </div>
              <h2 className="col-green">+Rp50.000</h2>
            </div>
            {/* 3 */}
            <div className="custom-profile-view" onclick="goToHistory()">
              <div className="profile-container">
                <div className="profile-img">
                  <img src="./../Assets/netflix.svg" alt="" />
                </div>
                <div className="profile-data">
                  <h3 className="col-grey">Netflix</h3>
                  <p className="col-grey">Transfer</p>
                </div>
              </div>
              <h2 className="col-red">-Rp90.000</h2>
            </div>
            {/* 4 */}
            <div className="custom-profile-view">
              <div className="profile-container">
                <div className="profile-img">
                  <img src="./../Assets/friend2.png" alt="" />
                </div>
                <div className="profile-data">
                  <h3 className="col-grey">William Gills</h3>
                  <p className="col-grey">Transfer</p>
                </div>
              </div>
              <h2 className="col-green">+Rp50.000</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
