import React, { useEffect, useState } from 'react'
import { inRupiah, setTransactionData } from '../../global'
import { Link } from 'react-router-dom'

export const BalanceTransaction = (props) => {
    const [Transaction, setTransaction] = useState([])
    useEffect(() => {setTransactionData();   setTransaction(JSON.parse(localStorage.getItem("transaction-data")).listTransaction)}, [])
    return (
        <div className="contact-list-container">
            {(Transaction.slice(-4) ).map((item) => ( <div className="custom-profile-view">
            <div className="profile-container">
              <div className="profile-img">
                <img src={`https://randomuser.me/api/portraits/men/1.jpg`} alt="" />
              </div>
              <div className="profile-data">
                <h3 className="col-grey">{item.toAccountId.userId.username}</h3>
                {item.transactionDetail == 1 ? <p className="col-grey">Transfer</p> :  <p className="col-grey">Subscription</p>}
               
              </div>
            </div>
            {item.transactionType > 0 ? <h2 className="col-red">-{item.transactionAmount}</h2> : <h2 className="col-green">+{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits : 0 }).format(item.transactionAmount)}</h2> }
          </div>))}
        </div>
    )
}
