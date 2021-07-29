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


const ChangePin = () => {
  const [pinValue, setPinValue] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const onCreate = () => {
    if (JSON.parse(localStorage.getItem("userData")).user.account.userId.pin == pinValue) {
      console.log('ok');
      return <Redirect to='/newPin'/>
    } else{
      setErrorMsg('Invalid PIN')
    }
    // console.log(JSON.parse(localStorage.getItem("userData")).user.account.userId.pin)
  }


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
            <Pin goTo='/newpin' buttonValue="Continue" setPinValue={setPinValue} onCreate={onCreate} />
            {
            errorMsg ? <p className='text-validation'>{errorMsg}</p> : null
            }
          </div>
        </div>
      </div>
    // <div className="container">
    //   <Dashboard />
    //   <NavBar />
    //   <Footer />
    // </div>
  );
};

export default ChangePin;
