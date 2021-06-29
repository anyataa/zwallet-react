import React, { useState } from "react";
import Hero from "../component/Hero";
import InputAuth from "../component/InputAuth";
import "../style/newLogin.css";
import Button from "../component/Button";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState();

  const [isDisabled, setIsDisabled] = useState(true);

  const buttonHandler = () => {
    if (email) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    console.log(isDisabled);
  };

  return (
    <div className="login-container">
      <Hero />
      <div className="login-right">
        <div>
          <p className="login-text-box-top">
            Did You Forgot Your Password?
            <br /> Don’t Worry, You Can Reset Your
            <br />  Password In a Minutes.
          </p>
          <p className="login-text-box-bottom">
            To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
          </p>
        </div>

        <InputAuth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail"
          onKeyUp={buttonHandler}
        />
        <div>
          <Link to="/createNewPassword">
            <Button disabled={isDisabled}>
              Confirm
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
