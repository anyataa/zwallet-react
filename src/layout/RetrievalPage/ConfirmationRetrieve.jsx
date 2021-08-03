import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlAPI } from "../../asset/urls";


export const RetrieveConfirmation = (props) => {
  const [data, setData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [accountData, setAccountData] = useState({})

  useEffect(() => {
    // var tempData = JSON.parse(localStorage.getItem('friends-data'))
    // for(let i=0; i < tempData.length; i++){
    //   if(tempData[i].id == props.match.params.id){
    //     setData(tempData[i])
    //   }
    // }
    
    setTransferData(JSON.parse(localStorage.getItem('retrieve-data')))
    setAccountData(JSON.parse(localStorage.getItem("userData")))
  }, [])

  // const getUser = () => {
  //   axios.get(urlAPI + '/user/getFriend/')
  // }

  const onTransfer = () => {
    if(transferData && accountData){
        console.log(accountData)
      var body = {
        transactionAmount: transferData.nominalTransfer,
        transactionNotes : transferData.noteTransfer,
        // TODOANYA: change from account id active user [DONE]
        fromAccountId : accountData.accountId,
        // TODOANYA: change from account id based on friends user ID
        toUserId : 2
      }

      axios.post(urlAPI+"/transaction/transfer", body).then(res => {
        console.log(res)
        localStorage.setItem("userData", JSON.stringify({...JSON.parse(localStorage.getItem("userData")), accountBalance: res.data.data.fromAccountBalance}));
      }).catch (err => {
        console.log(err)
      })
    }
    props.setModalToggle()
    
  }


  return (
    <div className="right">
      {/* {
        console.log(accountData)
      } */}
        <div>
          <p className="transfer-primary-text">Retrieve To</p>
          <div className="transfer-item-wrapper">
            <img
              src={`https://randomuser.me/api/portraits/men/${data.id}.jpg`}
              alt=""
              className="transfer-contact-image"
            />
            <div className="transfer-contact">
              <p className="transfer-primary-text">{data.bankName ? data.bankName : "Bank"}</p>
              <p className="transfer-secondary-text">
                {data.phoneNumber ? data.phoneNumber : "082222222222"}
              </p>
            </div>
          </div>
          <p className="transfer-primary-text">Details</p>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Amount</p>
            <p className="transfer-primary-text">{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(transferData? transferData.amount : 0)}</p>
          </div>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Balance Left</p>
            <p className="transfer-primary-text">{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(transferData? transferData.balance : 0)}</p>
          </div>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Date & Time</p>
            <p className="transfer-primary-text">
              {Date().toLocaleString().slice(0, 21)}
            </p>
          </div>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Notes</p>
            <p className="transfer-primary-text">{transferData.noteTransfer}</p>
          </div>
          <div className="set-transfer-button-confirmation">
            <Link to={`/transfer/${data.id}`} style={{ textDecoration: "none" }}>
              <input
                type="button"
                value="Back"
                className="transfer-btn"
              />
            </Link>
            {/* <Link to="/transfer" style={{ textDecoration: "none" }}> */}
            <input
              onClick={onTransfer}
              type="button"
              value="Continue"
              className="transfer-btn"
            />
            {/* </Link> */}
          </div>
        </div>
      {/* {isNoInput ? (
      ) : (
      )} */}
    </div>
  );
 
};
