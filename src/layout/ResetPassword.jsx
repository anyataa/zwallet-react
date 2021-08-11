import React, { useState } from "react";
import Hero from "../component/Hero";
import InputAuth from "../component/InputAuth";
import "../style/newLogin.css";
import Button from "../component/Button";
import { Redirect} from 'react-router-dom';
import { emailValidation } from "../global";
import axios from "axios";
import { urlAPI } from "../asset/urls";


const ResetPassword = () => {
  const [email, setEmail] = useState();

  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');


  const buttonHandler = () => {
    if (email) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onReset = () => {
    if(emailValidation(email)){
      axios.post(urlAPI + "/user/resetpass", {email})
      .then(res => {
        axios.post(urlAPI + `/mail/sendresetpass/${res.data.userId}`, {recipient: email})
        .then(res => setErrorMsg(res.data))
        .catch(err => console.log(err))
      })
      .catch(err => {
        setErrorMsg("Email does not exist!")
      })
    }else{
      setErrorMsg('Invalid Email')
    }
  }

  if(errorMsg == 'Email sent successfully!'){
    return <Redirect to="/mailForPassword" />
  }
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
          {
            errorMsg ? <p className='text-validation'>{errorMsg}</p> : null
          }
            <Button disabled={isDisabled} onClick={onReset}>
              Confirm
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
