import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPlus, FaTicketAlt, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Balance() {
  const [UserData, setUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {balance: 0})
  const [BalanceFormat, setBalanceFormat] = useState(Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0}).format(123456))
  useEffect(() => {
 setBalanceFormat(Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(UserData? UserData.balance : 0))
   
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
          <div onclick="goToRetrieve()" className="button-alpha">
              <FaWallet></FaWallet>
              <h3>Retrieve</h3>
            </div>
          </Link>
           <Link style={{textDecoration:"none"}}>
           <div onclick="goToSubscription()" className="button-alpha">
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
