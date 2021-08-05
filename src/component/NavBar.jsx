import React, { useEffect, useReducer, useState } from "react";
import "../style/navBar.css";
import { FaArrowDown, FaArrowUp, FaBell } from "react-icons/fa";
export default function NavBar() {
const [UserData, setUserData] = useState(null)
const [UserName, setUserName] = useState("")
const [PhoneNumber, setPhoneNumber] = useState("")
const [UserImage, setUserImage] = useState({})
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

useEffect(() => {
  // setUserData(JSON.parse(localStorage.getItem("userData")))
  // TODOANYA : User Image Handling
  setUserImage(JSON.parse(localStorage.getItem("userData")).userImage)
  setUserName(JSON.parse(localStorage.getItem("userData")).userName)
  setPhoneNumber(JSON.parse(localStorage.getItem("userData")).phoneNumber)
  // setToday()
  // setWeek()

 
 
  
  
  // TODONYA : Error kadang
  // if(UserData){localStorage.setItem("username", localStorage.getItem("userData").account.userId.username)
  // console.log("INI")
  // localStorage.setItem("phone-number", JSON.stringify(localStorage.getItem("userData").phonenumber))}
  
}, [])

  return (
    <div className="nav-container">
      <nav>
        <h2 className="col-secondary">Zwallet</h2>
        <div className="profile-container">
          <div className="profile-img">
            {UserImage?  <img src={`https://randomuser.me/api/portraits/men/1}.jpg`} alt="" width="50px" /> : <img src="https://i.ibb.co/FHLx6h9/default.png" alt="" width="50px" /> }
           
          </div>
          <div className="profile-data">
            {
             UserName? <h3>{UserName}</h3> : <h3>Error</h3>
            }
            <p className="col-white50">{PhoneNumber ? "+62 "+PhoneNumber.slice(1,PhoneNumber.length) : "Error"}</p>
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
              {Today && Today.length > 0? Today.map(transaction => (<li>
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
              {Week && Week.length > 0? Week.map(transaction => (<li>
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
          <p className="col-grey" >Oopsie, You Have No Transaction History Yet For This Week. . . </p>
         <img src={require('../asset/icons/no-transaction.png').default}  width={"100"} /> 
        </div> }
              {/* <li>
                <div className="card-notification">
                  <i className="fa fa-arrow-down">
                    <FaArrowDown></FaArrowDown>
                  </i>
                  <div className="notif-detail">
                    <p>Top up from BNI E-Banking</p>
                    <h2>RP 300.000</h2>
                  </div>
                </div>
              </li>
              <li>
                <div className="card-notification">
                  <i className="fa fa-arrow-up">
                    <FaArrowUp></FaArrowUp>
                  </i>
                  <div className="notif-detail">
                    <p>Transfer to Jessica Lee</p>
                    <h2>RP 100.000</h2>
                  </div>
                </div>
              </li> */}
            </div>
            {/* <!-- End Nav Body --> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
