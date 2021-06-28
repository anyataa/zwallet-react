import React, { useReducer, useState } from "react";
import Hero from "../component/Hero";
import InputAuth from "../component/InputAuth";
import { emailValidation } from "../global";
import "../style/newLogin.css";
import { Link, Redirect } from "react-router-dom";
import Button from "../component/Button";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const buttonHandler = () => {
    if (email && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onLogin = () => {
    if(emailValidation(email)){
      axios.get(`http://localhost:4000/user?email=${email}&password=${password}`)
      .then(res => {
        res.data.length > 0 ?
        localStorage.setItem('userData', JSON.stringify(res.data[0]))
        : setErrorMsg('Email or Password Incorrect')
        forceUpdate();
      })
      .catch(err => {
        console.log(err)
      })
    }else{
      setErrorMsg('Email Format Invalid')
    }
  }
  
  if(JSON.parse(localStorage.getItem('userData'))){
    return <Redirect to='/dashboard'/>
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
          {
            errorMsg ? <p className='text-validation'>{errorMsg}</p> : null
          }
          <Button disabled={isDisabled} onClick={onLogin}>
            Login
          </Button>
        </div>
        <p className="bottom-text">
          Don’t have an account? Let’s{" "}
          <Link style={{ textDecoration: "none" }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
