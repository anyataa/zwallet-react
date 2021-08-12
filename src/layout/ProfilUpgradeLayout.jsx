import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProfilUpgradeLayout = () => {
  return (
    <div className="right-personal-information">
      {/* Top */}
      <div className="personal-information-top-container">
        {/* <div className="set-to-left"> */}
        <h1 className="col-dark-grey">
          Upgrade Your Zwallet Account To{" "}
          <span className="col-secondary">
            {" "}
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
          {/* <!-- 1 --> */}
          <li>
            <Link
              to="/profil/personalinfo/upgrade"
              style={{ textDecoration: "none" }}
            >
              <div className="card-notification-button-big ">
                <h2>
                  Upload your National Identity Card Photo
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <FaPhotoVideo size={50}></FaPhotoVideo>
                </h2>
              </div>
            </Link>
          </li>
        </ul>
        {/* <!-- Finish --> */}
      </div>
    </div>
  );
};
