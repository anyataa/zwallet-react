import React, { useEffect, useReducer, useState } from "react";
import "../style/navBar.css";
import { FaArrowDown, FaArrowUp, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const [UserData, setUserData] = useState(null)
  // const [user.userName, setUserName] = useState("")
  // const [user.phoneNumber, setPhoneNumber] = useState("")
  // const [user.userImage, setUserImage] = useState({})
  const [Today, setToday] = useState(localStorage.getItem("transaction-data") ? JSON.parse(localStorage.getItem("transaction-data")).list2Day : [])
  const [Week, setWeek] = useState(localStorage.getItem("transaction-data") ? JSON.parse(localStorage.getItem("transaction-data")).list2Week: [])
  const [transactionType, setTransactionType] = useState([
    "Transfer",
    "Subscription",
    "Payment",
    "Top Up",
    "Retrieve"])
  const [toFrom, setToFrom] = useState(["to", "from"])
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const user = useSelector(state => state.user)

  return (
    <div className="nav-container">
      <nav>
        <h2 className="col-secondary">Zwallet</h2>
       
        <div className="profile-container">
        <Link to={"/profil"} style={{ textDecoration: 'none' }, {color : "black" }} >
       
          <div className="profile-img">
            {user.userImage?  <img src={`https://randomuser.me/api/portraits/men/1}.jpg`} alt="" width="50px" /> : <img src={require("../asset/icons/person.svg").default}  className="create-contact-avatar-input" alt="" width="50px" /> }
           
          </div>
          </Link>

          <div className="profile-data" >
            {
             user.userName? <h3 >{user.userName}</h3> : <h3>Error</h3>
            }
            <p className="col-white50">{user.phoneNumber ? "+62 "+user.phoneNumber.slice(1,user.phoneNumber.length) : "Error"}</p>
          </div>
     
          <div className="profile-img">
            <input id="notif-btn" type="checkbox" hidden={true} />
            <label htmlFor="notif-btn">
              <h2 className="fa fa-bell icon-notif">
                {" "}
                <FaBell></FaBell>
              </h2>
            </label>
            {/* <!-- Nav Bar Body --> */}
            <div className="wrapper-notification">
              <p className="detail-notif-duration">Today</p>
              {Today && Today.length > 0? Today.slice(0,2).map((transaction, idx) => (
              <li key={idx}>
                <div className="card-notification">
                  {transaction.transactionType > 0?   <i className="fa fa-arrow-down">
                    <FaArrowDown></FaArrowDown>
                  </i> :  <i className="fa fa-arrow-up">
                    <FaArrowUp></FaArrowUp>
                  </i>}
                
                  <div className="notif-detail">
                    <p>{transactionType[transaction.transactionDetails-1]} {toFrom[transaction.transactionType]} {transaction.transactionType > 0 ?  transaction.sender :transaction.receiver}</p>
                    <h2>{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(transaction? transaction.amount : 0)}</h2>
                  </div>
                </div>
              </li>)) : <div className="card-notification" style={{height : 195}}>
          
                  <p className="col-grey" >Oopsie, You Have No Transaction History Yet For Today. . . </p>
                
                 <img src={require('../asset/icons/no-transaction.png').default}  width={"100"} /> 
                </div>}
          
              <p className="detail-notif-duration">This Week</p>
              {Week && Week.length > 0? Week.slice(0,2).map((transaction, idx) => (<li>
                <div className="card-notification" key={idx}>
                  {transaction.transactionType > 0?   <i className="fa fa-arrow-down">
                    <FaArrowDown></FaArrowDown>
                  </i> :  <i className="fa fa-arrow-up">
                    <FaArrowUp></FaArrowUp>
                  </i>}
                
                  <div className="notif-detail">
                    <p>{transactionType[transaction.transactionDetails-1]} {toFrom[transaction.transactionType]} {transaction.transactionType > 0 ?  transaction.sender :transaction.receiver}</p>
                    <h2>{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(transaction? transaction.amount : 0)}</h2>
                  </div>
                </div>
              </li>)) : <div className="card-notification" style={{height : 195}}>
          <p className="col-grey" >Oopsie, You Have No Transaction History Yet For This Week. . . </p>
         <img src={require('../asset/icons/no-transaction.png').default}  width={"100"} /> 
        </div> }
              
            </div>
            {/* <!-- End Nav Body --> */}
          </div>
        </div>

      </nav>
    </div>
  );
}
