import React from 'react'
import '../style/Button.css'

const Button = ({onClick, disabled}) => {
  return (
    <button className="login-btn" disabled={disabled} onClick={onClick}>Login</button>
  )
}

export default Button
