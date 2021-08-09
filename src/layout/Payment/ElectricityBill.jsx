import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PLN from '../../asset/image/pln.jpg'

const ElectricityBill = () => {
  return (
    <div className='right'>
      <div className="transfer-right-top">
        <img
          src={PLN}
          style={{height: '50px', width: '100px'}}
        />
        <p className="transfer-primary-text"></p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Customer ID</p>
        <p className="transfer-primary-text">1234567890</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Customer Name</p>
        <p className="transfer-primary-text">La Casa de Papel</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Billing Amount</p>
        <p className="transfer-primary-text">Rp. 100.000</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Admin</p>
        <p className="transfer-primary-text">Rp. 2.500</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Total</p>
        <p className="transfer-primary-text">Rp. 102.500</p>
      </div>
      <div className="set-transfer-button-confirmation">
        <Link to='/billing/electricity' style={{ textDecoration: "none" }} >
          <input type="button" value="Back" className="transfer-btn" />
        </Link>
        <Link>
          <input type="button" value="Pay" className="transfer-btn"/>
        </Link>
      </div>
      </div>
  )
}

export default ElectricityBill
