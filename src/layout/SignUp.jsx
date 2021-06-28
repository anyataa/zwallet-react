import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { emailValidation } from '../global'
import InputAuth from "../component/InputAuth";
import Button from '../component/Button'
import Hero from '../component/Hero'

const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const buttonHandler = () => {
    if (email && password) {
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
            Start Accessing Banking Needs
            <br /> All Devices and All Platforms
            <br /> With 30.000+ Users
          </p>
          <p className="login-text-box-bottom">
            Transfering money is eassier than ever, you can access Zwallet
            wherever you are. Desktop, laptop, mobile phone? we cover all of
            that for you!
          </p>
        </div>

        <InputAuth
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Username"
          onKeyUp={buttonHandler}
        />
        <InputAuth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail"
          onKeyUp={buttonHandler}
        />
        <InputAuth
          type={isVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          ifClicked={() => setIsVisible((prevState) => !prevState)}
          onKeyUp={buttonHandler}
          isVisible={isVisible}
          password
        />
        <a className="text" style={{ textDecoration: "none" }}>
          Forgot Password?
        </a>
        <div>
          {/* <p id="text-validation">Email or Password Invalid</p> */}
          <Button disabled={isDisabled} onClick={() => emailValidation(email)}>
            Sign Up
          </Button>
        </div>
        <p className="bottom-text">
          Already have an account? Let’s&nbsp;
          <Link style={{ textDecoration: "none" }}>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
