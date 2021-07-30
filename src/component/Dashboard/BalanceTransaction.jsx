import React, { useEffect, useReducer, useState } from 'react'
import { inRupiah, setTransactionData } from '../../global'
import { Link } from 'react-router-dom'

export const BalanceTransaction = (props) => {
    const [Transaction, setTransaction] = useState([])
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => {
      if(JSON.parse(localStorage.getItem("userData")).user.userId){
        // setTransactionData(JSON.parse(localStorage.getItem("userData")).user.userId);
        // setTransaction(JSON.parse(localStorage.getItem("transaction-data")).listTransaction);forceUpdate()
      }
    }, [])

    return (
        <div className="contact-list-container">
            {/* {Transaction.length > 0 ?  (Transaction.slice(-4) ).map((item) => ( <div className="custom-profile-view">
      
            <div className="profile-container">
              <div className="profile-img">
                <img src={`https://randomuser.me/api/portraits/men/1.jpg`} alt="" />
              </div>
              <div className="profile-data">
              {item.transactionType > 0 ?  <h3 className="col-grey">{item.receiver}</h3> :  <h3 className="col-grey">{item.sender}</h3>}
                {item.transactionDetails > 0   ? <p className="col-grey">Transfer</p> :  <p className="col-grey">Subscription</p>}
               
              </div>
            </div>
            {item.transactionType > 0 ? <h2 className="col-red">-{item.amount}</h2> : <h2 className="col-green">+{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits : 0 }).format(item.amount)}</h2> }
          </div>)): <div><h1> <br /><br /><br /><br /> No Transaction Yet...</h1></div>  } */}
        </div>
        // Transaction Details
        //  1 : Transfer
        //  2 : Subscription
        //  3 : Payment
        //  4 : Top Up
        //  5 : Retrieve
    )
}
