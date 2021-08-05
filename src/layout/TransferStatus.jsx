import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SuccessLogo from '../asset/image/images/success.svg'
import FailedLogo from '../asset/image/images/failed.svg'
import { urlAPI } from '../asset/urls'
import axios from 'axios'

const TransferStatus = ({match}) => {
  const [isSuccess, setIsSuccess] = useState(true)
  const [data, setData] = useState({})
  const [userData, setUserData] = useState()


  useEffect(() => {
    setIsSuccess(match.params.status == 'success' ? true : false)
    setData(JSON.parse(localStorage.getItem('transfer-data')))
    console.log(JSON.parse(localStorage.getItem('transfer-data')))
    getFriendData()
  }, [match.params.status])

  const getFriendData = () => {
    axios.get(urlAPI + `/user/getfriend/${data.id}`)
    .then(res => {
      console.log(res.data)
      setUserData(res.data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='right'>
      <div className="transfer-right-top">
        <img
          src={isSuccess ? SuccessLogo : FailedLogo}
          alt=""
          className="success-failed-image"
        />
        <p className="transfer-primary-text">{isSuccess ? 'Transfer Success' : 'Transfer Failed'}</p>
        {
          isSuccess ? null : <p className="transfer-secondary-text">We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
        }

      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Amount</p>
        <p className="transfer-primary-text">Rp {data.nominalTransfer}</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Balance Left</p>
        <p className="transfer-primary-text">Rp {data.balance}</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Date & Time</p>
        <p className="transfer-primary-text">{Date().toLocaleString().slice(0, 21)}</p>
      </div>
      <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
        <p className="transfer-secondary-text">Notes</p>
        <p className="transfer-primary-text">{data.noteTransfer}</p>
      </div>
      <p className="transfer-primary-text">Transfer To</p>
      <div className="transfer-item-wrapper">
        <img
          src={`https://randomuser.me/api/portraits/men/${data.id}.jpg`}
          alt=""
          className="transfer-contact-image"
        />
        <div className="transfer-contact">
          <p className="transfer-primary-text">{data.userName ? data.userName : "Samuel Suhi"}</p>
          <p className="transfer-secondary-text">{data.phoneNumber ? data.phoneNumber : "082222222222"}</p>
        </div>
      </div>
      <div className="transfer-right-bottom-wrapper">
        {
          isSuccess ? 
            <button className="transfer-download-btn">
              <img src={require("../asset/image/images/share.svg").default} alt="" />
            </button>
            : null
        }
        {
          isSuccess ?
          <button className="transfer-download-btn">
            <img src={require("../asset/image/images/download.svg").default} alt="" /> &nbsp;&nbsp;
            Download PDF
          </button>
          : null
        }
        <Link to='/transfer'>
          <input
            type="button"
            value={isSuccess ? "Back to Home" : "Try Again"}
            className="transfer-btn"
            onClick=""
          />
        </Link>
      </div>
    </div>
  )
}

export default TransferStatus
