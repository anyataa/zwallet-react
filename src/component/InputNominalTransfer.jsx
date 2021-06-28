import React, { } from "react";
import "../style/transfer.css";
import "../style/navBar.css";
import { Link } from "react-router-dom";
import { formatRupiah } from "../global";
import { ModalPin } from "./ModalPin";

export const InputNominalTransfer = (props) => {
const setAmountInput= function(e) {
    props.setAmount(e.target.value)

}
const goToConfirmation = function() {
    props.setInputDisapear(false)
}




  return (
    < >
      <p class="transfer-primary-text">Transfer Money</p>
      <div class="transfer-item-wrapper">
          {console.log(props)}
        <img
          src={`https://randomuser.me/api/portraits/men/${props.transferTo[0].id}.jpg`}
          alt=""
          class="transfer-contact-image"
          width="70px"

        />
        <div className="transer-contact">
          <p className="transfer-primary-text">{props.transferTo[0].name}</p>
          <p className="transfer-secondary-text">{props.transferTo[0].phone}</p>
        </div>
      </div>

      <div className="transfer-input-amount-wrapper">
        <p className="transfer-secondary-text">
          Type the amount you want to transfer and then
          <br />
          press continue to the next steps.
        </p>
        <div className="transfer-input-amount-wrapper2">
          <input onChange={e => (setAmountInput(e))} value={props.amount} type="text" id="transfer-input-amount" placeholder="0.00" />
          <p className="transfer-primary-text">Rp{props.amount? props.transferTo[0].balance - props.amount: props.transferTo[0].balance} Available</p>
          {/* Check if amount exceeding the balance */}
          {}
          <div className="transfer-input-notes-wrapper">
            <img
              src="../assets/images/pen.svg"
              alt=""
              id="transfer-input-amount-icon"
            />
            <input
              type="text"
              name=""
              id="transfer-input-notes"
              placeholder="Add some notes"
              value={props.noteTransferIn}
              onChange={(e)=> props.setNoteTransfer(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="set-transfer-button-confirmation">
            <Link onClick={props.setContainerList} to="/transfer" style={{ textDecoration: "none" }}>
              <input type="button" value="Back" className="transfer-btn" />
            </Link>
              <input onClick={goToConfirmation} type="button" value="Continue" className="transfer-btn" />
          </div>
    </>
  );
};
