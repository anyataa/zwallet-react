import React, { useReducer, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { emailValidation, setGraphData, setTransactionData } from "../global";
import InputAuth from "../component/InputAuth";
import Button from "../component/Button";
import Hero from "../component/Hero";
import axios from "axios";

import { urlAPI } from "../asset/urls"
import { useSelector } from "react-redux";


const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const user = useSelector(state => state.user)

  const buttonHandler = () => {
    if (username && email && password && phone) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onRegister = () => {
    if (emailValidation(email)) {
      var body = {
        username,
        email,
        password,
        phoneNumber: phone[0] == 0 ? phone : "0" + phone,
      };
      axios
        .post(`${urlAPI}/user/signup`, body)
        .then((res) => {
          console.log(res.data);
          if (res.data.message.includes("created")) {
            localStorage.setItem("userData", JSON.stringify(res.data.data));
            // Called when sign up too

        if(user.accountId){
          setTransactionData(user.accountId);
          setGraphData(user.accountId)
          console.log("in")
          
          
        }
          forceUpdate();
        }else{
          setErrorMsg(res.data.message)
        }
      })
      .catch(err => {
        console.log(err)
        console.log("evan")
      })
    }else{
      setErrorMsg('Email Format Invalid')

    }
  };

  if (JSON.parse(localStorage.getItem("userData"))) {
    return <Redirect to="/createpin" />;
  }

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
          placeholder="Enter your Full Name"
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
        <InputAuth
          type="number"
          phone
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          onKeyUp={buttonHandler}
        />
        <Link
          to="/resetPassword"
          className="text"
          style={{ textDecoration: "none" }}
        >
          Forgot Password?
        </Link>
        <div>
          {errorMsg ? <p className="text-validation">{errorMsg}</p> : null}
          <Button disabled={isDisabled} onClick={onRegister}>
            Sign Up
          </Button>
        </div>
        <p className="bottom-text">
          Already have an account? Let’s&nbsp;
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
