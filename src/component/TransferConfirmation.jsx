import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputNominalTransfer } from "./InputNominalTransfer";

export const TransferConfirmation = (props) => {
  const params = window.location.href.slice(-1);
  const selectedContact = props.data.filter(
    (dataDetail) => dataDetail.id == params
  );

// checkLocal

const setContainerBefore = function()  {
    props.setContainer()
    console.log("triggered")
}
// Setstate
  const [isNoInput, setNoInput] = useState(true);
  const [nominalTransfer, setNominalTransfer] = useState()
  const [noteTransfer, setNoteTransfer] = useState("")
  const setBalanceLeft = (selectedContact[0].balance) - nominalTransfer

 
  return (
    <div className="right">
      {isNoInput  ? (
        <InputNominalTransfer 
        setAmount={setNominalTransfer}
         amount={nominalTransfer}
         setNoteTransfer= {setNoteTransfer}
         noteTransferIn={noteTransfer}
        setInputDisapear={setNoInput} 
         transferTo={selectedContact} 
         setContainerList={setContainerBefore} >
        </InputNominalTransfer>
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
            <p   className="transfer-primary-text">
              {noteTransfer}
            </p>
          </div>
          <div className="set-transfer-button-confirmation">
            <Link to="/transfer" style={{ textDecoration: "none" }}>
              <input onClick={setContainerBefore}  type="button" value="Back" className="transfer-btn" />
            </Link>
            {/* <Link to="/transfer" style={{ textDecoration: "none" }}> */}
              <input onClick type="button" value="Continue" className="transfer-btn" />
            {/* </Link> */}
          </div>
        </div>
      )}
    </div>
  );
};
