import React, { useState, useReducer } from "react";
import Hero from "../component/Hero";
import InputAuth from "../component/InputAuth";
import "../style/newLogin.css";
import Button from "../component/Button";
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { Link, Redirect } from "react-router-dom";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const CreateNewPassword = ({ match }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const [isRedirect, setIsRedirect] = useState();
  const [showModal, setShowModal] = useState("none");
  const [message, setMessage] = useState("");

  const buttonHandler = () => {
    if (password && confirmPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onResetPass = () => {
    if (password.length >= 8) {
      if (confirmPassword == password) {
        var body = {
          password,
          // password: confirmPassword,
        };
        axios
          .put(urlAPI + `/user/reset-password/${match.params.id}`, body)
          .then((res) => {
            console.log(res.data);
            if (res.data.message.includes("Success")) {
              setShowModal("flex");

              setMessage(`${res.data.message}`);
            } else {
              setMessage(`${res.data.message}`);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setErrorMsg("Password do not match.");
      }
    } else {
      setErrorMsg("Password must be at least 8 characters.");
    }
  };
  const setRedirect = () => {
    console.log("in");
    setIsRedirect("ada value");
  };
  if (isRedirect) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="login-container">
      {/* Show Success Change if axios res fulfill the condition */}
      <div id="modal" style={{ display: showModal }}>
        <div className="pin-confirmation-box">
          <div className="modal-close-icon-wrapper">
            <p className="transfer-primary-text" />
            <FaTimes className="modal-close-icon"></FaTimes>
          </div>

          <div className="transfer-pin-input-wrapper">
            <FaCheckCircle className="col-green" size="100"></FaCheckCircle>
          </div>
          <div className="success-change-password">
            <h1>{message}</h1>
          </div>
          {/* <Link
            style={{ textDecoration: "none", marginLeft: "60%" }}
            to="/login"
          > */}
          <input
            type="button"
            defaultValue="Done"
            className="transfer-btn"
            id="back-to-profile"
            onClick={() => setRedirect()}
          />
          {/* </Link> */}
        </div>
      </div>
      {/* Modal End  */}
      <Hero />
      <div className="login-right">
        <div>
          <p className="login-text-box-top">
            Did You Forgot Your Password?
            <br /> Don’t Worry, You Can Reset Your
            <br /> Password In a Minutes.
          </p>
          <p className="login-text-box-bottom">
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
        </div>

        <InputAuth
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create new password"
          ifClicked={() => setIsVisible((prevState) => !prevState)}
          onKeyUp={buttonHandler}
          isVisible={isVisible}
          password
        />
        <InputAuth
          type={isConfirmVisible ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Re-enter new password"
          ifClicked={() => setIsConfirmVisible((prevState) => !prevState)}
          onKeyUp={buttonHandler}
          isVisible={isConfirmVisible}
          password
        />

        <div>
          {errorMsg ? <p className="text-validation">{errorMsg}</p> : null}
          <Button
            disabled={isDisabled}
            onClick={onResetPass}
            setPassword={setPassword}
          >
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
