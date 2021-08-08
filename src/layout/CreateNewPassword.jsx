import React, { useState, useReducer} from "react";
import Hero from "../component/Hero";
import InputAuth from "../component/InputAuth";
import "../style/newLogin.css";
import Button from "../component/Button";
import axios from 'axios'
import { urlAPI } from '../asset/urls'
import { Link, Redirect } from 'react-router-dom'

const CreateNewPassword = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const buttonHandler = () => {
    if (password && confirmPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    console.log(isDisabled);
  };

  // const reset = () => {
  //   if (localStorage.getItem('userData')) {
  //     console.log(JSON.parse(localStorage.getItem('userData')).userPassword)
  //     axios.put(urlAPI + `/user/reset-password/${JSON.parse(localStorage.getItem('userData')).userId}`, {password: password}, {password: confirmPassword})
  //     .then(res => {
  //       console.log(res.data)
  //       localStorage.setItem('userData', JSON.stringify(res.data))
  //     })
  //     .catch(err => console.log(err))
  //   }
  // }

  const onResetPass = () => {
      var body = {
        password: password,
        password: confirmPassword
      }
      axios.put(urlAPI + `/user/reset-password/${JSON.parse(localStorage.getItem('resetPassword')).userId}`, body)
      .then(res => {
        console.log(res.data)
       
        if(JSON.parse(localStorage.getItem('resetPassword'))) {
          localStorage.removeItem("resetPassword")
        }
      })
      .catch(err => {
        console.log(err)
        console.log('masuk ke error')
        setErrorMsg('Invalid Password')
      })
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
          {
            errorMsg ? <p className="text-validation">{errorMsg}</p> : null
          }
          <Link to='/login' style={{textDecoration:"none"}}>
            {/* <Button disabled={isDisabled}> */}
            <Button disabled={isDisabled} onClick={onResetPass} setPassword={setPassword}>
              Reset Password
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
