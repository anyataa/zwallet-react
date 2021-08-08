import React, { useEffect, useState, useReducer } from "react";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../asset/urls";

import Button from "../component/Button";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";

export const PersonalInfoLayout = () => {
  // const [user, setUserData] = useState({});
  // const [user.fullName, setFullName] = useState("");
  const [fullNameInitial, setFullNameInitial] = useState("");
  const [email, setEmail] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState({});
  const [fullNameEdited, setfullNameEdited] = useState("");
  const [emailEdited, setEmailEdited] = useState("");
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user.userId) {
      // setUserData(JSON.parse(localStorage.getItem("userData")));
      // setFullName(JSON.parse(localStorage.getItem("userData")).userName);
      setFullNameInitial(JSON.parse(localStorage.getItem("userData")).userName);
      setEmail(JSON.parse(localStorage.getItem("userData")).userEmail);
      setInitialEmail(JSON.parse(localStorage.getItem("userData")).userEmail);
      setPhoneNumber(JSON.parse(localStorage.getItem("userData")).phoneNumber);
      forceUpdate();
    }
  }, []);

  const changeEmail = function (input) {
    axios
      .put(
        urlAPI +
          `/user/update-email/${
            JSON.parse(localStorage.getItem("userData")).userId
          }`,
        { email: email }
      )
      .then((res) => {
        console.log(res.data);
        setEmail(input);
        let existingData = user;
        existingData["userEmail"] = email;
        localStorage.setItem("userData", JSON.stringify(existingData));
      })
      .catch((err) => {
        console.log(err);
        console.log("masuk ke error");
      });
  };

  const changeName = function (input) {
    var body = {
      username: user.fullName,
    };
    axios
      .put(
        urlAPI +
          `/user/updateuser/${JSON.parse(localStorage.getItem("userData")).userId}`,
        body
      )
      .then((res) => {
        console.log(res.data);
        setFullName(input);
        let existingData = user;
        existingData["userName"] = user.fullName;
        localStorage.setItem("userData", JSON.stringify(existingData));
      })
      .catch((err) => {
        console.log(err);
        console.log("masuk ke error");
      });
  };

  const triggerButtonFullName = (e) => {
    setFullName(e.target.value);
    if (fullNameInitial != user.fullName) {
      setfullNameEdited("Submit");
    }
  };

  const triggerButtonEmail = (e) => {
    setEmail(e.target.value);
    if (initialEmail != email) {
      setEmailEdited("Submit");
    }
  };

  return (
    <div className="right-personal-information">
      {/* Top */}
      <div className="personal-information-top-container">
        <div className="set-to-left">
          <h1 className="col-dark-grey">Personal Information</h1>
          <p className="col-grey">
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </p>
        </div>
      </div>
      {/* Top End */}

      <div className="bottom-personal-information-container">
        <ul>
          {/* <!-- 1 --> */}
          <li>
            <div className="card-notification">
              <div className="divide-for-manage ">
                <div>
                  <p className="col-grey">Full Name</p>
                  <input
                    className="col-dark-grey "
                    type="text"
                    onChange={(e) => triggerButtonFullName(e)}
                    value={user.fullName}
                  />
                </div>

                <Link
                  style={{
                    fontSize: "18px",
                    textDecoration: "none",
                    paddingLeft: "0vw",
                    color: "#6379F4",
                  }}
                  className="col-secondary"
                  onClick={() => changeName(user.fullName)}
                >
                  {fullNameEdited}
                </Link>
              </div>
            </div>
          </li>
          {/* <!-- 2 --> */}
          <li>
            <div className="card-notification">
              <div className="divide-for-manage">
                <div>
                  <p className="col-grey">Verified E-mail</p>
                  <input
                    className="col-dark-grey"
                    type="text"
                    // onClick={triggerButtonEmail}
                    onInput={(e) => triggerButtonEmail(e)}
                    value={email}
                  />
                </div>
                <Link
                  style={{
                    fontSize: "18px",
                    textDecoration: "none",
                    paddingLeft: "0vw",
                    color: "#6379F4",
                  }}
                  onClick={() => changeEmail(email)}
                >
                  {emailEdited}
                </Link>
              </div>
            </div>
          </li>
          {/* <!-- 3 --> */}
          <li>
            <div className="card-notification">
              <div className="divide-for-manage">
                <div>
                  <p className="col-grey">Phone Number</p>
                  <input
                    className="col-dark-grey"
                    type="text"
                    value={phoneNumber}
                    disabled
                  />
                </div>
                <Link className="col-secondary" to="/profil/managephone">
                  {" "}
                  Manage
                </Link>
              </div>
            </div>
          </li>
          {/* <!-- 4 --> */}
          <li>
            <div className="card-notification-button ">
              <h2>
                Upgrade to Zwallet Premium With National Identitiy Card{" "}
                <AiFillStar />
              </h2>
            </div>
          </li>
        </ul>
        {/* <!-- Finish --> */}
      </div>
    </div>
    // <div className="container">
    //   {/* <Dashboard></Dashboard>
    //   <NavBar></NavBar> */}
    //   {/* <Footer></Footer> */}
    // </div>
  );
};
