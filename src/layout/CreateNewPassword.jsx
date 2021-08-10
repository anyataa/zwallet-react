import React, { useState, useReducer } from "react";
import Hero from "../component/Hero";
import InputAuth from "../component/InputAuth";
import "../style/newLogin.css";
import Button from "../component/Button";
import axios from "axios";
import { urlAPI } from "../asset/urls";
import { Link, Redirect } from "react-router-dom";

const CreateNewPassword = ({match}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [isRedirect, setIsRedirect] = useState()

  const buttonHandler = () => {
    if (password && confirmPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onResetPass = () => {
    if(password.length >= 8){
      if(confirmPassword == password){
        var body = {
          password,
          // password: confirmPassword,
        };
        axios.put(urlAPI + `/user/reset-password/${match.params.id}`, body)
        .then((res) => {
          setIsRedirect(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }else{
        setErrorMsg("Password do not match.");
      }
    }else{
      setErrorMsg("Password must be at least 8 characters.");
    }
  };

  if(isRedirect){
    return <Redirect to='/login'/>
  }
  return (
    <div className="login-container">
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
