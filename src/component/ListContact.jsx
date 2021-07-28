import React, { useEffect, useState } from "react";

import "../style/transfer.css";
import "../style/global.css";
import "../style/navBar.css";
import { Link } from "react-router-dom";
import axios from "axios";


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
      console.log(JSON.parse(localStorage.getItem("friends-data")))
    }
  };

  const fetchContact = () => {
    if (localStorage.getItem("userData")) {
      axios.get(`http://localhost:8080/zwallet-api/friends/${JSON.parse(localStorage.getItem("userData")).userId}`)
      .then(res => {
        // console.log(res.data)
        setData(res.data)
      })
      .catch(err => console.log(err))
    }
  }

  const renderContact = () => {
    if(data.length > 0){
      console.log(data)
      return data.map(contact => {
        if(contact[2].toLowerCase().includes(searchValue.toLowerCase()))
        return(
          <Link
              to={`/transfer/${contact[1]}`}
              style={{ textDecoration: "none" }}
              key={contact[0]}
            >
              <div className="transfer-item-wrapper">
                <img
                  src={`https://randomuser.me/api/portraits/men/${contact[0]}.jpg`}
                  alt="friend profile"
                  className="transfer-contact-image"
                  width={"60px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">{contact[2]}</p>
                  <p className="transfer-secondary-text">{contact[4]}</p>
                </div>
              </div>
            </Link>
        )
      })
      // console.log(data[0].user.username)
      // return data.map((contact, index) => {
      //   if(contact.user.username.toLowerCase().includes(searchValue.toLowerCase())){
      //     return(
      //       <Link
      //         to={`/transfer/${contact.friend.userId}`}
      //         style={{ textDecoration: "none" }}
      //         key={contact.friendshipId}
      //       >
      //         <div className="transfer-item-wrapper">
      //           <img
      //             src={`https://randomuser.me/api/portraits/men/${contact.friend.userId}.jpg`}
      //             alt="friend profile"
      //             className="transfer-contact-image"
      //             width={"60px"}
      //           />
      //           <div className="transer-contact">
      //             <p className="transfer-primary-text">{contact.user.username}</p>
      //             <p className="transfer-secondary-text">{contact.phone}</p>
      //           </div>
      //         </div>
      //       </Link>
      //     )
      //   }
      // })
    //   return data.map((contact) => {
    //     if(contact.name.toLowerCase().includes(searchValue.toLowerCase())){
    //       return (
    //         <Link
    //           to={`/transfer/${contact.id}`}
    //           style={{ textDecoration: "none" }}
    //           key={contact.id}
    //         >
    //           <div className="transfer-item-wrapper">
    //             <img
    //               src={`https://randomuser.me/api/portraits/men/${contact.id}.jpg`}
    //               alt="friend profile"
    //               className="transfer-contact-image"
    //               width={"60px"}
    //             />
    //             <div className="transer-contact">
    //               <p className="transfer-primary-text">{contact.name}</p>
    //               <p className="transfer-secondary-text">{contact.phone}</p>
    //             </div>
    //           </div>
    //         </Link>
    //       )
    //     }
    //   })
    }else{
      return <h1>No data</h1>
    }
  }

  return (
    <div className='right'>
      <input
        value={searchValue}
        className="transfer-input"
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search Contact"
      />
      {renderContact()}
    </div>
  )
}

export default ListContact
