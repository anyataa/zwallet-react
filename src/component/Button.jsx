import React from 'react'
import '../style/Button.css'

const Button = ({onClick, disabled, children}) => {
  return (
    <button className="login-btn" disabled={disabled} onClick={onClick}>{children}</button>
  )
}

export default Button
