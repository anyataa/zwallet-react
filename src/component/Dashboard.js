import React from "react";

export default function Dashboard() {
  return (
    <div className="left">
      <div className="left-top">
        <div className="item-wrapper" onclick="onLabelClicked(0)">
          <i className="fas fa-border-all label-size"></i>
          <p className="label label-size">Dashboard</p>
        </div>
        <div className="item-wrapper active" onclick="onLabelClicked(1)">
          <i className="fas fa-long-arrow-alt-up label-size"></i>
          <p className="label label-size">Transfer</p>
        </div>
        <div className="item-wrapper" onclick="onLabelClicked(2)">
          <i className="fas fa-plus label-size"></i>
          <p className="label label-size">Top Up</p>
        </div>
        <div className="item-wrapper" onclick="onLabelClicked(3)">
          <i className="fas fa-user label-size"></i>
          <p className="label label-size">Profile</p>
        </div>
      </div>
      <div
        className="item-wrapper"
        onclick="window.location.assign('./landingpage.html')"
      >
        <img src="../assets/images/log-out.svg" alt="" />
        <p className="label">Logout</p>
      </div>
    </div>
  );
}
