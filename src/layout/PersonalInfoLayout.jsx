import React, { useEffect, useState, useReducer } from "react";
import Dashboard from "../component/Dashboard";
import { Footer } from "../component/Footer";
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlAPI } from "../asset/urls";

import Button from "../component/Button";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { onLoginAction, updateUserName } from "../actions";

export const PersonalInfoLayout = () => {
  const [userName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if (user.userId) {
      setFullName(user.userName);
      setEmail(user.userEmail);
    }
  }, []);

  const changeEmail = () => {
    axios.put(urlAPI +`/user/update-email/${user.userId}`, { email })
    .then((res) => {
      console.log(res.data);
      dispatch(onLoginAction({...user, userEmail: email}))
    })
    .catch((err) => console.log(err));
  };

  const changeName = () => {
    axios
      .put(urlAPI + `/user/updateuser/${user.userId}`, {username: userName})
      .then((res) => {
        console.log(res.data);
        dispatch(onLoginAction({...user, userName}))
      })
      .catch((err) => console.log(err));
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
                    onChange={(e) => setFullName(e.target.value)}
                    value={userName}
                  />
                </div>
                {
                  userName !== user.userName ?
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
                    Submit
                  </Link>
                  : null
                }
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
                    onInput={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                {
                  email !== user.userEmail ?
                  <Link
                    style={{
                      fontSize: "18px",
                      textDecoration: "none",
                      paddingLeft: "0vw",
                      color: "#6379F4",
                    }}
                    onClick={() => changeEmail(email)}
                  >
                    Submit
                  </Link>
                  : null
                }
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
                    value={user.phoneNumber}
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
  );
};
