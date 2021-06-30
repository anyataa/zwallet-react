import React, { useReducer, useState } from "react";
import { Link, Redirect } from 'react-router-dom'
import { emailValidation } from '../global'
import InputAuth from "../component/InputAuth";
import Button from '../component/Button'
import Hero from '../component/Hero'
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isVisible, setIsVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const buttonHandler = () => {
    if (username && email && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onRegister = () => {
    if(emailValidation(email)){
      axios.get(`http://localhost:4000/user?email=${email}`)
      .then(res => {
        if(res.data.length > 0){
          console.log('masuk')
          setErrorMsg('Email is not available, please try another email!')
        }else{
          axios.get('http://localhost:4000/user')
          .then(res => {
            axios.post('http://localhost:4000/user', {
              id: res.data[res.data.length-1].id + 1,
              email,
              password,
              name: "",
              username,
              phone: '',
              image: '',
              pin: '000000',
              balance: 0
            })
            .then(res => {
              console.log(res.data)
              localStorage.setItem('userData', JSON.stringify(res.data))
              forceUpdate();
            })
            .catch(err => {
              console.log(err)
            })
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
    }else{
      setErrorMsg('Email Format Invalid')
    }
  }
  
  if(JSON.parse(localStorage.getItem('userData'))){
    return <Redirect to='/createpin'/>
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
        <Link to='/resetPassword' className="text" style={{ textDecoration: "none" }}>
          Forgot Password?
        </Link>
        <div>
          {
            errorMsg ? <p className="text-validation">{errorMsg}</p> : null
          }
          <Button disabled={isDisabled} onClick={onRegister}>
            Sign Up
          </Button>
        </div>
        <p className="bottom-text">
          Already have an account? Let’s&nbsp;
          <Link to='/login' style={{ textDecoration: "none" }}>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
