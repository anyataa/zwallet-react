import React, { useEffect, useState } from "react";
// import "../style/transfer.css";
// import "../style/global.css";
// import "../style/navBar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../../component/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { urlAPI } from "../../asset/urls";


const PartnerList = () => {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [Partner, setPartner] = useState([])

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
      // axios.get(`http://localhost:8080/zwallet-api/friends/${JSON.parse(localStorage.getItem("userData")).userId}`)
      axios.get(`${urlAPI}/user/bank`)
      .then(res => {
        console.log(res.data)
        setData(res.data.data)
      })
      .catch(err => console.log(err))
    }
  }

  const renderContact = () => {
    if(data.length > 0){
      console.log(data)
      return data.map((bank, index) => {
        if(bank.username.toLowerCase().includes(searchValue.toLowerCase())){
          return(
            <Link
              to={`/retrieval/${bank.username}`}
              style={{ textDecoration: "none" }}
              key={bank.friendId}
            >
              <div className="transfer-item-wrapper">
                <img
                  src={bank.username ? `https://randomuser.me/api/portraits/men/${bank.username}.jpg` : "https://i.ibb.co/FHLx6h9/default.png"}
                  alt="friend profile"
                  className="transfer-contact-image"
                  width={"60px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">{bank.username}</p>
                  <p className="transfer-secondary-text">{bank.username}</p>
                </div>
              </div>
            </Link>
          )
        }
      })
    }else{
      return <h1 style={{margin: 'auto'}}>Couldn't Load The Partners Data<br/><br/>Please Check Your Internet Connection</h1>
    }
  }

  return (
    <div className='right'>
      <div style={{display: 'flex', justifyContent: "space-between"}}>
        <p className="transfer-primary-text" style={{margin: '30px 0'}}>Choose Your Retrieval Methods</p>
      </div>
      {renderContact()}
    </div>
  )
}

export default PartnerList
