import React from "react";
import "../style/navBar.css";
import { FaArrowDown, FaArrowUp, FaBeer, FaBell } from "react-icons/fa";
export default function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <h2 className="col-secondary">Zwallet</h2>
        <div className="profile-container">
          <div className="profile-img">
            <img src="./../Assets/profil.png" alt="" />
          </div>
          <div className="profile-data">
            <h3>Robert Chandler</h3>
            <p className="col-white50">+62 8139 3877 7946</p>
          </div>
          <div className="profile-img">
            <input id="notif-btn" type="checkbox" hidden={true} />
            <label for="notif-btn">
              <h2 className="fa fa-bell icon-notif">
                {" "}
                <FaBell></FaBell>
              </h2>
            </label>
            {/* <!-- Nav Bar Body --> */}
            <div className="wrapper-notification">
              <p className="detail-notif-duration">Today</p>
              <li>
                <div className="card-notification">
                  <i className="fa fa-arrow-down">
                    <FaArrowDown></FaArrowDown>
                  </i>
                  <div className="notif-detail">
                    <p>Transfered from Joshua Lee</p>
                    <h2>RP 220.000</h2>
                  </div>
                </div>
              </li>

              <li>
                <div className="card-notification">
                  <i className="fa fa-arrow-up">
                    <FaArrowUp></FaArrowUp>{" "}
                  </i>
                  <div className="notif-detail">
                    <p>Netflix subscription</p>
                    <h2>RP 149.000</h2>
                  </div>
                </div>
              </li>
              <p className="detail-notif-duration">This Week</p>
              <li>
                <div className="card-notification">
                  <i className="fa fa-arrow-down">
                    <FaArrowDown></FaArrowDown>
                  </i>
                  <div className="notif-detail">
                    <p>Top up from BNI E-Banking</p>
                    <h2>RP 300.000</h2>
                  </div>
                </div>
              </li>
              <li>
                <div className="card-notification">
                  <i className="fa fa-arrow-up">
                    <FaArrowUp></FaArrowUp>
                  </i>
                  <div className="notif-detail">
                    <p>Transfer to Jessica Lee</p>
                    <h2>RP 100.000</h2>
                  </div>
                </div>
              </li>
            </div>
            {/* <!-- End Nav Body --> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
