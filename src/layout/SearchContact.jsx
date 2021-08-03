import React, { useEffect, useState } from 'react'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { BsPlusCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import InputAuth from '../component/InputAuth'
import axios from 'axios'
import { urlAPI } from '../asset/urls'

const SearchContact = () => {
  const [phone, setPhone] = useState('')
  const [data, setData] = useState([])

  const onSearch = (e) => {
    if(phone !== JSON.parse(localStorage.getItem("userData")).phoneNumber){
      axios.get(urlAPI + '/phone/number/' + phone)
      .then(res => {
        setData(res.data)
      })
    }
  }

  return (
    <div className="right">
      <div style={{display: 'flex', justifyContent: "space-between", marginBottom: '100px'}}>
        <p className="transfer-primary-text" style={{margin: '30px 0'}}>Search Receiver By Phone Number</p>
        <Link to='/transfer' style={{textDecoration: "none"}}>
          <Button>
                Back to Friend List
          </Button>
        </Link>
      </div>
      <div className="transfer-input-amount-wrapper2">
        <InputAuth
            type="number"
            phone
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            // onKeyUp={buttonHandler}
        />
        <div style={{marginTop: '50px'}}>
          <Button style={{cursor:'pointer'}} onClick={onSearch} >
              Search
          </Button>
        </div>
        {
          Object.keys(data).length > 0 ?
          <div className="transfer-item-wrapper" style={{width:'100%'}}>
            <img
              src={"https://i.ibb.co/FHLx6h9/default.png"}
              alt="friend profile"
              className="transfer-contact-image"
              width={"60px"}
            />
            <div className="transer-contact">
              <p className="transfer-primary-text">{data.username}</p>
              <p className="transfer-secondary-text">{data.phoneNumber}</p>
            </div>
            <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: "flex-end", marginRight: '20px'}}>
              <BsPlusCircleFill size='30' color='#6379F4' className='transfer-icon-btn'/>
              <RiSendPlane2Fill size='30' color='#6379F4' className='transfer-icon-btn'/>
            </div>
          </div>
          : null
        }
      </div>
    </div>
  )
}

export default SearchContact
