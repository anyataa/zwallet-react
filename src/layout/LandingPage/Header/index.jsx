import React from 'react';
// import "../../../style/landingpage.css";

const Header = () => {
  return (
    <div className ="landing-header">
      <div className="left-header">
          <p className="header-title">Zwallet</p>
          <p className="header-subtitle">Awesome App For Saving <span>Time.</span></p>
          <p className="header-description">We bring you a mobile app for banking problems that oftenly wasting much
                    of your times.</p>
      </div>
      <div className="right-header">
          <button className="login-btn-land">Login</button>
          <button className="signup-btn-land">Sign Up</button>
      </div>
    </div>
  )
}

export default Header