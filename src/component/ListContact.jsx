import React, { useEffect, useState } from "react";

import "../style/transfer.css";
import "../style/global.css";
import "../style/navBar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import { AiOutlineSearch } from "react-icons/ai";


const ListContact = () => {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    // fetchProfile()
    fetchContact()
  }, [])

  const fetchProfile = () => {
    if (localStorage.getItem("friends-data")) {
      setData(JSON.parse(localStorage.getItem("friends-data")));
    }
  };

  
  const fetchContact = () => {
    if (localStorage.getItem("userData")) {
      axios.get(`http://localhost:8080/zwallet-api/friends/${JSON.parse(localStorage.getItem("userData")).userId}`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))
    }
  }

  const renderContact = () => {
    if(data.length > 0){
      return data.map((contact, index) => {
        if(contact.username.toLowerCase().includes(searchValue.toLowerCase())){
          return(
            <Link
              to={`/transfer/${contact.friendId}`}
              style={{ textDecoration: "none" }}
              key={contact.friendId}
            >
              <div className="transfer-item-wrapper">
                <img
                  src={contact.userImage ? `https://randomuser.me/api/portraits/men/${contact.friendId}.jpg` : "https://i.ibb.co/FHLx6h9/default.png"}
                  alt="friend profile"
                  className="transfer-contact-image"
                  width={"60px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">{contact.username}</p>
                  <p className="transfer-secondary-text">{contact.phoneNumber}</p>
                </div>
              </div>
            </Link>
          )
        }
      })
    }else{
      return <h1 style={{margin: 'auto'}}>"I HAVE NO FRIENDS, THERE ARE ONLY PEOPLE I LOVE."<br/><br/>- Louis Aragon -</h1>
    }
  }

  return (
    <div className='right'>
      <div style={{display: 'flex', justifyContent: "space-between"}}>
        <p className="transfer-primary-text" style={{margin: '30px 0'}}>Search Receiver By Friends List</p>
        <Button><AiOutlineSearch style={{fontSize: '25px', marginRight: '10px'}}/>Search by phone number</Button>
      </div>
      <input
        value={searchValue}
        className="transfer-input"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Contact"
      />
      {renderContact()}
      {/* <Link
        // to={`/transfer/${contact[1]}`}
        style={{ textDecoration: "none" }}
        // key={contact[0]}
      >
        <div className="transfer-item-wrapper">
          <img
            src={`https://randomuser.me/api/portraits/men/1.jpg`}
            alt="friend profile"
            className="transfer-contact-image"
            width={"60px"}
          />
          <div className="transer-contact">
            <p className="transfer-primary-text">fads</p>
            <p className="transfer-secondary-text">324234234</p>
          </div>
        </div>
      </Link> */}
    </div>
  )
}

export default ListContact
