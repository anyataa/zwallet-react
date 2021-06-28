import React, { useEffect, useState } from 'react'
import { setTransactionData } from '../global'

export const BalanceTransaction = (props) => {
    const [Transaction, setTransaction] = useState([])
    useEffect(() => {setTransactionData();   setTransaction(JSON.parse(localStorage.getItem("transaction-data")))}, [])
    return (
        <div className="right-dash-bottom-container">
          {console.log(Transaction)}
        <div className="see-all-contact">
          <h2>Transaction History</h2>
          <a href="./transactionHistoryPage.html" className="col-secondary">
            See All
          </a>
        </div>
        {/* Contact list */}
        <div className="contact-list-container">
            {Transaction.map((to) => ( <div className="custom-profile-view">
            <div className="profile-container">
              <div className="profile-img">
                <img src={`https://randomuser.me/api/portraits/men/${to.id}.jpg`} alt="" />
              </div>
              <div className="profile-data">
                <h3 className="col-grey">{to.to}</h3>
                <p className="col-grey">{to.detail}</p>
              </div>
            </div>
            {to.type > 0 ? <h2 className="col-red">-{to.total}</h2> : <h2 className="col-green">+{to.total}</h2> }
          </div>))}
          {/* MAPPING DONE, TODO: Image and Color Classification */}
         
       
        </div>
      </div>
    )
}
