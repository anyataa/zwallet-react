import React from 'react'
import Hero from '../component/Hero'

import { Link } from 'react-router-dom'
import { QRGenerator } from '../component/QRGenerator'

export const LoginQR = () => {
    return (
        <div className="login-container">
        <Hero />
        <div className="login-right">
          <div>
            <p className="login-text-box-top">
                Login With QR Code
              <br /> 
              Finance Never Been This Easy!
              <br /> Only Scan and Ready to Access!
            </p>
            <p className="login-text-box-bottom">
              Login with QR Code! 
              Scan the QR Code with Your Zwallet Mobile on Your Phone!
            </p>
          </div>
          <QRGenerator></QRGenerator>

          <p className="bottom-text">
            Don’t have an account? Let’s{" "}
            <Link to='/signup' style={{ textDecoration: "none" }}>Sign Up</Link>
          </p>
        </div>
      </div>
    )
}
