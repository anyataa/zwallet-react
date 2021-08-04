import React, { useEffect, useReducer, useState } from 'react'
import { inRupiah, setTransactionData } from '../../global'
import { Link } from 'react-router-dom'

export const BalanceTransaction = (props) => {
    const [Transaction, setTransaction] = useState([])
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => {
      if(JSON.parse(localStorage.getItem("userData")) &&JSON.parse(localStorage.getItem("transaction-data")) ){
        // setTransactionData(JSON.parse(localStorage.getItem("userData")).accountId);
        setTransaction(JSON.parse(localStorage.getItem("transaction-data")).listTransaction);
        // console.log(JSON.parse(localStorage.getItem("transaction-data")).listTransaction[0])
        forceUpdate()
      }
    }, [])

    const renderTransaction = () => {
      if(Transaction){
        return Transaction.slice(-4).map(item => (
          <div className="custom-profile-view">
            <div className="profile-container">
              <div className="profile-img">
                <img src={item.userImage ? item.userImage : "https://i.ibb.co/FHLx6h9/default.png"} alt="" />
              </div>
              <div className="profile-data">
                {/* 0 : in , 1 : out */}
              {item.transactionType  > 0 ?  <h3 className="col-grey">{item.sender}</h3> :  <h3 className="col-grey">{item.receiver}</h3>}
                {/* {item.transactionDetails == 0   ? <p className="col-grey">Transfer</p> :  <p className="col-grey">Subscription</p>} */}
                <p className="col-grey">{item.transactionDetails == 1 ? "Transfer" : item.transactionDetails == 2 ? "Subscription" : item.transactionDetails == 3 ? "Payment" : item.transactionDetails == 4 ? "Top Up" : item.transactionDetails == 5 ? "Retrieve" : "Other"}</p>
              </div>
            </div>
            {item.transactionType > 0 ?  <h2 className="col-green">+{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits : 0 }).format(item.amount)}</h2> :<h2 className="col-red">-{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits : 0 }).format(item.amount)}</h2>  }
          </div>
        ))
      }else{
        {console.log("YES", Transaction)}
        return <div><h1> <br /><br /><br /><br /> No Transaction Yet...</h1></div>
      }
    }

    return (
      <div className="contact-list-container">
        {renderTransaction()}
      </div>
      // Transaction Details
      //  1 : Transfer
      //  2 : Subscription
      //  3 : Payment
      //  4 : Top Up
      //  5 : Retrieve
  )
}
