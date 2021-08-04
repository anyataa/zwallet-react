import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlAPI } from "../../asset/urls";


export const RetrieveConfirmation = ({setDisplay, display}, props) => {
  const [data, setData] = useState([]);
  const [transferData, setTransferData] = useState([]);
    const [retrieveData, setRetrieveData] = useState(null)
  const [accountData, setAccountData] = useState(null)
  const [accountId, setAccountId] = useState(null)
  

  useEffect(() => {
    // var tempData = JSON.parse(localStorage.getItem('friends-data'))
    // for(let i=0; i < tempData.length; i++){
    //   if(tempData[i].id == props.match.params.id){
    //     setData(tempData[i])
    //   }
    // }
    
    setTransferData(JSON.parse(localStorage.getItem('retrieve-data')))
    setRetrieveData(JSON.parse(localStorage.getItem('retrieve-data')))
    setAccountData(JSON.parse(localStorage.getItem("userData")))
    if (accountData) {
      setAccountId(accountData.accountId)
    }
  }, [])

  // const getUser = () => {
  //   axios.get(urlAPI + '/user/getFriend/')
  // }

  const onRetrieve = () => {
    if(retrieveData && accountData && accountId){
        // console.log(accountData)
      var body = {
        username :   retrieveData.bankName,
        transactionAmount: retrieveData.amount,
        transactionNotes : `Retrieve : ${retrieveData.bankNumber}`,
        toAccountId : accountId
       
      }

      axios.post(urlAPI+"/zwallet/retrieve/bank", body).then(res => {
        console.log(res)
        if (res.data != null) {
          console.log("success")
          setDisplay()
          // localStorage.removeItem("retrieve-data")    
        }

        // localStorage.setItem("userData", JSON.stringify({...JSON.parse(localStorage.getItem("userData")), accountBalance: res.data.data.fromAccountBalance}));
      }).catch (err => {
        console.log(err)
      })
    }
    // props.setModalToggle()
    
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
              <p className="transfer-primary-text">{retrieveData ? retrieveData.bankName  : "Bank"}</p>
              <p className="transfer-secondary-text">
                {retrieveData ? retrieveData.bankNumber : "082222222222"}
              </p>
            </div>
          </div>
          <p className="transfer-primary-text">Details</p>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Amount</p>
            <p className="transfer-primary-text">{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits : 0 }).format(retrieveData? transferData.amount : 0)}</p>
          </div>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Balance Left</p>
            <p className="transfer-primary-text">{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" , minimumFractionDigits : 0}).format(retrieveData? retrieveData.balance : 0)}</p>
          </div>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Date & Time</p>
            <p className="transfer-primary-text">
              {Date().toLocaleString().slice(0, 21)}
            </p>
          </div>
          {/* <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Notes</p>
            <p className="transfer-primary-text">{transferData.noteTransfer}</p>
          </div> */}
          <div className="set-transfer-button-confirmation">
            <Link to={`/retrieval/${retrieveData? retrieveData.bankName : "error"}`} style={{ textDecoration: "none" }}>
              <input
                type="button"
                value="Back"
                className="transfer-btn"
              />
            </Link>
            {/* <Link to="/transfer" style={{ textDecoration: "none" }}> */}
            <input
              onClick={onRetrieve}
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
