import React, { useState } from "react";
import Hero from "../component/Hero";
import InputAuth from "../component/InputAuth";
import "../style/newLogin.css";
import Button from "../component/Button";

const CreateNewPassword = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const buttonHandler = () => {
    if (password && confirmPassword) {
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
          <Button disabled={isDisabled}>
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
