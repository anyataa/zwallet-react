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
import { Redirect } from 'react-router-dom'

const NewPin = () => {
  const [pinValue, setPinValue] = useState("")
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const create = () => {
    if (localStorage.getItem("userData")) {
      console.log(JSON.parse(localStorage.getItem('userData')).userPin)
      axios.put(urlAPI + `/user/update-pin/${JSON.parse(localStorage.getItem("userData")).userId}`, {pin: pinValue})
      .then(res => {
        console.log(res.data)
        localStorage.setItem('userData', JSON.stringify(res.data))
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
            <Pin goTo='/dashboard' buttonValue="Change Pin" onClick={create} setPinValue={setPinValue}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default NewPin
