import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import { FaPersonBooth, FaPhotoVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProfilUpgradeLayout = () => {
  return (
    <div className="right-personal-information">
      {/* Top */}
      <div className="personal-information-top-container">
        {/* <div className="set-to-left"> */}
        <h1 className="col-dark-grey">
          Upgrade Your Zwallet Account To <br />
          <span className="col-secondary">
            Zwallet Premium Account
            <AiFillStar />
          </span>
        </h1>
        <p className="col-grey">
          With{" "}
          <span className="col-secondary">
            {" "}
            Zwallet Premium Account <AiFillStar />{" "}
          </span>{" "}
          you can get many discount and promo than ever before. The best
          E-Wallet ever! <br />
          Upgrade to Zwallet Premium Account with these easy steps:
          <br />
          1. Upload your National Id Card (KTP) photo
          <br />
          2. Upload your selfie photo with National Id Card
          <br />
          3. Fill the form based on your National Id Card
        </p>
        {/* </div> */}
      </div>
      {/* Top End */}

      <div className="bottom-personal-information-container">
        <ul>
          {/* 1 */}
          <li>
            <div className="card-notification" style={{ height: "1.5rem" }}>
              <div className="divide-for-manage ">
                <div>
                  <p className="col-grey">National Id Card Number</p>
                  <input className="col-dark-grey " type="number" />
                </div>
              </div>
            </div>
          </li>
          {/* 2  */}
          <li>
            <div className="card-notification" style={{ height: "1.5rem" }}>
              <div className="divide-for-manage ">
                <div>
                  <p className="col-grey">
                    First Name Based On National Id Card
                  </p>
                  <input className="col-dark-grey " type="text" />
                </div>
              </div>
            </div>
          </li>
          {/* 3 */}
          <li>
            <div className="card-notification" style={{ height: "1.5rem" }}>
              <div className="divide-for-manage ">
                <div>
                  <p className="col-grey">
                    Last Name Based On National Id Card
                  </p>
                  <input className="col-dark-grey " type="text" />
                </div>
              </div>
            </div>
          </li>

          {/* <!-- Div Photo --> */}
          <li>
            <div className="photo-row">
              <div className="card-notification-button-big ">
                <h2 style={{ textAlign: "center" }}>
                  Upload your National Identity Card Photo
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FaPhotoVideo size={50}></FaPhotoVideo>
                </h2>
              </div>

              {/* <Link
                to="/profil/personalinfo/upgrade"
                style={{ textDecoration: "none" }}
              > */}
              <div className="card-notification-button-big ">
                <h2 style={{ textAlign: "center" }}>
                  Upload Your Photo with National Id Card
                  <BsPersonSquare size={50} />
                </h2>
              </div>
              {/* </Link> */}
            </div>
          </li>
          {/* Submit */}
          <li>
            <Link
              to="/profil/personalinfo/upgrade"
              style={{ textDecoration: "none" }}
            >
              <div className="card-notification-button ">
                <h2>Submit</h2>
              </div>
            </Link>
          </li>
        </ul>
        {/* <!-- Finish --> */}
      </div>
    </div>
  );
};
