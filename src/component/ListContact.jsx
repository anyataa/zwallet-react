import React, { useEffect, useState } from "react";

import "../style/transfer.css";
import "../style/global.css";
import "../style/navBar.css";
import { Link } from "react-router-dom";


const ListContact = () => {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = () => {
    if (localStorage.getItem("friends-data")) {
      setData(JSON.parse(localStorage.getItem("friends-data")));
    }
  };

  const renderContact = () => {
    if(data.length > 0){
      return data.map((contact) => {
        if(contact.name.toLowerCase().includes(searchValue)){
          return (
            <Link
              to={`/transfer/${contact.id}`}
              style={{ textDecoration: "none" }}
              key={contact.id}
            >
              <div className="transfer-item-wrapper">
                <img
                  src={`https://randomuser.me/api/portraits/men/${contact.id}.jpg`}
                  alt="friend profile"
                  className="transfer-contact-image"
                  width={"60px"}
                />
                <div className="transer-contact">
                  <p className="transfer-primary-text">{contact.name}</p>
                  <p className="transfer-secondary-text">{contact.phone}</p>
                </div>
              </div>
            </Link>
          )
        }
      })
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
