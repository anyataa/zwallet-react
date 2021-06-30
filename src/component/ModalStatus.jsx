import React from 'react'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const ModalStatus = (props) => {
    return (
      <div id="modal" style={{display: props.display}} >
          {console.log(props)}
      <div className="pin-confirmation-box">
        <div className="modal-close-icon-wrapper">
          <p className="transfer-primary-text" />
          <FaTimes className="modal-close-icon" onClick={e => props.setDisplay("none")}></FaTimes>
          {/* {props.display} */}
        </div>
        <div className="transfer-pin-input-wrapper">
          <FaCheckCircle className='col-green' size='100'></FaCheckCircle>
        </div>
        <div className="success-change-password">
          <h1>{props.activity} Success!</h1>
        </div>
        <Link style={{textDecoration:'none', marginLeft:'60%'}} to='/dashboard'>
        <input type="button" defaultValue="Done" className="transfer-btn" id="back-to-profile" onClick />
        </Link>
       
      </div>
    </div>
    )
}
