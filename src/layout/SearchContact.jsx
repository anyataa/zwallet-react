import React, { useEffect, useState } from 'react'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { BsPlusCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import InputAuth from '../component/InputAuth'
import axios from 'axios'
import { urlAPI } from '../asset/urls'

const SearchContact = (props) => {
  const [phone, setPhone] = useState('')
  const [data, setData] = useState({})
  const [errorMsg, setErrorMsg] = useState('');


  const onSearch = (e) => {
    axios.get(`${urlAPI}/phone/number/${phone[0] == 0 ? phone : 0 + phone}`)
    .then(res => {
        if(res.data.phoneNumber !== JSON.parse(localStorage.getItem("userData")).phoneNumber){
          console.log(res.data)
          if(typeof(res.data) == 'string'){
            setErrorMsg(res.data)
          }else{
            setData(res.data)
            setErrorMsg('')
          }
        }else{
          setErrorMsg('Phone Number Not Found!')
        }
      })
      .catch(err => {
        setErrorMsg('Phone Number Not Found!')
      })
  }

  const onAddFriend = () => {
    axios.post(urlAPI + '/friends/add', {userId: JSON.parse(localStorage.getItem("userData")).userId, friendId: data.userId})
    .then(res => {
      console.log(res.data)
      setErrorMsg(res.data)
      window.location.replace(`/transfer`)
    })
    .catch(err => console.log(err))
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
              <BsPlusCircleFill onClick={onAddFriend} size='30' color='#6379F4' className='transfer-icon-btn'/>
              <RiSendPlane2Fill onClick={() => window.location.replace(`/transfer/${data.userId}`)} size='30' color='#6379F4' className='transfer-icon-btn'/>
            </div>
          </div>
          : null
        }
        {
          errorMsg ? <p className='text-validation' style={{marginTop: '50px'}}>{errorMsg}</p> : null
        }
      </div>
    </div>
  )
}

export default SearchContact
