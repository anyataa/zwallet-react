import axios from "axios";
import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { onLoginAction } from "../actions";
import { urlAPI } from "../asset/urls";
import { setTransactionData } from "../global";
import PinInput from 'react-pin-input';

export const ModalPin = ({ modalToggle, setModalToggle }) => {
  //   Pin control
  const [userPin, setUserPin] = useState('')

  // =========== Transfer ================
  const [message, setMessage] = useState("");

  const user = useSelector((state) => state.user);
  const transfer = useSelector(state => state.transfer)
  
  const dispatch = useDispatch()
  
  const onTransfer = () => {
    if (transfer && user) {
      var body = {
          //==================== Pin Data Where ========================
          transactionAmount: transfer.nominalTransfer,
          transactionNotes: transfer.noteTransfer,
          fromAccountId: user.accountId,
          toUserId: transfer.id,
          userPin
        };
      axios.post(urlAPI + "/transaction/transfer", body)
      .then((res) => {
        if (res.data.message.includes("Sorry")) {
          setMessage(res.data.message);
        } else if (res.data.message.includes("Success")) {
          dispatch(onLoginAction({...user, accountBalance: res.data.data.fromAccountBalance}))
          
          setTransactionData(user.accountId);
          setModalToggle();
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Sorry, something went wrong...");

      });
    }
  };

  if(message.includes("something went wrong")){
    return <Redirect to="/transfer/status/failed"/>
  }else if(message.includes("Success")){
    return <Redirect to="/transfer/status/success"/>
  }
  return (
    // set display to flex for debugging
    <div id="modal" style={{ display: modalToggle ? "flex" : "none" }}>
      <div className="pin-confirmation-box">
        <div className="modal-close-icon-wrapper">
          <p className="transfer-primary-text">Enter PIN to Transfer</p>
          <FaTimes className="modal-close-icon" onClick={setModalToggle} />
        </div>
        <p className="transfer-secondary-text">
          Enter your 6 digits PIN for confirmation to <br />
          continue transferring money.
          <br />
          <span className="col-red">{message}</span>
        </p>
        <div className="transfer-pin-input-wrapper">
          <PinInput 
            length={6}
            onChange={e => setUserPin(e)} 
            type="numeric"
            style={{padding: '10px'}}
            inputStyle={{borderColor: 'rgba(66, 63, 63, 0.4)', borderRadius: '10px', height: '65px', width: '53px', fontSize: '30px', fontWeight: 'bold', margin: '0 10px'}}
            inputFocusStyle={{borderColor: '#6379F4'}}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>
        <Link >
          <input
            type="button"
            value="Continue"
            className="transfer-btn"
            id="pin-btn"
            disabled={
              userPin.length == 6
                ? false
                : true
            }
            onClick={onTransfer}
          />
        </Link>
      </div>
    </div>
  );
};
