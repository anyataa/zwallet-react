import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlAPI } from "../asset/urls";
import { InputNominalTransfer } from "./InputNominalTransfer";

export const TransferConfirmation = (props) => {
  const [data, setData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [accountData, setAccountData] = useState({})
  const onTransfer = () => {
    setAccountData(JSON.parse(localStorage.getItem("userData")))
    if(transferData && accountData){
      console.log(accountData.accountId)
      var body = {
        transactionAmount: transferData.nominalTransfer,
        transactionNotes : transferData.noteTransfer,
        // TODOANYA: change from account id active user [DONE]
        fromAccountId : 13,
        // TODOANYA: change from account id based on friends user ID
        toUserId : 2
      }

      axios.post(urlAPI+"/transaction/transfer", body).then(res => {
        console.log(res)
      }).catch (err => {
        console.log(err)
      })
    }
    props.setModalToggle()
    
  }

  useEffect(() => {
    var tempData = JSON.parse(localStorage.getItem('friends-data'))
    for(let i=0; i < tempData.length; i++){
      if(tempData[i].id == props.match.params.id){
        setData(tempData[i])
      }
    }

    setTransferData(JSON.parse(localStorage.getItem('transfer-data')))
  }, [])

  return (
    <div className="right">
      {console.log("transfer",transferData)}
        <div>
          <p className="transfer-primary-text">Transfer To</p>
          <div className="transfer-item-wrapper">
            <img
              src={`https://randomuser.me/api/portraits/men/${data.id}.jpg`}
              alt=""
              className="transfer-contact-image"
            />
            <div className="transfer-contact">
              <p className="transfer-primary-text">{data.username ? data.username : "Samuel Suhi"}</p>
              <p className="transfer-secondary-text">
                {data.phoneNumber ? data.phoneNumber : "082222222222"}
              </p>
            </div>
          </div>
          <p className="transfer-primary-text">Details</p>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Amount</p>
            <p className="transfer-primary-text">{Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(transferData? transferData.nominalTransfer : 0)}</p>
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


  // checkLocal

  // const setContainerBefore = function () {
  //   props.setContainer();
  //   console.log("triggered");
  // };
  // Setstate
  // const [isNoInput, setNoInput] = useState(true);
  // const [nominalTransfer, setNominalTransfer] = useState();
  // const [noteTransfer, setNoteTransfer] = useState("");
  // const setBalanceLeft = selectedContact[0].balance - nominalTransfer;

  // return (
  //   <div className="right">
  //     {console.log(data)}
      {/* {isNoInput ? (
        <InputNominalTransfer
          setAmount={setNominalTransfer}
          amount={nominalTransfer}
          setNoteTransfer={setNoteTransfer}
          noteTransferIn={noteTransfer}
          setInputDisapear={setNoInput}
          transferTo={selectedContact}
          setContainerList={setContainerBefore}
        />
      ) : (
        <div>
          <p className="transfer-primary-text">Transfer To</p>
          <div className="transfer-item-wrapper">
            <img
              src={`https://randomuser.me/api/portraits/men/${selectedContact[0].id}.jpg`}
              alt=""
              className="transfer-contact-image"
            />
            <div className="transfer-contact">
              <p className="transfer-primary-text">{selectedContact[0].name}</p>
              <p className="transfer-secondary-text">
                {selectedContact[0].phone}
              </p>
            </div>
          </div>
          <p className="transfer-primary-text">Details</p>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Amount</p>
            <p className="transfer-primary-text">Rp{nominalTransfer}</p>
          </div>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Balance Left</p>
            <p className="transfer-primary-text">Rp{setBalanceLeft}</p>
          </div>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Date & Time</p>
            <p className="transfer-primary-text">
              {Date().toLocaleString().slice(0, 21)}
            </p>
          </div>
          <div className="transfer-item-wrapper transfer-confirmation-detail-wrapper">
            <p className="transfer-secondary-text">Notes</p>
            <p className="transfer-primary-text">{noteTransfer}</p>
          </div>
          <div className="set-transfer-button-confirmation">
            <Link to="/transfer" style={{ textDecoration: "none" }}>
              <input
                onClick={setContainerBefore}
                type="button"
                value="Back"
                className="transfer-btn"
              />
            </Link> */}
            {/* <Link to="/transfer" style={{ textDecoration: "none" }}> */}
            {/* <input
              onClick={props.setModalToggle}
              type="button"
              value="Continue"
              className="transfer-btn"
            /> */}
            {/* </Link> */}
          {/* </div>
        </div>
      )} */}
  //   </div>
  // );
};
