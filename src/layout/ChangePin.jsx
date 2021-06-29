import React from 'react'
import { Footer } from '../component/Footer'
import "../style/dashboard.css"
import "../style/global.css"
import "../style/navBar.css"
import "../style/Font/style.css"
import NavBar from "../component/NavBar"
import Dashboard from "../component/Dashboard"
import Pin from "../component/Pin"

const ChangePin = () => {

  return (
    <div className="container">
      <Dashboard />
      <NavBar />
      <div className="right-change-password">
        <div className="personal-information-top-container">
          <div className="set-to-left">
            <h1 className="col-dark-grey">Change PIN</h1>
            <p className="col-grey">
              Enter your current 6 digits Zwallet PIN below to continue to the next steps.
            </p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', paddingTop: '50%', paddingRight: '35%'}}>
          <Pin buttonValue="Continue" />
          <br/>
          <br/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ChangePin
