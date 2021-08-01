import React, { useEffect, useReducer, useState } from "react";
import { FaArrowUp, FaPlus, FaTicketAlt, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Balance() {
  
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [UserData, setUserData] = useState(() => {
    return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('account-data')) : {balance: 0}
  })
  const [BalanceFormat, setBalanceFormat] = useState(Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0}).format(0))

  useEffect(() => {
    setBalanceFormat(Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(UserData? UserData.balance : 0));
    forceUpdate()
  }, [])

  

  return (
    <div className="profile-top-container set-margin-for-dash">
      <div className="margin-profile-container">
      
        <div className="balance-detail">
          <div className="row-balance">
            <h3>Balance</h3>
            <h1 className="col-white">{BalanceFormat}</h1>
            <p>+62 813-9387-7946</p>
          </div>
          <div className="row-balance">
          <Link style={{textDecoration:"none"}}>
          <div onClick="goToRetrieve()" className="button-alpha">
              <FaWallet></FaWallet>
              <h3>Retrieve</h3>
            </div>
          </Link>
           <Link style={{textDecoration:"none"}}>
           <div onClick="goToSubscription()" className="button-alpha">
              <FaTicketAlt></FaTicketAlt>
              <h3 style={{ fontSize: "18px" }}>Subscription</h3>
            </div>
           </Link>
          </div>
          <div className="row-balance">
            <Link style={{textDecoration:"none"}} to="/transfer">
            <div className="button-alpha">
              <FaArrowUp></FaArrowUp>
              <h3>Transfer</h3>
            </div>
            </Link>
           <Link style={{textDecoration:"none"}} to='/topup'>
           <div className="button-alpha">
              <FaPlus></FaPlus>
              <h3>Top Up</h3>
            </div>
           </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}
