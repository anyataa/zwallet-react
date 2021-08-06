import React, { useState } from "react";
import { Footer } from "../component/Footer";
import "../style/dashboard.css";
import "../style/global.css";
import "../style/navBar.css";
import "../style/Font/style.css";
import NavBar from "../component/NavBar";
import Dashboard from "../component/Dashboard";
import InputAuth from "../component/InputAuth";
import Button from "../component/Button";
import { ModalStatus } from "../component/ModalStatus";
import axios from 'axios'
import { urlAPI } from '../asset/urls'
import { Link, Redirect } from 'react-router-dom'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

const ChangePassword = () => {
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [isNewVisible, setIsNewVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [msg, setMsg] = useState('');
  const [showModal, setShowModal] = useState('none')


  const buttonHandler = () => {
    if (password && newPassword && confirmPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    console.log(isDisabled);
  };

  const onChangePass = () => {
    var body = {
      currentPass: password,
      newPass: newPassword,
      confirmPass: confirmPassword
    }
    axios.put(urlAPI + `/user/change-password/${JSON.parse(localStorage.getItem('userData')).userId}`, body)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      setMsg('Invalid Current Password!')
      console.log('masuk ke error')
    })
  }

  return (
      <div className="right-change-password">
        <div className="personal-information-top-container">
          <div className="set-to-left">
            <h1 className="col-dark-grey">Change Password</h1>
            <p className="col-grey">
              You must enter your current password and then type your new
              password twice.
            </p>
          </div>
        </div>
        <div className="bottom-personal-information-container2">
          <InputAuth
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Current password"
            ifClicked={() => setIsVisible((prevState) => !prevState)}
            onKeyUp={buttonHandler}
            isVisible={isVisible}
            password
          />

          <InputAuth
            type={isNewVisible ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
            ifClicked={() => setIsNewVisible((prevState) => !prevState)}
            onKeyUp={buttonHandler}
            isVisible={isNewVisible}
            password
          />
    
          <InputAuth
            type={isConfirmVisible ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat new password"
            ifClicked={() => setIsConfirmVisible((prevState) => !prevState)}
            onKeyUp={buttonHandler}
            isVisible={isConfirmVisible}
            password
          />
         
          <div>
            {
            msg ? <p className='text-validation'>{msg}</p> : null
            }
            <Button onClick={onChangePass} disabled={isDisabled}>Change Password</Button>
            </div>
         {/* <ModalStatus ></ModalStatus> */}
         <div id="modal" style={{display: showModal }} >
          {/* {console.log(props)} */}
      <div className="pin-confirmation-box">
        <div className="modal-close-icon-wrapper">
          <p className="transfer-primary-text" />
          <FaTimes className="modal-close-icon" ></FaTimes>
          {/* {props.display} */}
        </div>
        <div className="transfer-pin-input-wrapper">
          <FaCheckCircle className='col-green' size='100'></FaCheckCircle>
         
        </div>
        <div className="success-change-password">
          <h1> Success!</h1>
        </div>
        <Link style={{textDecoration:'none', marginLeft:'60%'}} to='/dashboard'>
        <input type="button" defaultValue="Done" className="transfer-btn" id="back-to-profile" onClick />
        </Link>  
      </div>
    </div>
          </div>
        </div>
      
      

  );
};

export default ChangePassword;
