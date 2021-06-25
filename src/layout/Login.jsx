import React, { useState } from "react";
import Hero from "../component/Hero";
import InputAuth from "../component/InputAuth";
import { emailValidation } from "../global";
import '../style/newLogin.css'
import { Link } from 'react-router-dom'
import Button from "../component/Button";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  
  const buttonHandler = () => {
    if(email && password){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
    console.log(isDisabled)
  }

  return (
    <div className='login-container'>
      <Hero />
      <div className='login-right'>

        <div>
          <p className="login-text-box-top">Start Accessing Banking Needs<br/> All Devices and All Platforms<br/> With 30.000+ Users</p>
          <p class="login-text-box-bottom">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
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
        <a class="text" style={{textDecoration: 'none'}}>Forgot Password?</a>
        <div>
          {/* <p id="text-validation">Email or Password Invalid</p> */}
          <Button disabled={isDisabled} onClick={() => emailValidation(email)}>Login</Button>
        </div>
        <p class="bottom-text">Don’t have an account? Let’s <Link style={{textDecoration: 'none'}}>Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
