import React, { useReducer, useState } from 'react'
import { Footer } from '../component/Footer'
import "../style/dashboard.css"
import "../style/global.css"
import "../style/navBar.css"
import "../style/Font/style.css"
import NavBar from "../component/NavBar"
import Dashboard from "../component/Dashboard"
import Pin from "../component/Pin"
import axios from 'axios'
import { urlAPI } from '../asset/urls'
import { Link, Redirect } from 'react-router-dom'
import { ModalStatus } from '../component/ModalStatus'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

const NewPin = () => {
  const [pinValue, setPinValue] = useState("")
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [showModal, setShowModal] = useState('none')

  const create = () => {
    if (localStorage.getItem("userData")) {
      console.log(JSON.parse(localStorage.getItem('userData')).userPin)
      axios.put(urlAPI + `/user/update-pin/${JSON.parse(localStorage.getItem("userData")).userId}`, {pin: pinValue})
      .then(res => {
        console.log(res.data)
        localStorage.setItem('userData', JSON.stringify(res.data))
        setShowModal('flex')
        // forceUpdate();
      })
      .catch(err => console.log(err))
    }
  }

  if(JSON.parse(localStorage.getItem('userData')).pin == pinValue) {
    return <Redirect to='/profil'/>
  }
  return (
    <div className="container">
      <Dashboard />
      <NavBar />
      <div className="right-change-pin">
        <div className="personal-information-top-container">
          <div className="set-to-left">
            <h1 className="col-dark-grey">Create New Pin</h1>
            <p className="col-grey">
            Type your new 6 digits security PIN to use in Zwallet.
            </p>
          </div>
        </div>
        <div className="row-pin-group">
          <div className="pin-group center-pin-group">
            <Pin goTo='/profil' buttonValue="Change Pin" onClick={create} setPinValue={setPinValue}/>
          </div>
        </div>
        
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
          {/* Done  */}
      <Footer />
    </div>

  )
}

export default NewPin
