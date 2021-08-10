import React, { useState } from "react";
import { Footer } from "../component/Footer";
import "../style/dashboard.css";
import "../style/global.css";
import "../style/navBar.css";
import "../style/Font/style.css";
import NavBar from "../component/NavBar";
import Dashboard from "../component/Dashboard";
import Pin from "../component/Pin";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ChangePin = ({ history }) => {
  const [pinValue, setPinValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const user = useSelector((state) => state.user);

  const onCheck = () => {
    if (user.userPin == pinValue) {
      history.push("/newPin");
    } else {
      setErrorMsg("Invalid PIN");
    }
  };

  return (
    <div className="right-change-pin">
      <div className="personal-information-top-container">
        <div className="set-to-left">
          <h1 className="col-dark-grey">Change PIN</h1>
          <p className="col-grey">
            Enter your current 6 digits Zwallet PIN below to continue to the
            next steps.
          </p>
        </div>
      </div>
      <div className="row-pin-group">
        <div className="pin-group center-pin-group">
          <Pin
            goTo="/newpin"
            buttonValue="Continue"
            setPinValue={setPinValue}
            onClick={onCheck}
            pinValue={pinValue}
          />
          {errorMsg ? <p className="text-validation">{errorMsg}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default ChangePin;
